// DOMContentLoadedとwindow.onloadの両方に対応
const initApp = () => {
	console.log('main.js');

// スキルデータを格納する変数
window.skillData = [];
window.skillDataLoaded = false;
window.emeraldiaEnemies = {};

// 敵データを読み込む関数
const loadEnemyData = async () => {
	try {
		const response = await fetch('enemies.json');
		const data = await response.json();
		window.emeraldiaEnemies = data;
		console.log('Loaded enemy data:', window.emeraldiaEnemies);
		if (window.vm) {
			window.vm.emeraldiaEnemies = window.emeraldiaEnemies;
		}
	} catch (error) {
		console.error('Failed to load enemy data:', error);
	}
};

// CSVファイルを読み込む関数
const loadSkillData = async () => {
	try {
		const response = await fetch('skills.csv');
		const buffer = await response.arrayBuffer();
		const decoder = new TextDecoder('UTF-8');
		const text = decoder.decode(buffer);
		
		// CSVをパース
		const lines = text.split(/\r?\n/); // 改行文字を正しく処理
		const headers = lines[0].split(',').map(h => h.trim()); // ヘッダーもトリム
		
		window.skillData = lines.slice(1)
			.filter(line => line.trim())
			.map((line, index) => {
				const values = line.split(',');
				const skill = {};
				headers.forEach((header, i) => {
					const value = values[i] ? values[i].trim() : '';
					// data.currentSkillDataの型を参照して判断
					if (header in data.currentSkillData) {
						// 元のデータ型が数値の場合は数値に変換
						if (typeof data.currentSkillData[header] === 'number') {
							skill[header] = value === '' ? null : Number(value);
						} else {
							skill[header] = value;
						}
					} else {
						// currentSkillDataに存在しないヘッダーは文字列として扱う
						skill[header] = value;
					}
				});
				skill.index = index;
				return skill;
			});
			
		console.log(`Loaded ${window.skillData.length} skills`);
		console.log('Sample skills:', window.skillData.slice(0, 5));
		// VueインスタンスのskillDataLoadedを更新
		if (window.vm) {
			window.vm.skillDataLoaded = true;
		}
	} catch (error) {
		console.error('Failed to load skill data:', error);
	}
};

// ページ読み込み時にスキルデータを読み込む
// loadSkillData(); // 後でVueマウント後に呼び出す
const base_damage = (params) => {
  
  let 攻撃力補正 = 1;
  let 属性攻撃補正 = 1;
  let 全ダメージ補正 = 1;
  let 効率 = 1;
  
  const skill = params.currentSkillData;
  const isPhysical = skill.物理or魔法 === '物理';

  const 防御倍率 = 1 / Math.exp(params.敵防御 / 3761.35);
  const 貫通率 = (isPhysical ? params.物理_貫通 : params.魔法_貫通) / 100;

  if (skill.スキルタイプ === '召喚') {
    // 召喚スキルの場合、全ダメージ補正（最小/最大ダメージの適用倍率）のみがスキルレベルで変動
    // 他の補正（攻撃力、属性攻撃、クリティカルダメージ）は100%固定
    攻撃力補正 = 1;  // 100%固定
    属性攻撃補正 = 1;  // 100%固定
    
    // 全ダメージ補正のみスキルレベルで変動
    {
      const baseBonus = skill.全ダメージ補正;
      const level = params.スキルレベル || 1;
      全ダメージ補正 = (baseBonus + level * 2) / 100;
    }
  }
  else {
    効率 += params.効率 / 100;
  }
    
  
  let 基本ダメージ1;
  let 基本ダメージ2;
  let 最大;
  let 最小;
  let 追加ダメ;
  let 筋魔;
  let 攻撃or属性;
  
  if (isPhysical) {
    筋魔 = params.筋力;
    攻撃or属性 = (params.攻撃最大 + params.攻撃最小) * 攻撃力補正;
    最大 = params.物理_最大;
    最小 = params.物理_最小;
    追加ダメ = params.物理_追加ダメ;
  }
  else {
    筋魔 = params.魔力;
    攻撃or属性 = params.属性 * 2 * 属性攻撃補正;
    // 数値変換を強制して文字列結合を防ぐ
    最大 = Number(params.魔法_最大) + Number(params.属性最大);
    最小 = Number(params.魔法_最小) + Number(params.属性最小);
    追加ダメ = params.魔法_追加ダメ;
  }
  最大 = Number(最大) + Number(params.基礎最大);
  最小 = Number(最小) + Number(params.基礎最小);
  
  追加ダメ += params.敵タイプ === 'ボス' ? params.ボス追加ダメ : params.一般追加ダメ;
  const 支配 = params.敵タイプ === 'ボス' ? params.ボス支配 : params.一般支配;

  基本ダメージ1 = 攻撃or属性 * params.スキル倍率 / 100;
  基本ダメージ2 = params.スキル追加ダメ + 筋魔 * 効率;
  最小 = Math.min(最大+10, 最小);
    
  const result = (
		(基本ダメージ1 + 基本ダメージ2) * (1 - (1 - 防御倍率) * (1 - 貫通率))
	      + 追加ダメ
	)
	  * (1 + 支配 / 100)
	  * (最大 + 最小) / 200 * 全ダメージ補正
	  * (1 - params.敵ダメ減_ / 100);
  
  return result;
};

const cri_rate = (params) => { 
  const skill = params.currentSkillData;
  const isPhysical = skill.物理or魔法 === '物理';
  const クリ率 = isPhysical ? params.物理_クリ率 : params.魔法_クリ率;
	return Math.min(100, クリ率 + 15 * params.幸運 / params.敵幸運);
}

const cri_damage = (params) => { 
  const skill = params.currentSkillData;
  const isPhysical = skill.物理or魔法 === '物理';
  const クリダメ = isPhysical ? params.物理_クリダメ : params.魔法_クリダメ;
  let クリダメ補正 = ((100 + クリダメ) * (1 - params.敵クリ減 / 1000) | 0) / 100;

  // 召喚スキルのクリティカルダメージ補正も100%固定（ブログによると適用倍率100%のみ存在）
  // ※2021年2月時点では、最小/最大ダメージ以外の全ステータスは適用倍率100%固定
	return base_damage(params) * クリダメ補正;
}

const damage = (params) => {
	const cr = cri_rate(params) / 100;
	const baseDmg = base_damage(params);
	const criDmg = cri_damage(params);
	
	const nonCriPart = baseDmg * (1 - cr);
	const criPart = criDmg * cr;
	const totalDamage = nonCriPart + criPart;
	
	return totalDamage;
}

const incr = (key) => {
	
	if(key == '経験値') {
		return Math.floor(damage(data) /100/(1 + data[key] / 100));
	}
	if(key == 'HP') {
		const abs = Math.ceil((data['HP'] - data['体力'] * 7)  / (1 + data['HP_'] / 100));
		return Math.floor(damage(data) * (1 + data['HP_'] / 100) / data['HP']);
	}
	if(key == 'HP%') {
		return Math.floor((data['HP'] - data['体力'] * 7) / data['HP'] / 100 / (1 + data['HP_'] / 100));
	}
	const tmp = Object.assign({}, data);
	
	const skill = data.currentSkillData;
	const isPhysical = skill.物理or魔法 === '物理';

	if(key.endsWith('%')) {
		const prefix = key.substring(0, key.length - 1);
    const percent = tmp[prefix + '_'] || 0;
    if(prefix == '攻撃') {
      {
        const abs = Math.ceil(tmp['攻撃最大'] / (1 + percent / 100));
        tmp['攻撃最大'] = abs * (1 + percent / 100);
      }
      {
        const abs = Math.ceil(tmp['攻撃最小'] / (1 + percent / 100));
        tmp['攻撃最小'] = abs * (1 + percent / 100);
      }
    }
    else {
      const plus_key = prefix == '追加ダメ' ? skill.物理or魔法 + '_' + prefix : prefix;
      const abs = Math.ceil(tmp[plus_key] / (1 + percent / 100));
      tmp[plus_key] = abs * (1 + percent / 100);
    }
	}
  else if (key === '攻撃最大' || key === '攻撃最小') {
		tmp[key] = tmp[key] + 1 + tmp['攻撃_'] / 100;
  }
	else if(key.startsWith('最終')) {
		const prefix = key.substring(2);
    const plus_key = skill.物理or魔法 + '_' + prefix;
		const abs = Math.ceil(tmp[plus_key] / (1 + tmp[key] / 100));
		tmp[plus_key] = abs * (1.0 + tmp[key] / 100);
	}
	else if('最終' + key in tmp) {
    const plus_key = skill.物理or魔法 + '_' + key;
		tmp[plus_key] = tmp[plus_key] + 1 + tmp['最終' + key] / 100;
	}
	else if(key == '貫通') {
    const plus_key = skill.物理or魔法 + '_' + key;
		tmp[plus_key] = 100 - (100 - tmp[plus_key]) * 0.99;
	}
	else if(key + '_' in tmp) {
    const plus_key = key == '追加ダメ' ? skill.物理or魔法 + '_' + key : key;
	tmp[plus_key] = tmp[plus_key] + 1 + tmp[key + '_'] / 100;
	}
	else if(key == 'クリ率') {
    const plus_key = skill.物理or魔法 + '_' + key;
		tmp[plus_key] = tmp[plus_key] + 1;
	}
	else {
		tmp[key] = tmp[key] + 1;
	}
	return Math.floor(damage(tmp) - damage(data));
};

const base = key => {
	
	if (key === '攻撃最大' || key === '攻撃最小') {
		const attackPercent = data.攻撃_;
		return data[key] / (1 + attackPercent / 100);
	}

	const addPrefix = (k) => {
		if (['クリ率', 'クリダメ', '最大', '最小', '貫通', '追加ダメ'].includes(k)) {
	    const skill = data.currentSkillData;
	    const isPhysical = skill.物理or魔法 === '物理';
			return (isPhysical ? '物理' : '魔法') + '_' + k;
		}
    return k;
	};
	
	// 実際に使用するキーを決定
	let actualKey = addPrefix(key);
	const value = data[actualKey];
	const percentKey = key + '_';
	
	if('最終' + key in data) {
		const finalValue = data['最終' + key];
		return value / (1 + finalValue / 100);
	}
	if(percentKey in data) {
	  const percentValue = data[percentKey];
		return value / (1 + percentValue / 100);
	}
	return value;
};

const data = {
	// 共通ステータス
	筋力: 546424,
	筋力_: 316,
	効率: 0,
	魔力: 546424,
	魔力_: 316,
  幸運: 400948,
  幸運_: 300,
  体力: 400512,
  体力_: 620,
  HP: 4474100,
  HP_: 217,
  攻撃最大: 50000,
  攻撃最小: 50000,
  攻撃_: 100,
  属性: 14382,
  属性_: 276,
  
  物理_クリ率: 50,
  魔法_クリ率: 50,
  物理_クリダメ: 1993,
  魔法_クリダメ: 1993,
  最終クリダメ: 16,

  物理_最大: 1310,
  魔法_最大: 1310,
  物理_最小: 1473,
  魔法_最小: 1473,
  基礎最大: 105,
  基礎最小: 95,
  属性最大: 0,
  属性最小: 0,
  最終最大: 14,
  最終最小: 0,
  
  物理_貫通: 90,
  魔法_貫通: 90,

  物理_追加ダメ: 247784,
  魔法_追加ダメ: 247784,
  追加ダメ_: 110,

  一般追加ダメ: 122046,
  ボス追加ダメ: 122046,
  一般支配: 17.4,
  ボス支配: 17.4,

  // その他
  防御: 0,
  CT: 0,
  スキル倍率: 100,
  スキル追加ダメ: 0,
  敵タイプ: 'ボス',
  敵防御: 1,
  敵ダメ減: 0,
  敵ダメ減_: 0,
  敵幸運: 1068254,
  敵クリ減: 0,
  経験値: 1243,
  selectedJob: '',
  selectedSkill: '',
  スキルレベル: 1,
  currentSkillData: {
    物理or魔法: '物理',
    スキルタイプ: '攻撃',
    スキル名: '',
    職業: '',
    最大レベル: 20,
    係数初期値: 100,
    係数上昇値: 0,
    固定ダメージ初期値: 0,
    固定ダメージ上昇値: 0,
    攻撃力補正: 100,
    属性攻撃補正: 100,
    全ダメージ補正: 100,
    クリティカルダメージ補正: 100
  },
  skillDataLoaded: false,
  emeraldiaEnemies: {},
  selectedDungeon: '',
  selectedEnemy: '',
  selectedDifficulty: '',
};

const damageFormat = (damage) => {
	let text = '';
	let remainingDamage = damage;
	
	if(remainingDamage >= 100000000) {
		const oku = Math.floor(remainingDamage / 100000000);
		text += oku + '億';
		remainingDamage -= oku * 100000000;
	}
	if(remainingDamage >= 10000) {
		const man = Math.floor(remainingDamage / 10000);
		text += man + '万';
		remainingDamage -= man * 10000;
	}
	text += Math.floor(remainingDamage);
	return text;
}

// Vueインスタンスを安全に作成
const createVueInstance = () => {
  if (typeof Vue === 'undefined') {
    console.log('Vue not loaded yet, retrying...');
    setTimeout(createVueInstance, 100);
    return;
  }
  
  const targetElement = document.getElementById('latale_calc');
  if (!targetElement) {
    console.log('Target element not found, retrying...');
    setTimeout(createVueInstance, 100);
    return;
  }

  window.vm = new Vue ({
    el: '#latale_calc',
    data: data,
  computed: {
    damage: function () { 
    	// 敵防御値への依存を明示的に追跡
    	const enemyDefense = this.敵防御;
    	return damage(this);
    },
    base_damage: function () { 
    	// 敵防御値への依存を明示的に追跡
    	const enemyDefense = this.敵防御;
    	return base_damage(this);
    },
    cri_damage: function () { 
    	// 敵防御値への依存を明示的に追跡
    	const enemyDefense = this.敵防御;
    	return cri_damage(this);
    },
    cri_rate: function () { 
    	// 敵幸運への依存を明示的に追跡
    	const enemyLuck = this.敵幸運;
    	return cri_rate(this);
    },
    incr: () => incr,
    base: () => base,
    damageFormat: () => damageFormat,
    // 職業リスト
    jobs: function() {
      console.log('Computing jobs, skillDataLoaded:', this.skillDataLoaded);
      console.log('skillData length:', window.skillData ? window.skillData.length : 0);
      if (!this.skillDataLoaded) return [];
      const jobSet = new Set();
      window.skillData.forEach(skill => {
        if (skill.職業) {
          jobSet.add(skill.職業);
        }
      });
      const jobList = Array.from(jobSet).sort();
      console.log('Job list:', jobList);
      return jobList;
    },
    // 選択された職業のスキルをフィルタリング
    filteredSkills: function() {
      if (!this.skillDataLoaded || !this.selectedJob) return [];
      return window.skillData.filter(skill => skill.職業 === this.selectedJob);
    },
    // 現在選択されているスキルのタイプ
    currentSkillType: function() {
      return this.currentSkillData ? this.currentSkillData.スキルタイプ : null;
    },
    // 現在選択されているスキルの物理or魔法
    currentSkillPhysicalOrMagical: function() {
      return this.currentSkillData ? this.currentSkillData.物理or魔法 : null;
    },
    // 現在選択されているスキルの最大レベル
    currentSkillMaxLevel: function() {
      return this.currentSkillData ? (this.currentSkillData.最大レベル || 20) : 20;
    },
    // 現在物理タブがアクティブか（スキル設定のタイプを参照）
    isPhysicalTab: function() {
      // スキルが選択されている場合はスキルのタイプに従う
      if (this.currentSkillData && this.currentSkillData.物理or魔法) {
        return this.currentSkillData.物理or魔法 === '物理';
      }
      // スキルが選択されていない場合はデフォルトで物理を返す
      return true;
    },
    // 現在選択されているダンジョンの敵一覧
    currentDungeonEnemies: function() {
      if (!this.selectedDungeon || !this.emeraldiaEnemies[this.selectedDungeon]) {
        return [];
      }
      return this.emeraldiaEnemies[this.selectedDungeon].enemies || [];
    },
    // 現在選択されているダンジョンで利用可能な難易度
    currentDungeonDifficulties: function() {
      if (!this.selectedDungeon || !this.emeraldiaEnemies[this.selectedDungeon] || 
          !this.selectedEnemy || this.emeraldiaEnemies[this.selectedDungeon].enemies.length === 0) {
        return [];
      }
      // 最初の敵から難易度リストを取得（すべての敵が同じ難易度を持つため）
      const firstEnemy = this.emeraldiaEnemies[this.selectedDungeon].enemies[0];
      if (firstEnemy && firstEnemy.difficultyStats) {
        return Object.keys(firstEnemy.difficultyStats).sort((a, b) => Number(a) - Number(b));
      }
      return [];
    },
    // 選択されたスキルのタイトル（ツールチップ用）
    selectedSkillTitle: function() {
      if (!this.currentSkillData) {
        return '';
      }
      const skill = this.currentSkillData;
      return skill.スキル名 + ' (' + skill.スキルタイプ + (skill.物理or魔法 ? ' - ' + skill.物理or魔法 : '') + ')';
    },
    // 一般関連の入力欄を表示するか
    showGeneralInputs: function() {
      // 敵が選択されていない場合は表示
      if (!this.selectedEnemy || !this.selectedDungeon) {
        return true;
      }
      // 敵タイプが一般の場合は表示
      return this.敵タイプ === '一般';
    },
    // ボス関連の入力欄を表示するか
    showBossInputs: function() {
      // 敵が選択されていない場合は表示
      if (!this.selectedEnemy || !this.selectedDungeon) {
        return true;
      }
      // 敵タイプがボスの場合は表示
      return this.敵タイプ === 'ボス';
    },
  },
  methods: {
    // スキル名を切り詰める
    truncateSkillName: function(skillName) {
      if (!skillName) return '';
      const maxLength = 15; // 最大文字数
      if (skillName.length > maxLength) {
        return skillName.substring(0, maxLength) + '...';
      }
      return skillName;
    },
    // 召喚補正値を取得
    getSummonBonus: function() {
      if (!this.currentSkillData || this.currentSkillData.スキルタイプ !== '召喚') {
        return null;
      }
      // ベース補正 + スキルレベル * 2
      const baseBonus = this.currentSkillData.攻撃力補正 || this.currentSkillData.属性攻撃補正 || 
                        this.currentSkillData.全ダメージ補正 || this.currentSkillData.クリティカルダメージ補正 || 100;
      const level = this.スキルレベル || 1;
      return baseBonus + level * 2;
    },
    // 職業が変更されたときの処理
    onJobChange: function() {
      this.selectedSkill = '';
    },
    // スキルが変更されたときの処理
    onSkillChange: function() {
      const skillIndex = Number(this.selectedSkill);
      this.currentSkillData = window.skillData[skillIndex];
      
      if (this.currentSkillData) {
        console.log('Selected skill:', this.currentSkillData);
        console.log('Skill type:', this.currentSkillData.スキルタイプ);
        console.log('Attack power bonus:', this.currentSkillData.攻撃力補正);
        console.log('Attribute attack bonus:', this.currentSkillData.属性攻撃補正);
        console.log('All damage bonus:', this.currentSkillData.全ダメージ補正);
        console.log('Critical damage bonus:', this.currentSkillData.クリティカルダメージ補正);
        
        // スキルの基礎大小を自動設定（召喚スキルはMOB値、攻撃スキルは職業値）
        if (this.currentSkillData.基礎最小 !== null && this.currentSkillData.基礎最小 !== undefined) {
          this.基礎最小 = this.currentSkillData.基礎最小;
        }
        if (this.currentSkillData.基礎最大 !== null && this.currentSkillData.基礎最大 !== undefined) {
          this.基礎最大 = this.currentSkillData.基礎最大;
        }
        console.log('Auto-set base damage from skill:', 
                    '基礎最小:', this.基礎最小, '基礎最大:', this.基礎最大,
                    'Type:', this.currentSkillData.スキルタイプ);
        
        // スキルレベルを最大値にリセット
        this.スキルレベル = this.currentSkillData.最大レベル || 50;
        this.updateSkillValues();
        
        // スキルのタイプに応じてタブを切り替え
        if (this.currentSkillData.物理or魔法 === '物理') {
          this.activeTab = 'physical';
        } else if (this.currentSkillData.物理or魔法 === '魔法') {
          this.activeTab = 'magical';
        }
      }
    },
    // スキル値を更新
    updateSkillValues: function() {
      if (!this.currentSkillData) return;
      
      const skill = this.currentSkillData;
      const level = this.スキルレベル || 1;
      
      if (skill.スキルタイプ === '攻撃' || skill.スキルタイプ === '召喚') {
        // 攻撃スキルまたは召喚スキルの場合、倍率と追加ダメージを計算
        const baseDamage = skill.固定ダメージ初期値 || 0;
        const damagePerLevel = skill.固定ダメージ上昇値 || 0;
        const skillPower = skill.係数初期値 || 0;
        const powerPerLevel = skill.係数上昇値 || 0;
        
        // スキル倍率の計算
        this.スキル倍率 = skillPower + (powerPerLevel * (level - 1));
        
        // スキル追加ダメージの計算
        this.スキル追加ダメ = baseDamage + (damagePerLevel * (level - 1));
      }
    },
    // ダンジョンが変更されたときの処理
    onDungeonChange: function() {
      this.selectedEnemy = '';
      this.selectedDifficulty = '';
      // ダンジョン選択がクリアされた場合は敵ステータスもクリア
      if (!this.selectedDungeon) {
        this.敵タイプ = '一般';
        this.敵防御 = 1;
        this.敵ダメ減 = 0;
        this.敵ダメ減_ = 0;
        this.敵幸運 = 1068254;
        this.敵クリ減 = 0;
      }
    },
    // 敵が変更されたときの処理
    onEnemyChange: function() {
      if (!this.selectedEnemy || !this.selectedDungeon) {
        return;
      }
      
      const dungeonData = this.emeraldiaEnemies[this.selectedDungeon];
      if (!dungeonData) return;
      
      // 選択された敵を検索
      const enemy = dungeonData.enemies.find(e => e.id === Number(this.selectedEnemy));
      
      if (enemy) {
        // 敵のステータスを設定
        this.敵タイプ = enemy.type;
        this.敵防御 = enemy.baseStats.defense || 0;
        
        // 難易度が選択されていない場合は最初の難易度を自動選択
        if (!this.selectedDifficulty && enemy.difficultyStats) {
          const difficulties = Object.keys(enemy.difficultyStats).sort((a, b) => Number(a) - Number(b));
          if (difficulties.length > 0) {
            this.selectedDifficulty = difficulties[0];
          }
        }
        
        // 難易度に応じたステータスを設定
        if (this.selectedDifficulty && enemy.difficultyStats && enemy.difficultyStats[this.selectedDifficulty]) {
          const diffStats = enemy.difficultyStats[this.selectedDifficulty];
          this.敵ダメ減 = diffStats.dmgReduce || 0;
          this.敵ダメ減_ = diffStats.dmgReduceRatio || 0;
          this.敵クリ減 = diffStats.critReduce || 0;
        } else {
          // 難易度が選択されていない場合はbaseStatsを使用
          this.敵ダメ減 = enemy.baseStats.dmgReduce || 0;
          this.敵ダメ減_ = enemy.baseStats.dmgReduceRatio || 0;
          this.敵クリ減 = enemy.baseStats.critReduce || 0;
        }
        
        this.敵幸運 = enemy.baseStats.luck || 1;
        console.log('Selected enemy:', enemy);
        console.log('Selected difficulty:', this.selectedDifficulty);
      }
    },
    // 難易度が変更されたときの処理
    onDifficultyChange: function() {
      if (!this.selectedEnemy || !this.selectedDungeon || !this.selectedDifficulty) {
        return;
      }
      
      const dungeonData = this.emeraldiaEnemies[this.selectedDungeon];
      if (!dungeonData) return;
      
      // 選択された敵を検索
      const enemy = dungeonData.enemies.find(e => e.id === Number(this.selectedEnemy));
      
      if (enemy && enemy.difficultyStats && enemy.difficultyStats[this.selectedDifficulty]) {
        // 難易度に応じたステータスを設定
        const diffStats = enemy.difficultyStats[this.selectedDifficulty];
        this.敵ダメ減 = diffStats.dmgReduce || 0;
        this.敵ダメ減_ = diffStats.dmgReduceRatio || 0;
        this.敵クリ減 = diffStats.critReduce || 0;
        console.log('Difficulty changed to:', this.selectedDifficulty);
        console.log('Updated stats:', diffStats);
      }
    }
  },
  mounted: function () {
    // Load saved data from localStorage on mount
    const savedData = localStorage.getItem('lataleCalcData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      
      for (const key in parsedData) {
        // currentSkillDataとskillDataLoadedは復元しない
        if (key in this.$data && key !== 'currentSkillData' && key !== 'skillDataLoaded') {
          // 元の値の型を確認して適切に変換
          if (typeof this.$data[key] === 'number') {
            this.$data[key] = Number(parsedData[key]) || 0;
          } else {
            this.$data[key] = parsedData[key];
          }
        }
      }
      
      // 旧データから新データへの移行
      if (parsedData['筋魔'] !== undefined && parsedData['筋力'] === undefined) {
        this.筋力 = parsedData['筋魔'];
        this.魔力 = parsedData['筋魔'];
      }
      if (parsedData['筋魔_'] !== undefined && parsedData['筋力_'] === undefined) {
        this.筋力_ = parsedData['筋魔_'];
        this.魔力_ = parsedData['筋魔_'];
      }
      if (parsedData['筋魔効率'] !== undefined && parsedData['筋力効率'] === undefined) {
        this.筋力効率 = parsedData['筋魔効率'];
        this.魔力効率 = parsedData['筋魔効率'];
      }
      
      // 物理/魔法の統合データから分離
      if (parsedData['攻撃最大'] !== undefined && parsedData['物理_攻撃最大'] === undefined) {
        this.物理_攻撃最大 = parsedData['攻撃最大'];
        this.物理_攻撃最大_ = parsedData['攻撃最大_'] || 0;
        this.物理_攻撃最小 = parsedData['攻撃最小'];
        this.物理_攻撃最小_ = parsedData['攻撃最小_'] || 0;
      }
      
      if (parsedData['属性'] !== undefined) {
        if (parsedData['物理_属性'] === undefined) this.物理_属性 = parsedData['属性'];
        if (parsedData['魔法_属性'] === undefined) this.魔法_属性 = parsedData['属性'];
      }
      if (parsedData['属性_'] !== undefined) {
        if (parsedData['物理_属性_'] === undefined) this.物理_属性_ = parsedData['属性_'];
        if (parsedData['魔法_属性_'] === undefined) this.魔法_属性_ = parsedData['属性_'];
      }
      
      // その他の統合データの移行
      const migrateData = (oldKey, newPhysicalKey, newMagicalKey) => {
        if (parsedData[oldKey] !== undefined) {
          if (parsedData[newPhysicalKey] === undefined) this[newPhysicalKey] = parsedData[oldKey];
          if (parsedData[newMagicalKey] === undefined) this[newMagicalKey] = parsedData[oldKey];
        }
      };
      
      migrateData('最大', '物理_最大', '魔法_最大');
      migrateData('基礎最大', '物理_基礎最大', '魔法_基礎最大');
      migrateData('属性最大', '物理_属性最大', '魔法_属性最大');
      migrateData('最終最大', '物理_最終最大', '魔法_最終最大');
      migrateData('最小', '物理_最小', '魔法_最小');
      migrateData('基礎最小', '物理_基礎最小', '魔法_基礎最小');
      migrateData('属性最小', '物理_属性最小', '魔法_属性最小');
      migrateData('最終最小', '物理_最終最小', '魔法_最終最小');
      migrateData('追加ダメ', '物理_追加ダメ', '魔法_追加ダメ');
      migrateData('追加ダメ_', '物理_追加ダメ_', '魔法_追加ダメ_');
      migrateData('一般ボス追加ダメ', '物理_一般追加ダメ', '魔法_一般追加ダメ');
      migrateData('一般ボス支配', '物理_一般支配', '魔法_一般支配');
      
      // ボス追加ダメとボス支配は一般と同じ値で初期化
      if (parsedData['ボス追加ダメ'] !== undefined) {
        this.ボス追加ダメ = parsedData['ボス追加ダメ'];
      }
      if (parsedData['一般追加ダメ'] !== undefined) {
        this.一般追加ダメ = parsedData['一般追加ダメ'];
      }
      if (parsedData['ボス支配'] !== undefined) {
        this.ボス支配 = parsedData['ボス支配'];
      }
      if (parsedData['一般支配'] !== undefined) {
        this.一般支配 = parsedData['一般支配'];
      }
    }
    
    // デバッグ：データ型を確認
    console.log('Data types check:');
    console.log('筋力:', typeof this.筋力, this.筋力);
    console.log('魔力:', typeof this.魔力, this.魔力);
    console.log('属性:', typeof this.属性, this.属性);
    console.log('スキル倍率:', typeof this.スキル倍率, this.スキル倍率);
    
    // スキルデータを読み込む
    loadSkillData().then(() => {
      // スキルデータのロード完了後、保存されていたスキル選択を復元
      if (this.selectedSkill && window.skillData) {
        const skillIndex = Number(this.selectedSkill);
        if (window.skillData[skillIndex]) {
          this.currentSkillData = window.skillData[skillIndex];
          
          // スキルレベルが保存されていない場合は最大値を設定
          if (!this.スキルレベル && this.currentSkillData.最大レベル) {
            this.スキルレベル = this.currentSkillData.最大レベル;
          }
          
          // スキル値を更新
          this.updateSkillValues();
          
          console.log('Restored skill from localStorage:', this.currentSkillData);
        }
      }
    });
    // 敵データを読み込む
    loadEnemyData();
  },
  watch: {
    // スキルレベルが変更されたときの処理
    スキルレベル: function(newVal) {
      this.updateSkillValues();
    },
    // Watch for changes in data and save to localStorage
    '$data': {
      handler: function(newData) {
        localStorage.setItem('lataleCalcData', JSON.stringify(newData));
      },
      deep: true
    }
  }
  });
};

// Vueインスタンスを作成
createVueInstance();
};

