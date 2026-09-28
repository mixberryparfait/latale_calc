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
        status.textContent = `${error.message} HTTPサーバーからこのページを開いて、再読み込みしてください。`;
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
        $('bookmark-status').textContent = '保存データを読み込めませんでした。ブラウザの保存設定を確認してください。';
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

    function showError(error) { status.textContent = error.message; }
    function preview() {
        try {
            const frames = data.pose.frames.map((_, index) => FashionRenderer.plan(data, equipped, index));
            pendingPreview = painter.draw(canvas, frames[frame], 2, flipped, frames.flat(), FashionRenderer.bodyCenter(data, equipped)).catch(showError);
        } catch (error) { showError(error); }
    }
    function button(text, action, className) {
        const el = document.createElement('button');
        el.type = 'button';
        el.textContent = text;
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
            part.textContent = names[n];
            const name = document.createElement('span');
            name.textContent = item.name;
            const remove = button('×', () => { delete equipped[n]; refresh(); });
            remove.setAttribute('aria-label', `${names[n]}を外す`);
            row.append(part, name, remove);
            $('equipped').append(row);
        }
        if (!$('equipped').children.length) {
            const empty = document.createElement('p');
            empty.className = 'empty-outfit';
            empty.textContent = '基本の上下を表示しています。ワードローブから衣装を選んでください。';
            $('equipped').append(empty);
        }
    }
    function renderItems() {
        const query = $('search').value.trim().normalize('NFKC').toLocaleLowerCase('ja');
        const results = data.items.filter(item => item.slot === slot &&
            `${item.name} ${item.id}`.normalize('NFKC').toLocaleLowerCase('ja').includes(query));
        const pages = Math.max(1, Math.ceil(results.length / pageSize));
        page = Math.min(page, pages - 1);
        $('results-label').textContent = `${names[slot]} · ${results.length.toLocaleString()} 点`;
        $('page-label').textContent = `${page + 1} / ${pages}`;
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
            card.setAttribute('aria-label', `${item.name}を選ぶ`);
            const thumbnail = document.createElement('canvas');
            thumbnail.width = 140;
            thumbnail.height = 174;
            thumbnail.setAttribute('aria-hidden', 'true');
            const title = document.createElement('span');
            title.className = 'item-name';
            title.textContent = appearanceSlots.includes(slot) ? `${names[slot]} ${item.name} / 色 ${item.color}` : item.name;
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
            empty.textContent = '該当する見た目はありません。検索語を変えてみてください。';
            $('items').append(empty);
        }
    }
    function refresh() {
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
            $('bookmark-status').textContent = '保存できませんでした。ブラウザの保存設定や空き容量を確認してください。';
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
        $('bookmark-count').textContent = `${bookmarks.length} / 8`;
        if (!bookmarks.length) {
            const empty = document.createElement('p');
            empty.className = 'bookmark-empty';
            empty.textContent = '今の組み合わせを保存すると、ここに並びます。';
            $('bookmarks').append(empty);
        }
        bookmarks.forEach((entry, index) => {
            const row = document.createElement('div');
            row.className = 'bookmark-row';
            const load = button('', () => {
                selectionSlots.forEach(n => delete equipped[n]);
                Object.assign(equipped, bookmarkParts(entry));
                refresh();
                $('bookmark-status').textContent = `${entry.name}を呼び出しました。`;
            }, 'bookmark-load');
            load.setAttribute('aria-label', `${entry.name}を呼び出す`);
            const thumb = document.createElement('canvas');
            thumb.width = 140;
            thumb.height = 174;
            thumb.setAttribute('aria-hidden', 'true');
            const title = document.createElement('span');
            title.textContent = entry.name;
            load.append(thumb, title);
            drawThumbnail(thumb, bookmarkParts(entry));
            const remove = button('削除', () => {
                if (storeBookmarks(bookmarks.filter((_, i) => i !== index))) $('bookmark-status').textContent = `${entry.name}を削除しました。`;
            }, 'text-button');
            remove.setAttribute('aria-label', `${entry.name}を削除`);
            row.append(load, remove);
            $('bookmarks').append(row);
        });
    }
    $('save-outfit').addEventListener('submit', event => {
        event.preventDefault();
        if (bookmarks.length >= 8) {
            $('bookmark-status').textContent = '8件保存済みです。不要な組み合わせを削除してから保存してください。';
            return;
        }
        const name = $('bookmark-name').value.trim() || `コーデ ${bookmarks.length + 1}`;
        const parts = Object.fromEntries(selectionSlots.map(n => [n, equipped[n]?.id || null]));
        if (storeBookmarks([...bookmarks, { name, parts }])) {
            $('bookmark-name').value = '';
            $('bookmark-status').textContent = `${name}を保存しました。`;
        }
    });
    const randomSlots = new Set(selectionSlots);
    function updateRandomCount() {
        $('randomize').disabled = randomSlots.size === 0;
        $('random-count').textContent = `${randomSlots.size} 部位を変更 · ${selectionSlots.length - randomSlots.size} 部位を固定`;
    }
    updateRandomCount();
    $('randomize').addEventListener('click', () => {
        for (const n of randomSlots) {
            const choices = itemsBySlot.get(n).filter(item => item.id !== equipped[n]?.id);
            if (choices.length) equipped[n] = choices[Math.floor(Math.random() * choices.length)];
        }
        // Do not remove a fixed whole-body outfit when randomizing underlying clothes.
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
            lock.textContent = fixed ? '🔒' : '🔓';
            lock.setAttribute('aria-pressed', String(fixed));
            lock.setAttribute('aria-label', `${names[n]}：${fixed ? '固定中。クリックでシャッフル対象にする' : 'シャッフル対象。クリックで固定する'}`);
            lock.title = lock.getAttribute('aria-label');
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
    $('count').textContent = `${data.items.filter(item => selectionSlots.includes(item.slot)).length.toLocaleString()} 点の見た目`;
    $('workspace').hidden = false;
    status.textContent = '';
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
