window.onload = () => {
	console.log('main.js');

const base_damage = (params) => { 
		return (
			(
	      Number(params.筋魔)
	      + (Number(params.属性) * 2) * (1 + Number(params.スキル倍率) / 100)
	    ) * (1 / Math.exp(Number(params.敵防御) / 3761.35) * (1 - Number(params.貫通) / 100) + Number(params.貫通) / 100)
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
	return Math.floor(damage(tmp) - damage(data));
};

const base = key => {
	if('最終' + key in data)
		return data[key] / (1 + data['最終' + key] / 100);
	if(key + '_' in data)
		return data[key] / (1 + data[key + '_'] / 100);
	return data[key];
};

const data = {
	筋魔: 872856,
	筋魔_: 316,
  幸運: 400948,
  幸運_: 300,
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
    base: () => base,
    damageFormat: () => damageFormat,
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
				'hp',null,null,null,'属性',null,null,
				null,null,'クリ率','クリダメ','最小','最大','貫通',null,'追加ダメ',null,null,
				'一般ボス追加ダメ','一般ボス追加支配','CT'
			];
			if(keys[line_num]) {
				if(keys[line_num].startsWith('一般'))
				data[keys[line_num]] = Math.max(Number(words[words.length - 1]), Number(words[words.length - 2]));
				else
				data[keys[line_num]] = Number(words[words.length - 1]);
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
