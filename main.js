window.onload = () => {
	console.log('main.js');

// スキルデータを格納する変数
window.skillData = [];
window.skillDataLoaded = false;

// CSVファイルを読み込む関数
const loadSkillData = async () => {
	try {
		const response = await fetch('all_skills_data_v3.csv');
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
					// 数値フィールドは数値に変換
					if (['最大レベル', '係数初期値', '係数上昇値', '固定ダメージ初期値', '固定ダメージ上昇値', 
					     'ヒット数', '最大ターゲット数', '最大ターゲット数上昇値', 
					     '攻撃力補正', '属性攻撃補正', '全ダメージ補正', 'クリティカルダメージ補正'].includes(header)) {
						skill[header] = value === '' ? null : Number(value);
					} else {
						skill[header] = value;
					}
				});
				skill.index = index; // インデックスを追加
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

// 28173417
	// 216113
// 26425268
const base_damage = (params) => {
	  const 防御倍率 = 1 / Math.exp(params.敵防御 / 3761.35);
    const 貫通率 = params.貫通 / 100;
    
    // 召喚スキルの場合の補正を取得（すべて同じ値を使用）
    let 召喚補正 = 1;
    
    const skill = params.currentSkillData;
    if (skill && skill.スキルタイプ === '召喚') {
      // ベース補正 + (スキルレベル) * 2
      const baseBonus = skill.攻撃力補正 || skill.属性攻撃補正 || skill.全ダメージ補正 || skill.クリティカルダメージ補正 || 100;
      const level = params.スキルレベル || 1;
      const totalBonus = baseBonus + level * 2;
      召喚補正 = totalBonus / 100;
    }
    
    // 物理職か魔法職かを判定
    const isPhysical = skill && skill.物理or魔法 === '物理';
    
    let 基本ダメージ1;
    let 基本ダメージ2;
    
    if (isPhysical) {
      // 物理職の場合
      基本ダメージ1 = ((params.攻撃最小 + params.攻撃最大) / 2 * 召喚補正) * params.スキル倍率 / 100;
      基本ダメージ2 = params.スキル追加ダメ + params.筋魔 * (1 + params.筋魔効率 / 100) * 召喚補正;
    } else {
      // 魔法職の場合（既存の計算）
      基本ダメージ1 = (params.属性 * 2 * 召喚補正) * params.スキル倍率 / 100;
      基本ダメージ2 = params.スキル追加ダメ + params.筋魔 * (1 + params.筋魔効率 / 100) * 召喚補正;
    }
    
    const 最大 = params.基礎最大 + params.最大 + params.属性最大;
		const 最小 = Math.min(最大+10, params.基礎最小 + params.最小 + params.属性最小)
	return (
		(基本ダメージ1 + 基本ダメージ2) * (1 - (1 - 防御倍率) * (1 - 貫通率))
	      + params.一般ボス追加ダメ
	      + params.追加ダメ  // 追加ダメ
	)
	  * (1 + params.一般ボス支配 / 100)
	  * (最大 + 最小) / 200
	  * (1 - params.敵ダメ減_ / 100)
	  * 召喚補正
};

const cri_rate = (params) => { 
	 return Math.min(100, Math.max(params.クリ率, 100 + 15 * params.幸運 / params.敵幸運));
}

const cri_damage = (params) => { 
    let クリダメ補正 = 1 + params.クリダメ / 100;
    
    // 召喚補正はbase_damage関数で既に適用されているため、ここでは適用しない
    
	 return base_damage(params) * クリダメ補正 * (1 - params.敵クリ減 / 100);
}

const damage = (params) => {
	const cr = cri_rate(params) / 100;
	return base_damage(params) * (1 - cr) + cri_damage(params) * cr;
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
	if(key.endsWith('%')) {
		const prefix = key.substring(0, key.length - 1);
		const abs = Math.ceil(tmp[prefix] / (1 + tmp[prefix + '_'] / 100));
		tmp[prefix] = abs * (1.01 + tmp[prefix + '_'] / 100);
	}
	else if(key.startsWith('最終')) {
		const prefix = key.substring(2);
		const abs = Math.ceil(tmp[prefix] / (1 + tmp[key] / 100));
		tmp[prefix] = abs * (1.01 + tmp[key] / 100);
	}
	else if(key + '_' in tmp) {
		tmp[key] = tmp[key] + 1 + tmp[key + '_'] / 100;
	}
	else if('最終' + key in tmp) {
		tmp[key] = tmp[key] + 1 + tmp['最終' + key] / 100;
	}
	else if(key == '貫通') {
		tmp[key] = 100 - (100 - tmp[key]) * 0.99;
	}
	else {
		tmp[key] = tmp[key] + 1;
	}
	return Math.floor(damage(tmp) - damage(data));
};

const base = key => {
	if('最終' + key in data)
		return data[key] / (1 + data['最終' + key] / 100);
	if(key + '_' in data)
		return data[key] / (1 + data[key + '_'] / 100);
	return data[key];
};

// const data = {
// 	筋魔: 872856,
// 	筋魔_: 316,
//   幸運: 400948,
//   幸運_: 300,
//   体力: 400512,
//   体力_: 620,
//   HP: 4474100,
//   HP_: 217,
//   攻撃最大: 0,
//   攻撃最小: 0,
//   防御: 0,
//   属性: 13018,
//   属性_: 276,
//   クリ率: 41,
//   クリダメ: 2617,
//   最終クリダメ: 16,
//   最大: 2316,
//   基礎最大: 105,
//   属性最大: 27,
//   最終最大: 14,
//   最小: 10000,
//   基礎最小: 95,
//   属性最小: 0,
//   最終最小: 0,
//   貫通: 96,
//   追加ダメ: 202838,
//   追加ダメ_: 110,
//   一般ボス追加ダメ: 111230,
//   一般ボス支配: 15.9,
//   CT: 0,
//   スキル倍率: 4000,
//   スキル追加ダメ: 90,
//   敵防御: 62243,
//   敵ダメ減: 579949,
//   敵ダメ減_: 75,
//   敵幸運: 1068254,
//   敵クリ減: 60,
//   経験値: 1243,
// };


const data = {
	筋魔: 546424,
	筋魔_: 316,
	筋魔効率: 0,
  幸運: 400948,
  幸運_: 300,
  体力: 400512,
  体力_: 620,
  HP: 4474100,
  HP_: 217,
  攻撃最大: 0,
  攻撃最大_: 0,
  攻撃最小: 0,
  攻撃最小_: 0,
  防御: 0,
  属性: 14382,
  属性_: 276,
  クリ率: 100,
  クリダメ: 1993,
  最終クリダメ: 16,
  最大: 1310,
  基礎最大: 105,
  属性最大: 0,
  最終最大: 14,
  最小: 1473,
  基礎最小: 95,
  属性最小: 0,
  最終最小: 0,
  貫通: 90,
  追加ダメ: 247784,
  追加ダメ_: 110,
  一般ボス追加ダメ: 122046,
  一般ボス支配: 17.4,
  CT: 0,
  スキル倍率: 100,
  スキル追加ダメ: 0,
  敵防御: 1,
  敵ダメ減: 0,
  敵ダメ減_: 0,
  敵幸運: 1068254,
  敵クリ減: 0,
  経験値: 1243,
  selectedJob: '',
  selectedSkill: '',
  スキルレベル: 1,
  currentSkillData: null,
  skillDataLoaded: false,  // Vueのリアクティブデータとして追加
};

const damageFormat = (damage) => {
	let text = '';
	if(damage >= 100000000) {
		text += (damage / 100000000 | 0) + '億';
		damage %= 100000000;
	}
	if(damage >= 10000) {
		text += (damage / 10000 | 0) + '万';
		damage %= 10000;
	}
	text += damage | 0;
	return text;
}

window.vm = new Vue ({
  el: '#latale_calc',
  data: data,
  computed: {
    damage: function () { 
    	return damage(this);
    },
    base_damage: function () { 
    	return base_damage(this);
    },
    cri_damage: function () { 
    	return cri_damage(this);
    },
    cri_rate: function () { 
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
    // 現在選択されているスキルの最大レベル
    currentSkillMaxLevel: function() {
      return this.currentSkillData ? (this.currentSkillData.最大レベル || 20) : 20;
    }
  },
  methods: {
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
      this.currentSkillData = null;
      this.スキルレベル = 1;
      this.スキル倍率 = 100;
      this.スキル追加ダメ = 0;
    },
    // スキルが変更されたときの処理
    onSkillChange: function() {
      if (this.selectedSkill === '') {
        this.currentSkillData = null;
        this.スキル倍率 = 100;
        this.スキル追加ダメ = 0;
        return;
      }
      
      const skillIndex = Number(this.selectedSkill);
      this.currentSkillData = window.skillData[skillIndex];
      
      if (this.currentSkillData) {
        console.log('Selected skill:', this.currentSkillData);
        console.log('Skill type:', this.currentSkillData.スキルタイプ);
        console.log('Attack power bonus:', this.currentSkillData.攻撃力補正);
        console.log('Attribute attack bonus:', this.currentSkillData.属性攻撃補正);
        console.log('All damage bonus:', this.currentSkillData.全ダメージ補正);
        console.log('Critical damage bonus:', this.currentSkillData.クリティカルダメージ補正);
        
        // スキルレベルを最大値にリセット
        this.スキルレベル = this.currentSkillData.最大レベル || 50;
        this.updateSkillValues();
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
    }
  },
  mounted: function () {
    // Load saved data from localStorage on mount
    const savedData = localStorage.getItem('lataleCalcData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      // 数値として扱うべきキーのリスト
      const numericKeys = [
        '筋魔', '筋魔_', '筋魔効率', '幸運', '幸運_', '体力', '体力_', 'HP', 'HP_',
        '攻撃最大', '攻撃最大_', '攻撃最小', '攻撃最小_', '防御', '属性', '属性_', 'クリ率', 'クリダメ', '最終クリダメ',
        '最大', '基礎最大', '属性最大', '最終最大', '最小', '基礎最小', '属性最小', '最終最小',
        '貫通', '追加ダメ', '追加ダメ_', '一般ボス追加ダメ', '一般ボス支配', 'CT',
        'スキル倍率', 'スキル追加ダメ', '敵防御', '敵ダメ減', '敵ダメ減_', '敵幸運', '敵クリ減',
        '経験値', 'スキルレベル'
      ];
      
      for (const key in parsedData) {
        // currentSkillDataとskillDataLoadedは復元しない
        if (key in this.$data && key !== 'currentSkillData' && key !== 'skillDataLoaded') {
          if (numericKeys.includes(key)) {
            this.$data[key] = Number(parsedData[key]) || 0;
          } else {
            this.$data[key] = parsedData[key];
          }
        }
      }
    }
    
    // デバッグ：データ型を確認
    console.log('Data types check:');
    console.log('筋魔:', typeof this.筋魔, this.筋魔);
    console.log('属性:', typeof this.属性, this.属性);
    console.log('スキル倍率:', typeof this.スキル倍率, this.スキル倍率);
    
    // スキルデータを読み込む
    loadSkillData();
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


document.getElementById('copy').onclick = () => {
	var text = '';
	for(key in data) {
		key_name = key.replace('_', '%');
		text += key_name + ',' + incr(key_name) + "\n";
	}

	//textareaを生成
	var area = document.createElement("textarea");

	//p要素の内容をtextareaに記述
	area.textContent = text;

	//生成したものをdocumentに追加
	document.body.appendChild(area);

	//選択/コピーして・・
	area.select();
	document.execCommand("copy");

	//すぐに消す。
	document.body.removeChild(area);

};


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

fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    setPreview(file);
}); 

dropzone.addEventListener('mouseenter', function() {
		window.addEventListener('paste', pasteHandler);
});

dropzone.addEventListener('mouseleave', function() {
		window.removeEventListener('paste', pasteHandler);
});

const pasteHandler = event => {
	const items = (event.clipboardData || event.originalEvent.clipboardData).items;
	const item = items[0];
	if (item.kind === 'file') {
		setPreview(item.getAsFile());
	}
};

const setValue = (text) => {
	const lines = text.split("\n");
	let line_num = -1;
	let msg = '';
	for(line of lines) {
		if(line.startsWith("HP"))
			line_num = 0;
		if(line_num >= 0) {
			const words = line.split(' ');
			keys = [
				'HP',null,null,null,'属性',null,null,
				null,null,'クリ率','クリダメ','最小','最大','貫通',null,'追加ダメ',null,null,
				'一般ボス追加ダメ','一般ボス追加支配','CT'
			];
			if(keys[line_num]) {
				if(keys[line_num].startsWith('一般'))
				data[keys[line_num]] = Math.max(Number(words[words.length - 1]), Number(words[words.length - 2]));
				else
				data[keys[line_num]] = Number(words[words.length - 1]);

				// 画像認識で値がセットされた要素にクラスを追加
				const inputElement = document.querySelector(`input[autocomplete="${keys[line_num]}"]`);
				if (inputElement) {
					inputElement.classList.add('recognized-input');
				}

				msg += keys[line_num] + ' ';
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