// DOM要素の初期化を安全に行う
const initDOMElements = () => {
  // DOM要素へのアクセスをVueマウント後に遅延させる
  setTimeout(() => {
    const copyButton = document.getElementById('copy');
    if (copyButton) {
      copyButton.onclick = () => {
        var text = '';
        for(key in data) {
          key_name = key.replace('_', '%');
          text += key_name + ',' + incr(key_name) + "\n";
        }

        var area = document.createElement("textarea");
        area.textContent = text;
        document.body.appendChild(area);
        area.select();
        document.execCommand("copy");
        document.body.removeChild(area);
      };
    }
  }, 500);

  const fileInput = document.getElementById('file-input');


const setPreview = file => {
	if(!file.type.match('image.*')) {
		document.querySelector('#progress').textContent = '画像が読み込めません';
    return;
	}

	const image = new Image();
	image.onload = () => {

	  const canvas = document.createElement('canvas');
	  const extend = 3;
	  canvas.width = image.width * extend;
	  canvas.height = image.height * extend;
	  const ctx = canvas.getContext('2d');
	  ctx.drawImage(image, 0, 0, image.width * extend, image.height * extend);
	  const resize_image = canvas.toDataURL('image/png');

	  (async () => {
     const worker = await Tesseract.createWorker('eng', 1, {
       logger: m => document.querySelector('#progress').textContent = m.status + ' ' + Math.floor(m.progress * 100) + '%'
     });

		  await worker.setParameters({
				tessedit_pageseg_mode: Tesseract.PSM_SPARSE_TEXT,
		  	// tessedit_char_whitelist: '0123456789/~. ',
		  	tessedit_char_whitelist: '0123456789/~.HSPEly ',
		  	//tessedit_char_whitelist: '0123456789/~. 筋力体魔法幸運HPS武器攻撃防御属性抵抗命中率回避クリティカル確ダメージ最小大貫通バックアタ追加減モンスタ支配イム経験値アイテムドロプオプション発生Ely獲得量エスト報酬移動速度',
		  });
		  const { data: { text } } = await worker.recognize(resize_image);
      await worker.terminate();
		  console.log(text);
		  setValue(text);
		})();
	};
	image.src = URL.createObjectURL(file);
};


  // ファイル選択時の処理
  const dropzone = document.querySelector('.dropzone');

  if (dropzone) {
    dropzone.addEventListener('dragover', (event) => {
        event.preventDefault();
        dropzone.classList.add('dragover');
    });

    dropzone.addEventListener('dragleave', () => {
        dropzone.classList.remove('dragover');
    });

    dropzone.addEventListener('drop', (event) => {
        event.preventDefault();
        dropzone.classList.remove('dragover');
        const file = event.dataTransfer.files[0];
        setPreview(file);
    });

    dropzone.addEventListener('mouseenter', function() {
      window.addEventListener('paste', pasteHandler);
    });

    dropzone.addEventListener('mouseleave', function() {
      window.removeEventListener('paste', pasteHandler);
    });
  }

  if (fileInput) {
    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        setPreview(file);
    }); 
  }
};

