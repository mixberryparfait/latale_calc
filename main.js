const initApp = () => {
	console.log('main.js');

window.DEBUG = true; // デバッグフラグ

window.skillData = [];
window.skillDataLoaded = false;
window.emeraldiaEnemies = {};
window.transcendSkillData = [];

// StatusTypeとステータス名のマッピング
const statusTypeMapping = {
    // HP系
    30: 'HP',
    31: 'HP%',
    
    // ステータス系
    14: '筋力',
    15: '筋力%',
    22: '魔力',
    23: '魔力%',
    26: '体力',
    18: '幸運',
    455: '全ステータス',
    456: '全ステータス%',
    594: '筋力魔力',
    595: '筋力魔力%',
    
    // ダメージ系
    461: '最大',
    462: '最小',
    95: '最終最大',
    103: '最終最大',
    91: '最終最小',
    99: '最終最小',
    590: '最終最小',
    591: '最終最大',
    
    // クリティカル系
    464: 'クリダメ',
    465: 'クリ率',
    157: '最終クリダメ',
    163: '最終クリダメ',
    592: '最終クリダメ',
    
    // 追加ダメージ系
    496: '追加ダメ',
    141: '追加ダメ%',
    241: '追加ダメ%',
    588: '追加ダメ%',
    566: '一般追加ダメ',
    570: 'ボス追加ダメ',
    573: '一般支配',
    574: 'ボス支配',
    
    // 属性系
    492: '属性',
    38: '属性',
    493: '属性%',
    39: '属性%',
    586: '属性',
    587: '属性%',
    
    // その他
    463: '貫通',
    216: '防御',
    70: '抵抗力',
    596: '防御抵抗',
    495: 'ダメージ減少',
    86: 'ダメージ減少%',
    440: 'CT',
    106: '移動速度',
    466: '命中率',
    494: 'バックアタック',
    567: '一般追加ダメ%',
    571: 'ボス追加ダメ%',
    208: '筋力効率',
    200: '魔力効率',
    614: 'スキルターゲット数',
};

// 超越スキルデータを読み込む
const loadTranscendSkillData = async () => {
	try {
		const response = await fetch('transcend_skills.json');
		const data = await response.json();
		window.transcendSkillData = data;
		console.log(`Loaded ${data.length} transcend skills`);
		if (window.vm) {
			window.vm.transcendSkillData = data;
		}
	} catch (error) {
		console.error('Failed to load transcend skill data:', error);
	}
};

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

// DPS計算関数を追加
const calculateDPS = (params) => {
	const dmg = damage(params);
	const skill = params.currentSkillData;
	
	// モーション時間が取得できない場合はDPSを計算しない
	if (!skill || !skill.モーション時間 || skill.モーション時間 === 0) {
		return null;
	}
	
                // モーション時間は0.1秒単位なので、秒に変換
                const motionTimeInSeconds = skill.モーション時間 / 10;
	
	// ヒット数を考慮
	const hitCount = skill.ヒット数 || 1;
	const totalDamage = dmg * hitCount;
	
	// DPS = 総ダメージ / モーション時間（秒）
	const dps = totalDamage / motionTimeInSeconds;
	
	return dps;
}

// key:パラメータ名を1増やした場合の価値（増加ダメージ換算）
const incr = (key) => {
	if(key == '経験値') {
		return Math.floor(damage(data) /100/(1 + data[key] / 100));
	}

	// HP = (HP+ + 体力+ * 7) * HP%
	// HP価値を考慮して計算
	const hpValue = data['HP価値'] / 100;
	if(key == 'HP') {
		const HPincr = (1 + data['HP_'] / 100) / data['HP'];
		return Math.floor(damage(data) * HPincr * hpValue);
	}
	if(key == 'HP%') {
		const HPincr = (1 / (1 + data['HP_'] / 100)) / 100;
		return Math.floor(damage(data) * HPincr * hpValue);
	}
	if(key == '体力') {
		const HPincr = 7 * (1 + data['体力_'] / 100) * (1 + data['HP_'] / 100) / data['HP'];
		return Math.floor(damage(data) * HPincr * hpValue);
	}
	if(key == '体力%') {
		const 体力 = data['体力'] / (1 + data['体力_'] / 100)
		const HPincr = 体力 * 0.01 * 7 * (1 + data['HP_'] / 100) / data['HP'];
		return Math.floor(damage(data) * HPincr * hpValue);
	}
	const tmp = Object.assign({}, data);
	
	const isPhysical = data.manualPhysicalOrMagical === '物理';
	const physicalOrMagical = isPhysical ? '物理' : '魔法';

	if(key.endsWith('%')) {
		const prefix = key.substring(0, key.length - 1);
    const percent = tmp[prefix + '_'] || 0;
    if(prefix == '攻撃') {
      {
        const abs = tmp['攻撃最大'] / (1 + percent / 100);
        tmp['攻撃最大'] = abs * (1 + (percent + 1) / 100);  // +1を追加
      }
      {
        const abs = tmp['攻撃最小'] / (1 + percent / 100);
        tmp['攻撃最小'] = abs * (1 + (percent + 1) / 100);  // +1を追加
      }
    }
    else {
      const plus_key = prefix == '追加ダメ' ? physicalOrMagical + '_' + prefix : prefix;
      const abs = tmp[plus_key] / (1 + percent / 100);
      tmp[plus_key] = abs * (1 + (percent + 1) / 100);  // +1を追加
    }
	}
  else if (key === '攻撃最大' || key === '攻撃最小') {
		tmp[key] = tmp[key] + 1 + tmp['攻撃_'] / 100;
  }
	else if(key.startsWith('最終')) {
		const prefix = key.substring(2);
    const plus_key = physicalOrMagical + '_' + prefix;
		const currentPercent = tmp[key] || 0;
		const abs = tmp[plus_key] / (1 + currentPercent / 100);
		tmp[plus_key] = abs * (1.0 + (currentPercent + 1) / 100);  // +1を追加
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
  HP価値: 30,
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
  transcendSkillData: [],
  selectedDungeon: '',
  selectedEnemy: '',
  selectedDifficulty: '',
  activeMainTab: 'damage',
  mainTabs: [
    { id: 'damage', label: 'ダメージ計算' },
    { id: 'transcend1', label: '超越１' },
    { id: 'transcend2', label: '超越２' }
  ],
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
    dps: function () {
    	return calculateDPS(this);
    },
    formattedDPS: function() {
    	const dpsValue = calculateDPS(this);
    	if (dpsValue === null) {
    		return '－';
    	}
    	return damageFormat(dpsValue) + '/秒';
    },
    skillMotionTime: function() {
    	if (!this.currentSkillData || !this.currentSkillData.モーション時間) {
    		return null;
    	}
            // 0.1秒単位から秒に変換
            return this.currentSkillData.モーション時間 / 10;
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
    // 超越スキル価値計算関数
    calculateTranscendSkillValue: function() {
      const self = this;
      return function(skill, level = 1) {
        let totalValue = 0;
        const effects = [];
        
        // 特殊マッピング用の関数
        const expandValue = (statusType, value) => {
          // 全ステータスの場合
          if (statusType === 455 || statusType === 456) {
            const stats = ['筋力', '魔力', '体力', '幸運'];
            let sum = 0;
            for (const stat of stats) {
              const val = self.incr(statusType === 456 ? stat + '%' : stat);
              if (val > 0) sum += val * value;
            }
            return sum;
          }
          // 筋力魔力の場合
          else if (statusType === 594 || statusType === 595) {
            const isPercent = statusType === 595;
            const strVal = self.incr(isPercent ? '筋力%' : '筋力') * value;
            const magVal = self.incr(isPercent ? '魔力%' : '魔力') * value;
            return Math.max(strVal, magVal); // より高い方を採用
          }
          // 防御/抵抗の場合
          else if (statusType === 596) {
            return 0; // 計算不可
          }
          // 武器属性力(+)の場合 - 攻撃最大、攻撃最小、属性を全部上げる
          else if (statusType === 492 || statusType === 38 || statusType === 586) {
            // 攻撃最大、攻撃最小、属性の価値を合計
            const attackMaxVal = self.incr('攻撃最大') * value;
            const attackMinVal = self.incr('攻撃最小') * value;
            const attrVal = self.incr('属性') * value;
            return attackMaxVal + attackMinVal + attrVal;
          }
          // 武器属性力(%)の場合
          else if (statusType === 493 || statusType === 39 || statusType === 587) {
            // 攻撃最大、攻撃最小、属性%の価値を合計
            const attackMaxVal = self.incr('攻撃最大') * value;
            const attackMinVal = self.incr('攻撃最小') * value;
            const attrVal = self.incr('属性%') * value;
            return attackMaxVal + attackMinVal + attrVal;
          }
          // 最終系統合の場合
          else if (statusType === 590 || statusType === 591 || statusType === 592) {
            const typeMap = {590: '最終最小', 591: '最終最大', 592: '最終クリダメ'};
            return self.incr(typeMap[statusType]) * value;
          }
          // 追加ダメ%統合の場合
          else if (statusType === 588) {
            return self.incr('追加ダメ%') * value;
          }
          // 筋力/魔力効率の場合
          else if (statusType === 208 || statusType === 200) {
            return self.incr('効率') * value;
          }
          // HP系の直接マッピング
          else if (statusType === 30) {
            return self.incr('HP') * value;
          }
          else if (statusType === 31) {
            return self.incr('HP%') * value;
          }
          // 体力の直接マッピング
          else if (statusType === 26) {
            return self.incr('体力') * value;
          }
          // 貫通力の直接マッピング
          else if (statusType === 463) {
            return self.incr('貫通') * value;
          }
          // 最小・最大ダメージの直接マッピング
          else if (statusType === 461) {
            return self.incr('最大') * value;
          }
          else if (statusType === 462) {
            return self.incr('最小') * value;
          }
          // その他特殊タイプ
          else if (statusType === 614 || statusType === 106 || statusType === 466 || 
                   statusType === 494 || statusType === 567 || statusType === 571) {
            return 0; // 計算不可
          }
          // 通常のマッピング
          else {
            const statName = statusTypeMapping[statusType];
            if (statName) {
              const val = self.incr(statName);
              return val > 0 ? val * value : 0;
            }
          }
          return 0;
        };
        
        // StatusType1とStatusType2が同じ場合は合算する
        const processedTypes = {};
        
        // StatusType1の処理
        if (skill.status_type1 > 0) {
          const value = skill.status_value1 + skill.status_value_slv1 * level;
          if (value !== 0) {
            const incrValue = expandValue(skill.status_type1, Math.abs(value));
            totalValue += value > 0 ? incrValue : -incrValue;
            
            if (!processedTypes[skill.status_type1]) {
              processedTypes[skill.status_type1] = 0;
            }
            processedTypes[skill.status_type1] += value;
          }
        }
        
        // StatusType2の処理
        if (skill.status_type2 > 0) {
          const value = skill.status_value2 + skill.status_value_slv2 * level;
          if (value !== 0) {
            const incrValue = expandValue(skill.status_type2, Math.abs(value));
            totalValue += value > 0 ? incrValue : -incrValue;
            
            if (!processedTypes[skill.status_type2]) {
              processedTypes[skill.status_type2] = 0;
            }
            processedTypes[skill.status_type2] += value;
          }
        }
        
        // 効果文字列を生成（武器属性力の特殊表示）
        const uniqueEffects = new Set();
        for (const [typeId, value] of Object.entries(processedTypes)) {
          if (value !== 0) {
            const typeIdNum = parseInt(typeId);
            let displayText = '';
            
            // 武器属性力(+)の場合、特別な表示
            if (typeIdNum === 492 || typeIdNum === 38 || typeIdNum === 586) {
              displayText = `武器属性${value > 0 ? '+' : ''}${value}`;
            }
            // 武器属性力(%)の場合、特別な表示
            else if (typeIdNum === 493 || typeIdNum === 39 || typeIdNum === 587) {
              displayText = `武器属性${value > 0 ? '+' : ''}${value}%`;
            }
            // 全ステータスの場合、特別な表示
            else if (typeIdNum === 455) {
              displayText = `全ステータス${value > 0 ? '+' : ''}${value}`;
            }
            else if (typeIdNum === 456) {
              displayText = `全ステータス${value > 0 ? '+' : ''}${value}%`;
            }
            // 筋力魔力の場合
            else if (typeIdNum === 594) {
              displayText = `筋力魔力${value > 0 ? '+' : ''}${value}`;
            }
            else if (typeIdNum === 595) {
              displayText = `筋力魔力${value > 0 ? '+' : ''}${value}%`;
            }
            // 通常の場合
            else {
              const statName = statusTypeMapping[typeIdNum] || `Type${typeIdNum}`;
              displayText = `${statName}${value > 0 ? '+' : ''}${value}`;
            }
            
            uniqueEffects.add(displayText);
          }
        }
        effects.push(...Array.from(uniqueEffects));
        
        return {
          id: skill.id,
          name: skill.name,
          effects: effects.join(', '),
          value: Math.floor(totalValue),
          level: level
        };
      };
    },
    // 超越1ランキング（固定コスト）
    transcend1Rankings: function() {
      if (!this.transcendSkillData || this.transcendSkillData.length === 0) {
        return [];
      }
      
      // 超越1スキル（position 1-3: コスト固定）
      const transcend1Skills = this.transcendSkillData.filter(s => s.position >= 1 && s.position <= 3);
      const rankings = [];
      
      for (const skill of transcend1Skills) {
        const maxLevel = skill.max_level;
        let bestLevel = 0;
        let bestValuePerPoint = 0;
        let bestValue = 0;
        
        // 各レベルで価値を計算
        for (let level = 1; level <= maxLevel; level++) {
          const result = this.calculateTranscendSkillValue(skill, level);
          const totalCost = skill.base_cost * level;
          const valuePerPoint = totalCost > 0 ? result.value / totalCost : 0;
          
          if (valuePerPoint > bestValuePerPoint) {
            bestValuePerPoint = valuePerPoint;
            bestLevel = level;
            bestValue = result.value;
          }
        }
        
        if (bestLevel > 0) {
          const result = this.calculateTranscendSkillValue(skill, bestLevel);
          rankings.push({
            id: skill.id,
            name: skill.name,
            effects: result.effects,
            cost: skill.base_cost,
            valuePerCost: Math.floor(bestValuePerPoint),
            totalValue: bestValue,
            maxLevel: skill.max_level
          });
        }
      }
      
      // 価値/Pで降順ソート
      return rankings.sort((a, b) => b.valuePerCost - a.valuePerCost);
    },
    // 超越2列1ランキング（position 4: 基本スキル）
    transcend2Column1Rankings: function() {
      if (!this.transcendSkillData || this.transcendSkillData.length === 0) {
        return [];
      }
      
      // 超越2列1スキル（position 4: 基本スキル）
      const column1Skills = this.transcendSkillData.filter(s => s.position === 4);
      return this.calculateTranscend2ColumnRankings(column1Skills);
    },
    // 超越2列2ランキング（position 5: トレードオフスキル）
    transcend2Column2Rankings: function() {
      if (!this.transcendSkillData || this.transcendSkillData.length === 0) {
        return [];
      }
      
      // 超越2列2スキル（position 5: トレードオフスキル）
      const column2Skills = this.transcendSkillData.filter(s => s.position === 5);
      return this.calculateTranscend2ColumnRankings(column2Skills);
    },
    // 超越2列3ランキング（position 6: ％/最終系スキル）
    transcend2Column3Rankings: function() {
      if (!this.transcendSkillData || this.transcendSkillData.length === 0) {
        return [];
      }
      
      // 超越2列3スキル（position 6: ％/最終系スキル）
      const column3Skills = this.transcendSkillData.filter(s => s.position === 6);
      return this.calculateTranscend2ColumnRankings(column3Skills);
    },
  },
  methods: {
    // 超越2の列ごとのランキング計算
    calculateTranscend2ColumnRankings: function(skills) {
      const rankings = [];
      
      // スキル名の省略形変換マップ
      const abbreviations = {
        'クリティカルダメージ': 'クリダメ',
        'ダメージ減少': 'ダメ減',
        '一般モンスター追加ダメージ': '一般追加ダメ',
        'ボスモンスター追加ダメージ': 'ボス追加ダメ',
        'バックアタックダメージ': 'BA',
        '一般モンスター支配力': '一般支配',
        'ボスモンスター支配力': 'ボス支配',
        'クールタイム減少': 'CT減少',
        '筋力、魔法力': '筋魔',
        '物理/魔法追加ダメージ': '追加ダメ',
        '全ステータス': '全ステ',
        '武器属性力': '属性',
        '最大HP': 'HP',
        '最小ダメージ': '最小',
        '最大ダメージ': '最大',
        '筋力/魔力効率': '効率',
        'スキルターゲット数': 'タゲ数',
        '移動速度': '移動'
      };
      
      // スキル名を省略形に変換する関数
      const shortenName = (name) => {
        let shortened = name;
        for (const [full, short] of Object.entries(abbreviations)) {
          shortened = shortened.replace(full, short);
        }
        // その他の簡略化
        shortened = shortened.replace(/\s*\(\+\)\s*/g, '');
        shortened = shortened.replace(/\s*\(%\)\s*/g, '%');
        shortened = shortened.replace(/\s*-\s*/g, '-');
        shortened = shortened.replace(/\\n/g, '/');
        shortened = shortened.replace('Ⅰ', '1');
        shortened = shortened.replace('Ⅱ', '2');
        return shortened;
      };
      
      for (const skill of skills) {
        const shortName = shortenName(skill.name);
          
          // 1レベルあたりの価値増加を計算（レベルに関係なく固定）
          let valuePerLevelIncrease = 0;
          const effects = [];
          
          if (skill.status_type1 > 0 && skill.status_value_slv1 !== 0) {
            const statName = statusTypeMapping[skill.status_type1];
            if (statName) {
              valuePerLevelIncrease += this.incr(statName) * Math.abs(skill.status_value_slv1);
              // 効果文字列を生成
              const sign = skill.status_value_slv1 > 0 ? '+' : '';
              effects.push(`${statName}${sign}${skill.status_value_slv1}/Lv`);
            }
          }
          if (skill.status_type2 > 0 && skill.status_value_slv2 !== 0) {
            const statName = statusTypeMapping[skill.status_type2];
            if (statName) {
              valuePerLevelIncrease += this.incr(statName) * Math.abs(skill.status_value_slv2);
              // 効果文字列を生成
              const sign = skill.status_value_slv2 > 0 ? '+' : '';
              effects.push(`${statName}${sign}${skill.status_value_slv2}/Lv`);
            }
          }
          
          const effectsStr = effects.join(', ');
          
          if (window.DEBUG && skill.id === 52) {
            console.log('1レベルあたりの価値増加（固定）:', valuePerLevelIncrease);
            console.log('効果文字列:', effectsStr);
          }
          
          // 固定コストならループは1回、可変コストならmax_level回
          const maxIterations = skill.cost_per_level === 0 ? 1 : skill.max_level;
          
          for (let level = 1; level <= maxIterations; level++) {
            const cost = skill.base_cost + (level - 1) * skill.cost_per_level;
            const valuePerPoint = valuePerLevelIncrease / cost;
            
            // ID 52の最初の5レベルを詳細デバッグ
            if (window.DEBUG && skill.id === 52 && level <= 5) {
              const statusValue = skill.status_value1 + skill.status_value_slv1 * level;
              console.log(`Level ${level}:`);
              console.log(`  - ステータス値: ${statusValue}`);
              console.log(`  - 次の1ポイントのコスト: ${cost}`);
              console.log(`  - 次の1ポイントの価値: ${Math.floor(valuePerPoint)}`);
              console.log(`  - 効果: ${effectsStr}`);
            }
            
            if (valuePerPoint > 0) {
              rankings.push({
                id: skill.id,
                name: skill.name,
                shortName: shortName,
                level: skill.cost_per_level > 0 ? level : '*', // 固定コストはレベル表示なし
                effects: effectsStr,
                cost: cost,
                valuePerCost: Math.floor(valuePerPoint),
                isFixedCost: skill.cost_per_level === 0
              });
            }
          }
      }
      
      // 価値/Pで降順ソート、上位20件のみ返す
      return rankings.sort((a, b) => b.valuePerCost - a.valuePerCost).slice(0, 1000);
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
        // currentSkillData、skillDataLoaded、activeMainTab、transcendSkillDataは復元しない
        if (key in this.$data && key !== 'currentSkillData' && key !== 'skillDataLoaded' 
            && key !== 'activeMainTab' && key !== 'transcendSkillData') {
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
    loadTranscendSkillData(); // 超越スキルデータを読み込む
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
