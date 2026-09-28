/* Shared URL contract for the browser and the Worker. */
const FashionUrl = (() => {
    const fields = { hair: 17, eyes: 18, skin: 19, hat: 1, top: 4, bottom: 5, outfit: 20,
        shoes: 8, gloves: 7, cape: 6, glasses: 2, earrings: 3, stockings: 9, bindi: 10 };
    const defaults = { hair: '1301_001_01', eyes: '1401_001_01', skin: '1501_001_01' };
    function encode(equipped, flipped = false) {
        const params = new URLSearchParams();
        for (const [name, slot] of Object.entries(fields)) if (equipped[slot]) params.set(name, equipped[slot].id);
        params.set('flip', flipped ? '1' : '0');
        return params;
    }
    function parse(url, lookup) {
        if (url.search.length > 2048) throw new Error('URLが長すぎます。');
        for (const [name] of url.searchParams) {
            if (!Object.hasOwn(fields, name) && !['flip', 'v', 'fresh'].includes(name)) throw new Error('不明なパラメータです。');
            if (url.searchParams.getAll(name).length !== 1) throw new Error('同じパラメータを複数指定できません。');
        }
        const equipped = {};
        for (const [name, slot] of Object.entries(fields)) {
            const id = url.searchParams.get(name) ?? defaults[name];
            if (id == null) continue;
            const item = lookup(id);
            if (!item || item.slot !== slot) throw new Error(`${name}のアイテムIDが不正です。`);
            equipped[slot] = item;
        }
        const flip = url.searchParams.get('flip') ?? '0';
        if (!['0', '1'].includes(flip)) throw new Error('flipは0または1です。');
        return { equipped, flipped: flip === '1', params: encode(equipped, flip === '1') };
    }
    return { fields, defaults, encode, parse };
})();