// ブラウザ間互換性のためのイベントリスナー
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initApp();
    initDOMElements();
  });
} else {
  initApp();
  initDOMElements();
}

// window.onloadも念のため残す（Firefox対策）
window.addEventListener('load', () => {
  if (!window.vm) {
    initApp();
  }
  initDOMElements();
});

const pasteHandler = event => {
	const items = (event.clipboardData || event.originalEvent.clipboardData).items;
	const item = items[0];
	if (item.kind === 'file') {
		setPreview(item.getAsFile());
	}

const setValue = (text) => {
	const lines = text.split("\n");
	let line_num = -1;
	let msg = '';
	
	// 現在のスキルタイプを取得
	const skill = data.currentSkillData;
	const isPhysical = skill.物理or魔法 === '物理';
	const prefix = isPhysical ? '物理_' : '魔法_';
	
	for(line of lines) {
		if(line.startsWith("HP"))
			line_num = 0;
		if(line_num >= 0) {
			const words = line.split(' ');
			keys = [
				'HP',null,null,null,prefix + '属性',null,null,
				null,null,'クリ率','クリダメ',prefix + '最小',prefix + '最大','貫通',null,prefix + '追加ダメ',null,null,
				prefix + '一般追加ダメ',prefix + '一般支配','CT'
			];
			if(keys[line_num]) {
				const key = keys[line_num];
				if(key.includes('一般'))
				data[key] = Math.max(Number(words[words.length - 1]), Number(words[words.length - 2]));
				else
				data[key] = Number(words[words.length - 1]);

				// 画像認識で値がセットされた要素にクラスを追加
				const inputElement = document.querySelector(`input[autocomplete="${key}"]`);
				if (inputElement) {
					inputElement.classList.add('recognized-input');
				}

				msg += key + ' ';
			}
			line_num++;
		}
	}
	if(msg == '')
		document.querySelector('#progress').textContent = '画像を認識できませんでした。Shift + Windows + S でステータス画面のみを切り抜いてみてください';
	else
		document.querySelector('#progress').textContent = msg + 'が入力されました';
};


};
