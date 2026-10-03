/* Standalone page; does not modify the calculator's Vue state or bundle order. */
(async () => {
    'use strict';
    const $ = id => document.getElementById(id);
    const names = { 1: '帽子', 2: 'メガネ', 3: 'イヤリング', 4: 'トップス', 5: 'ボトムス', 6: 'マント・背中',
        7: '手袋', 8: '靴', 9: 'ストッキング', 10: 'ビンディ', 17: '髪', 18: '目', 19: '肌', 20: '全身衣装' };
    const slots = [1, 4, 5, 20, 8, 7, 6, 2, 3, 9, 10];
    const appearanceSlots = [17, 18, 19];
    const selectionSlots = [...appearanceSlots, ...slots];
    const status = $('status');
    let data;
    try {
        const response = await fetch('fashion-data/catalog.json');
        if (!response.ok) throw new Error('データを取得できませんでした。');
        data = await response.json();
    } catch (error) {
        I18n.text(status, () => I18n.t("{0} HTTPサーバーからこのページを開いて、再読み込みしてください。", [I18n.display(error.message)]));
        return;
    }
    const byId = new Map(data.items.map(item => [item.id, item]));
    const equipped = {};
    const itemsBySlot = new Map(selectionSlots.map(n => [n, data.items.filter(item => item.slot === n)]));
    const storageKey = 'latale-fashion-bookmarks-v1';
    let bookmarks = [];
    try {
        const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
        if (!Array.isArray(saved)) throw new Error('Invalid bookmarks');
        bookmarks = saved.filter(entry => entry && typeof entry.name === 'string' && entry.parts &&
            selectionSlots.every(n => entry.parts[n] == null ? !appearanceSlots.includes(n) : byId.get(entry.parts[n])?.slot === n)).slice(0, 8);
    } catch (error) {
        I18n.text($('bookmark-status'), () => I18n.t("保存データを読み込めませんでした。ブラウザの保存設定を確認してください。"));
    }
    const painter = FashionRenderer.createPainter('fashion-data/images');
    const canvas = $('character');
    let slot = 1;
    let page = 0;
    let flipped = false;
    let frame = 0;
    let lastTime = 0;
    let pendingPreview = Promise.resolve();
    const pageSize = 24;
    const first = n => data.items.find(item => item.slot === n);
    const initialAppearance = { 17: '1301_001_01', 18: '1401_001_01', 19: '1501_001_01' };
    for (const [n, id] of Object.entries(initialAppearance)) {
        equipped[n] = byId.get(id) || first(Number(n));
    }
    let urlError = '';
    const shareVersion = document.querySelector('meta[name="fashion-share-version"]')?.content;
    if (shareVersion) try {
        const restored = FashionUrl.parse(new URL(location.href), id => byId.get(id));
        Object.assign(equipped, restored.equipped);
        flipped = restored.flipped;
        $('flip').setAttribute('aria-pressed', String(flipped));
    } catch (error) { urlError = error.message; }
    function updateShare() {
        if (!shareVersion) return;
        const url = new URL(location.href);
        url.search = FashionUrl.encode(equipped, flipped).toString();
        url.hash = '';
        url.pathname = '/';
        url.searchParams.set('v', shareVersion);
        history.replaceState(null, '', url);
        const intent = new URL('https://twitter.com/intent/tweet');
        intent.searchParams.set('url', url.href);
        intent.searchParams.set('hashtags', 'ラテール着せ替え');
        $('share-x').href = intent.href;
        $('share-x').hidden = false;
        $('share-url').hidden = false;
    }

    function showError(error) { I18n.text(status, () => I18n.display(error.message)); }
    $('share-url').addEventListener('click', async () => {
        if (!shareVersion) return;
        updateShare();
        const url = location.href;
        try {
            await navigator.clipboard.writeText(url);
            $('share-url-fallback').hidden = true;
            I18n.text($('share-status'), () => I18n.t("コーデのURLをコピーしました。"));
        } catch (error) {
            const input = $('share-url-fallback');
            input.value = url;
            input.hidden = false;
            input.focus();
            input.select();
            I18n.text($('share-status'), () => I18n.t("下のURLをコピーしてください。"));
        }
    });
    function preview() {
        try {
            const frames = data.pose.frames.map((_, index) => FashionRenderer.plan(data, equipped, index));
            pendingPreview = painter.draw(canvas, frames[frame], 2, flipped, frames.flat(), FashionRenderer.bodyCenter(data, equipped)).catch(showError);
        } catch (error) { showError(error); }
    }
    function button(text, action, className) {
        const el = document.createElement('button');
        el.type = 'button';
        if (text) I18n.text(el, () => I18n.display(text));
        if (className) el.className = className;
        el.addEventListener('click', action);
        return el;
    }
    function updateOutfit() {
        $('equipped').replaceChildren();
        for (const n of slots) {
            if (!equipped[n]) continue;
            const item = equipped[n];
            const row = document.createElement('div');
            row.className = 'outfit-row';
            const part = document.createElement('span');
            I18n.text(part, () => I18n.t(names[n]));
            const name = document.createElement('span');
            I18n.text(name, () => item.name);
            const remove = button('×', () => { delete equipped[n]; refresh(); });
            I18n.attribute(remove, 'aria-label', () => I18n.t("{0}を外す", [I18n.t(names[n])]));
            row.append(part, name, remove);
            $('equipped').append(row);
        }
        if (!$('equipped').children.length) {
            const empty = document.createElement('p');
            empty.className = 'empty-outfit';
            I18n.text(empty, () => I18n.t("基本の上下を表示しています。ワードローブから衣装を選んでください。"));
            $('equipped').append(empty);
        }
    }
    function renderItems() {
        const query = $('search').value.trim().normalize('NFKC').toLocaleLowerCase('ja');
        const results = data.items.filter(item => item.slot === slot &&
            `${item.name} ${item.id}`.normalize('NFKC').toLocaleLowerCase('ja').includes(query));
        const pages = Math.max(1, Math.ceil(results.length / pageSize));
        page = Math.min(page, pages - 1);
        I18n.text($('results-label'), () => I18n.t("{0} · {1} 点", [I18n.t(names[slot]), results.length.toLocaleString()]));
        I18n.text($('page-label'), () => `${page + 1} / ${pages}`);
        $('previous').disabled = page === 0;
        $('next').disabled = page + 1 >= pages;
        $('remove-slot').hidden = appearanceSlots.includes(slot);
        $('remove-slot').disabled = !slots.includes(slot) || !equipped[slot];
        $('items').replaceChildren();
        for (const item of results.slice(page * pageSize, (page + 1) * pageSize)) {
            const card = button('', () => {
                equipped[slot] = item;
                // Game removes the whole-body outfit when a top or bottom is applied.
                if ([4, 5, 6].includes(slot)) delete equipped[20];
                refresh();
            }, 'item-card');
            card.setAttribute('aria-pressed', String(equipped[slot]?.id === item.id));
            I18n.attribute(card, 'aria-label', () => I18n.t("{0}を選ぶ", [item.name]));
            const thumbnail = document.createElement('canvas');
            thumbnail.width = 140;
            thumbnail.height = 174;
            thumbnail.setAttribute('aria-hidden', 'true');
            const title = document.createElement('span');
            title.className = 'item-name';
            I18n.text(title, () => appearanceSlots.includes(slot) ? I18n.t("{0} {1} / 色 {2}", [I18n.t(names[slot]), item.name, item.color]) : item.name);
            card.append(thumbnail, title);
            $('items').append(card);
            const candidate = { ...equipped, [slot]: item };
            if ([4, 5, 6].includes(slot)) delete candidate[20];
            try { drawThumbnail(thumbnail, candidate); }
            catch (error) { showError(error); }
        }
        if (!results.length) {
            const empty = document.createElement('p');
            empty.className = 'empty-outfit';
            I18n.text(empty, () => I18n.t("該当する見た目はありません。検索語を変えてみてください。"));
            $('items').append(empty);
        }
    }
    function refresh() {
        updateShare();
        preview();
        updateOutfit();
        renderItems();
    }
    function drawThumbnail(target, outfit) {
        const commands = FashionRenderer.plan(data, outfit);
        return painter.draw(target, commands, 1, false, commands, FashionRenderer.bodyCenter(data, outfit)).catch(showError);
    }
    function storeBookmarks(next) {
        try { localStorage.setItem(storageKey, JSON.stringify(next)); }
        catch (error) {
            I18n.text($('bookmark-status'), () => I18n.t("保存できませんでした。ブラウザの保存設定や空き容量を確認してください。"));
            return false;
        }
        bookmarks = next;
        renderBookmarks();
        return true;
    }
    function bookmarkParts(entry) {
        return Object.fromEntries(selectionSlots.filter(n => entry.parts[n]).map(n => [n, byId.get(entry.parts[n])]));
    }
    function renderBookmarks() {
        $('bookmarks').replaceChildren();
        I18n.text($('bookmark-count'), () => `${bookmarks.length} / 8`);
        if (!bookmarks.length) {
            const empty = document.createElement('p');
            empty.className = 'bookmark-empty';
            I18n.text(empty, () => I18n.t("今の組み合わせを保存すると、ここに並びます。"));
            $('bookmarks').append(empty);
        }
        bookmarks.forEach((entry, index) => {
            const row = document.createElement('div');
            row.className = 'bookmark-row';
            const load = button('', () => {
                selectionSlots.forEach(n => delete equipped[n]);
                Object.assign(equipped, bookmarkParts(entry));
                refresh();
                I18n.text($('bookmark-status'), () => I18n.t("{0}を呼び出しました。", [entry.name]));
            }, 'bookmark-load');
            I18n.attribute(load, 'aria-label', () => I18n.t("{0}を呼び出す", [entry.name]));
            const thumb = document.createElement('canvas');
            thumb.width = 140;
            thumb.height = 174;
            thumb.setAttribute('aria-hidden', 'true');
            const title = document.createElement('span');
            I18n.text(title, () => entry.name);
            load.append(thumb, title);
            drawThumbnail(thumb, bookmarkParts(entry));
            const remove = button('削除', () => {
                if (storeBookmarks(bookmarks.filter((_, i) => i !== index))) I18n.text($('bookmark-status'), () => I18n.t("{0}を削除しました。", [entry.name]));
            }, 'text-button');
            I18n.attribute(remove, 'aria-label', () => I18n.t("{0}を削除", [entry.name]));
            row.append(load, remove);
            $('bookmarks').append(row);
        });
    }
    $('save-outfit').addEventListener('submit', event => {
        event.preventDefault();
        if (bookmarks.length >= 8) {
            I18n.text($('bookmark-status'), () => I18n.t("8件保存済みです。不要な組み合わせを削除してから保存してください。"));
            return;
        }
        const name = $('bookmark-name').value.trim() || `コーデ ${bookmarks.length + 1}`;
        const parts = Object.fromEntries(selectionSlots.map(n => [n, equipped[n]?.id || null]));
        if (storeBookmarks([...bookmarks, { name, parts }])) {
            $('bookmark-name').value = '';
            I18n.text($('bookmark-status'), () => I18n.t("{0}を保存しました。", [name]));
        }
    });
    const randomSlots = new Set(selectionSlots);
    function updateRandomCount() {
        $('randomize').disabled = randomSlots.size === 0;
        I18n.text($('random-count'), () => I18n.t("{0} 部位を変更 · {1} 部位を固定", [randomSlots.size, selectionSlots.length - randomSlots.size]));
    }
    updateRandomCount();
    $('randomize').addEventListener('click', () => {
        const separateSlots = [4, 5, 6];
        const wholeBodyFixed = !randomSlots.has(20) && Boolean(equipped[20]);
        const separateFixed = separateSlots.some(n => !randomSlots.has(n) && equipped[n]);
        const separateCount = separateSlots.reduce((count, n) =>
            count + (randomSlots.has(n) ? itemsBySlot.get(n).length : 0), 0);
        const wholeBodyCount = randomSlots.has(20) ? itemsBySlot.get(20).length : 0;
        const useWholeBody = wholeBodyFixed || (!separateFixed &&
            Math.random() * (separateCount + wholeBodyCount) < wholeBodyCount);
        for (const n of randomSlots) {
            // Only unlocked slots may be cleared; manually fixed combinations stay intact.
            if ((n === 20 && !useWholeBody) || (separateSlots.includes(n) && useWholeBody)) {
                delete equipped[n];
                continue;
            }
            const choices = itemsBySlot.get(n).filter(item => item.id !== equipped[n]?.id);
            if (choices.length) equipped[n] = choices[Math.floor(Math.random() * choices.length)];
        }
        refresh();
    });
    for (const n of selectionSlots) {
        const row = document.createElement('div');
        row.className = 'category-row';
        const lock = button('🔓', () => {
            if (randomSlots.has(n)) randomSlots.delete(n); else randomSlots.add(n);
            updateLock();
            updateRandomCount();
        }, 'slot-lock');
        lock.dataset.slot = n;
        function updateLock() {
            const fixed = !randomSlots.has(n);
            I18n.text(lock, () => fixed ? '🔒' : '🔓');
            lock.setAttribute('aria-pressed', String(fixed));
            I18n.attribute(lock, 'aria-label', () => `${I18n.t(names[n])}：${fixed ? I18n.t("固定中。クリックでシャッフル対象にする") : I18n.t("シャッフル対象。クリックで固定する")}`);
            I18n.attribute(lock, 'title', () => lock.getAttribute('aria-label'));
        }
        updateLock();
        const tab = button(names[n], () => {
            slot = n;
            page = 0;
            for (const child of $('categories').querySelectorAll('.category-tab')) child.setAttribute('aria-pressed', String(child === tab));
            renderItems();
        }, 'category-tab');
        tab.setAttribute('aria-pressed', String(n === slot));
        row.append(lock, tab);
        $('categories').append(row);
    }
    $('search').addEventListener('input', () => { page = 0; renderItems(); });
    $('previous').addEventListener('click', () => { page--; renderItems(); });
    $('next').addEventListener('click', () => { page++; renderItems(); });
    $('remove-slot').addEventListener('click', () => {
        if (!slots.includes(slot)) return;
        delete equipped[slot];
        refresh();
    });
    $('flip').addEventListener('click', () => {
        flipped = !flipped;
        $('flip').setAttribute('aria-pressed', String(flipped));
        updateShare();
        preview();
    });
    $('animate').addEventListener('change', () => { frame = 0; lastTime = 0; preview(); });
    $('reset').addEventListener('click', () => {
        selectionSlots.forEach(n => delete equipped[n]);
        for (const [n, id] of Object.entries(initialAppearance)) equipped[n] = byId.get(id) || first(Number(n));
        refresh();
    });
    $('download').addEventListener('click', async () => {
        await pendingPreview;
        canvas.toBlob(blob => {
            if (!blob) return;
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'latale-fashion.png';
            link.click();
            setTimeout(() => URL.revokeObjectURL(url), 1000);
        });
    });
    I18n.text($('count'), () => I18n.t("{0} 点の見た目", [data.items.filter(item => selectionSlots.includes(item.slot)).length.toLocaleString()]));
    $('workspace').hidden = false;
    I18n.text(status, () => I18n.display(urlError));
    refresh();
    renderBookmarks();
    function tick(time) {
        if ($('animate').checked && !document.hidden) {
            if (!lastTime) lastTime = time;
            if (time - lastTime >= data.pose.frames[frame].seconds * 1000) {
                lastTime = time;
                frame = (frame + 1) % data.pose.frames.length;
                preview();
            }
        } else lastTime = 0;
        requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
})();
