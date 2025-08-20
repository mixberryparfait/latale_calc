// DOMContentLoadedとwindow.onloadの両方に対応
const initApp = () => {
	console.log('main.js');

// スキルデータを格納する変数
window.skillData = [];
window.skillDataLoaded = false;
window.emeraldiaEnemies = {};

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

const loadSkillData = async () => {
	try {
		const response = await fetch('skills.csv');
		const buffer = await response.arrayBuffer();
		const decoder = new TextDecoder('UTF-8');
		const text = decoder.decode(buffer);
		
		const lines = text.split(/\r?\n/);
		const headers = lines[0].split(',').map(h => h.trim()); // ヘッダーもトリム
		
		window.skillData = lines.slice(1)
			.filter(line => line.trim())
			.map((line, index) => {
				const values = line.split(',');
				const skill = {};
				headers.forEach((header, i) => {
					const value = values[i] ? values[i].trim() : '';
					if (header in data.currentSkillData) {
						// 元のデータ型にキャストして型を保証
						if (typeof data.currentSkillData[header] === 'number') {
							skill[header] = value === '' ? null : Number(value);
						} else {
							skill[header] = value;
						}
					} else {
						skill[header] = value;
					}
				});
				skill.index = index;
				return skill;
			});
			
		console.log(`Loaded ${window.skillData.length} skills`);
		console.log('Sample skills:', window.skillData.slice(0, 5));
		if (window.vm) {
			window.vm.skillDataLoaded = true;
		}
	} catch (error) {
		console.error('Failed to load skill data:', error);
	}
};

const base_damage = (params) => {
  
  let 攻撃力補正 = 1;
  let 属性攻撃補正 = 1;
  let 全ダメージ補正 = 1;
  let 効率 = 1;
  
  const skill = params.currentSkillData;
  const isPhysical = params.manualPhysicalOrMagical === '物理';

  const 防御倍率 = 1 / Math.exp(params.敵防御 / 3761.35);
  const 貫通率 = (isPhysical ? params.物理_貫通 : params.魔法_貫通) / 100;

  if (params.manualSkillType === '召喚') {
    攻撃力補正 = 1;
    属性攻撃補正 = 1;
    全ダメージ補正 = params.manualSummonBonus / 100;
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
  const isPhysical = params.manualPhysicalOrMagical === '物理';
  const クリ率 = isPhysical ? params.物理_クリ率 : params.魔法_クリ率;
	return Math.min(100, クリ率 + 15 * params.幸運 / params.敵幸運);
}

const cri_damage = (params) => { 
  const isPhysical = params.manualPhysicalOrMagical === '物理';
  const クリダメ = isPhysical ? params.物理_クリダメ : params.魔法_クリダメ;
  let クリダメ補正 = ((100 + クリダメ) * (1 - params.敵クリ減 / 1000) | 0) / 100;

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

// key:パラメータ名を1増やした場合の価値（増加ダメージ換算）
const incr = (key) => {
	if(key == '経験値') {
		return Math.floor(damage(data) /100/(1 + data[key] / 100));
	}

		// HP = (HP+ + 体力+ * 7) * HP%
	if(key == 'HP') {
		const HPincr = (1 + data['HP_'] / 100) / data['HP'];
		return Math.floor(damage(data) * HPincr);
	}
	if(key == 'HP%') {
		const HPincr = (1 / (1 + data['HP_'] / 100)) / 100;
		return Math.floor(damage(data) * HPincr);
	}
	if(key == '体力') {
		const HPincr = 7 * (1 + data['体力_'] / 100) * (1 + data['HP_'] / 100) / data['HP'];
		return Math.floor(damage(data) * HPincr);
	}
	if(key == '体力%') {
		const 体力 = data['体力'] / (1 + data['体力_'] / 100)
		const HPincr = 体力 * 0.01 * 7 * (1 + data['HP_'] / 100) / data['HP'];
		return Math.floor(damage(data) * HPincr);
	}
	const tmp = Object.assign({}, data);
	
	const isPhysical = data.manualPhysicalOrMagical === '物理';
	const physicalOrMagical = isPhysical ? '物理' : '魔法';

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
      const plus_key = prefix == '追加ダメ' ? physicalOrMagical + '_' + prefix : prefix;
      const abs = Math.ceil(tmp[plus_key] / (1 + percent / 100));
      tmp[plus_key] = abs * (1 + percent / 100);
    }
	}
  else if (key === '攻撃最大' || key === '攻撃最小') {
		tmp[key] = tmp[key] + 1 + tmp['攻撃_'] / 100;
  }
	else if(key.startsWith('最終')) {
		const prefix = key.substring(2);
    const plus_key = physicalOrMagical + '_' + prefix;
		const abs = Math.ceil(tmp[plus_key] / (1 + tmp[key] / 100));
		tmp[plus_key] = abs * (1.0 + tmp[key] / 100);
	}
	else if('最終' + key in tmp) {
    const plus_key = physicalOrMagical + '_' + key;
		tmp[plus_key] = tmp[plus_key] + 1 + tmp['最終' + key] / 100;
	}
	else if(key == '貫通') {
    const plus_key = physicalOrMagical + '_' + key;
		tmp[plus_key] = 100 - (100 - tmp[plus_key]) * 0.99;
	}
	else if(key + '_' in tmp) {
    const plus_key = key == '追加ダメ' ? physicalOrMagical + '_' + key : key;
	tmp[plus_key] = tmp[plus_key] + 1 + tmp[key + '_'] / 100;
	}
	else if(key == 'クリ率') {
    const plus_key = physicalOrMagical + '_' + key;
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
	    const isPhysical = data.manualPhysicalOrMagical === '物理';
			return (isPhysical ? '物理' : '魔法') + '_' + k;
		}
    return k;
	};
	
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
  manualPhysicalOrMagical: '物理',
  manualSkillType: '攻撃',
  manualSummonBonus: 100,
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
    	const enemyDefense = this.敵防御;
    	return damage(this);
    },
    base_damage: function () { 
    	const enemyDefense = this.敵防御;
    	return base_damage(this);
    },
    cri_damage: function () { 
    	const enemyDefense = this.敵防御;
    	return cri_damage(this);
    },
    cri_rate: function () { 
    	const enemyLuck = this.敵幸運;
    	return cri_rate(this);
    },
    hp_value: function () {
    	return this.HP;
    },
    incr: () => incr,
    base: () => base,
    damageFormat: () => damageFormat,
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
    currentSkillType: function() {
      return this.manualSkillType;
    },
    currentSkillPhysicalOrMagical: function() {
      return this.currentSkillData ? this.currentSkillData.物理or魔法 : null;
    },
    currentSkillMaxLevel: function() {
      return this.currentSkillData ? (this.currentSkillData.最大レベル || 20) : 20;
    },
    isPhysicalTab: function() {
      return this.manualPhysicalOrMagical === '物理';
    },
    currentDungeonEnemies: function() {
      if (!this.selectedDungeon || !this.emeraldiaEnemies[this.selectedDungeon]) {
        return [];
      }
      return this.emeraldiaEnemies[this.selectedDungeon].enemies || [];
    },
    currentDungeonDifficulties: function() {
      if (!this.selectedDungeon || !this.emeraldiaEnemies[this.selectedDungeon] || 
          !this.selectedEnemy || this.emeraldiaEnemies[this.selectedDungeon].enemies.length === 0) {
        return [];
      }
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
    showGeneralInputs: function() {
      if (!this.selectedEnemy || !this.selectedDungeon) {
        return true;
      }
      return this.敵タイプ === '一般';
    },
    showBossInputs: function() {
      if (!this.selectedEnemy || !this.selectedDungeon) {
        return true;
      }
      return this.敵タイプ === 'ボス';
    },
  },
  methods: {
    // スキル名を切り詰める
    truncateSkillName: function(skillName) {
      if (!skillName) return '';
      const maxLength = 12; 
      if (skillName.length > maxLength) {
        return skillName.substring(0, maxLength) + '...';
      }
      return skillName;
    },
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
    onJobChange: function() {
      this.selectedSkill = '';
    },
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
        
        // スキルのタイプに応じて手動切り替え値を自動設定
        if (this.currentSkillData.物理or魔法) {
          this.manualPhysicalOrMagical = this.currentSkillData.物理or魔法;
        }
        if (this.currentSkillData.スキルタイプ) {
          this.manualSkillType = this.currentSkillData.スキルタイプ;
        }
      }
    },
    updateSkillValues: function() {
      if (!this.currentSkillData) return;
      
      const skill = this.currentSkillData;
      const level = this.スキルレベル || 1;
      const baseDamage = skill.固定ダメージ初期値 || 0;
      const damagePerLevel = skill.固定ダメージ上昇値 || 0;
      const skillPower = skill.係数初期値 || 0;
      const powerPerLevel = skill.係数上昇値 || 0;
      this.スキル倍率 = skillPower + (powerPerLevel * (level - 1));

      this.スキル追加ダメ = baseDamage + (damagePerLevel * (level - 1));

    },
    onDungeonChange: function() {
      this.selectedEnemy = '';
      this.selectedDifficulty = '';
      if (!this.selectedDungeon) {
        this.敵タイプ = '一般';
        this.敵防御 = 1;
        this.敵ダメ減 = 0;
        this.敵ダメ減_ = 0;
        this.敵幸運 = 1068254;
        this.敵クリ減 = 0;
      }
    },
    onEnemyChange: function() {
      if (!this.selectedEnemy || !this.selectedDungeon) {
        return;
      }
      
      const dungeonData = this.emeraldiaEnemies[this.selectedDungeon];
      if (!dungeonData) return;
      
      const enemy = dungeonData.enemies.find(e => e.id === Number(this.selectedEnemy));
      
      if (enemy) {
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
    
    console.log('Data types check:');
    console.log('筋力:', typeof this.筋力, this.筋力);
    console.log('魔力:', typeof this.魔力, this.魔力);
    console.log('属性:', typeof this.属性, this.属性);
    console.log('スキル倍率:', typeof this.スキル倍率, this.スキル倍率);
    
    loadSkillData().then(() => {
      if (this.selectedSkill && window.skillData) {
        const skillIndex = Number(this.selectedSkill);
        if (window.skillData[skillIndex]) {
          this.currentSkillData = window.skillData[skillIndex];
          
          // スキルレベルが保存されていない場合は最大値を設定
          if (!this.スキルレベル && this.currentSkillData.最大レベル) {
            this.スキルレベル = this.currentSkillData.最大レベル;
          }
          
          this.updateSkillValues();
          
          console.log('Restored skill from localStorage:', this.currentSkillData);
        }
      }
    });
    loadEnemyData();
  },
  watch: {
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

createVueInstance();
};

const initDOMElements = () => {
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
