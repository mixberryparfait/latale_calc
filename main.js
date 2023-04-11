window.onload = () => {
	console.log('main.js');

const base_damage = (params) => { 
		return (
			(
	      Number(params.筋魔)
	      + (Number(params.属性) * 2) * (1 + Number(params.スキル倍率) / 100)
	    ) / Math.exp(Number(params.敵防御) * (1 - Number(params.貫通) / 100) / 3761.35)
	      + Number(params.追加ダメ)  // 追加ダメ
	      + Number(params.一般ボス追加ダメ)
	      + 1 + Number(params.スキル追加ダメ) * 8 / 9 // 10 => 81   14 => 113
	      - Number(params.敵ダメ減)
	  )
	  * (1 + Number(params.一般ボス支配) / 100)
	  * ((Number(params.基礎最大) + Number(params.最大) + Number(params.属性最大)) / 100 + 
	  	 Math.min((Number(params.基礎最大) + Number(params.最大) + Number(params.属性最大) + 10),
	  	 	        (Number(params.基礎最小) + Number(params.最小) + Number(params.属性最小))) / 100
	  	) / 2
	  * (1 - Number(params.敵ダメ減_) / 100)
};

const cri_rate = (params) => { 
	 return Math.min(100, (Number(params.クリ率) + 15 * Number(params.幸運) / Number(params.敵幸運)));
}

const cri_damage = (params) => { 
	 return base_damage(params) * (1.5 + Number(params.クリダメ) / 100) * (1 - Number(params.敵クリ減) / 100);
}

const damage = (params) => {
	const cr = cri_rate(params) / 100;
	return base_damage(params) * (1 - cr) + cri_damage(params) * cr;
}

const incr = (key) => {
	if(key == '経験値') {
		return Math.floor(damage(data) /100/(1 + Number(data[key]) / 100));
	}
	if(key == 'hp') {
		const abs = Math.ceil((Number(data['hp']) - Number(data['体力']) * 7)  / (1 + Number(data['hp_']) / 100));
		return Math.floor(damage(data) * (1 + Number(data['hp_']) / 100) / Number(data['hp']));
	}
	if(key == 'hp%') {
		return Math.floor((Number(data['hp']) - Number(data['体力']) * 7) / Number(data['hp']) / 100 / (1 + Number(data['hp_']) / 100));
	}
	const tmp = Object.assign({}, data);
	if(key.endsWith('%')) {
		const prefix = key.substring(0, key.length - 1);
		const abs = Math.ceil(Number(tmp[prefix]) / (1 + Number(tmp[prefix + '_']) / 100));
		tmp[prefix] = abs * (1.01 + Number(tmp[prefix + '_']) / 100);
	}
	else if(key.startsWith('最終')) {
		const prefix = key.substring(2);
		const abs = Math.ceil(tmp[prefix] / (1 + Number(tmp[key]) / 100));
		tmp[prefix] = abs * (1.01 + Number(tmp[key]) / 100);
	}
	else if(key + '_' in tmp) {
		tmp[key] = Number(tmp[key]) + 1 + Number(tmp[key + '_']) / 100;
	}
	else if('最終' + key in tmp) {
		tmp[key] = Number(tmp[key]) + 1 + Number(tmp['最終' + key]) / 100;
	}
	else if(key == '貫通') {
		tmp[key] = 100 - (100 - Number(tmp[key])) * 0.99;
	}
	else {
		tmp[key] = Number(tmp[key]) + 1;
	}
	console.log(key);
	console.log(tmp);
	console.log(damage(tmp));
	console.log(damage(data));
	return Math.floor(damage(tmp) - damage(data));
};

const data = {
	筋魔: 872856,
	筋魔_: 316,
  幸運: 400948,
  幸運_: 0,
  体力: 400512,
  体力_: 620,
  HP: 4474100,
  HP_: 217,
  攻撃最大: 0,
  攻撃最小: 0,
  防御: 0,
  属性: 13018,
  属性_: 276,
  クリ率: 41,
  クリダメ: 2617,
  最終クリダメ: 16,
  最大: 2316,
  基礎最大: 105,
  属性最大: 27,
  最終最大: 14,
  最小: 10000,
  基礎最小: 95,
  属性最小: 0,
  最終最小: 0,
  貫通: 96,
  追加ダメ: 202838,
  追加ダメ_: 110,
  一般ボス追加ダメ: 111230,
  一般ボス支配: 15.9,
  CT: 0,
  スキル倍率: 4000,
  スキル追加ダメ: 90,
  敵防御: 62243,
  敵ダメ減: 579949,
  敵ダメ減_: 75,
  敵幸運: 1068254,
  敵クリ減: 60,
  経験値: 1243,
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

const vm = new Vue ({
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
    damageFormat: () => damageFormat,
  }
});


const copy = () => {

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

}

};