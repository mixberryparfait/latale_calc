/* Recovered from game-analysis.exe; see docs/fashion-code-analysis-2026-09-28.md. */
const FashionRenderer = (() => {
    const keyFor = (layer, item) => `${String(layer).padStart(2, '0')}_${item.id}`;

    function resolveLayers(data, equipped) {
        // BASICCLOTH base garments sit underneath selectable clothes, never in the removable outfit list.
        if (equipped[19]) equipped = {
            4: { id: '0205_001_01', category: 205 },
            5: { id: '0302_001_01', category: 302 },
            ...equipped,
        };
        const layers = {};
        for (const [layerText, slots] of Object.entries(data.priority)) {
            const layer = Number(layerText);
            for (const slot of [...slots].reverse()) {
                const item = equipped[slot];
                if (!item) continue;
                const rule = data.rules[item.category];
                const action = rule.layers.find(pair => pair[0] === layer)?.[1];
                if (action === 1) break;
                // 2/3 retain the underlying part; the hat state separately selects short hair.
                if (action === 2 || action === 3) continue;
                const key = keyFor(layer, item);
                if (data.records[key]) {
                    layers[layer] = { item, key };
                    break;
                }
            }
        }
        return layers;
    }

    function plan(data, equipped, frameIndex = 0) {
        const frame = data.pose.frames[frameIndex % data.pose.frames.length];
        const layers = resolveLayers(data, equipped);
        const face = frame.rows.find(row => row[0] === 27);
        // FUN_14021e1b0: layer 28 first, then reverse SDT order, excluding 28.
        const rows = [...frame.rows.filter(row => row[0] === 28), ...[...frame.rows].reverse().filter(row => row[0] !== 28)];
        const result = [];
        for (const row of rows) {
            const [layer, originalIndex, rotation, x, y, flags] = row;
            if (!(flags & 255) || !layers[layer]) continue;
            let index = originalIndex;
            if (layer === 23) {
                if (!face) continue;
                index = face[1] < 3 ? face[1] : face[1] + 5;
                if ([901, 904].includes(equipped[1]?.category)) index += 12;
            } else if (layer === 24) {
                if ([2, 3].includes(index)) index = 1;
                else if ([5, 6].includes(index)) index = 4;
                else if ([8, 9].includes(index)) index = 7;
                else if (index === 14) index = 13;
            } else if (layer === 35 && index >= 3 && index <= 5) index = 2;
            // FUN_140219760 passes Index - 1 to the TBL map, whose key is the first int.
            const part = data.records[layers[layer].key][index - 1];
            if (!part) continue;
            const [offsetX, offsetY, pivotX, pivotY, left, top, right, bottom, image] = part;
            if (rotation !== 0 || (flags & 0xff00)) {
                throw new Error('このポーズには未対応の回転・部位反転があります。');
            }
            if (right <= left || bottom <= top) continue;
            result.push({ layer, image, sx: left, sy: top, width: right - left, height: bottom - top,
                x: x + offsetX, y: y + offsetY, pivotX, pivotY });
        }
        return result;
    }

    function bodyCenter(data, equipped) {
        const face = plan(data, { 19: equipped[19] }).find(part => part.layer === 27);
        return face ? face.x + face.width / 2 : 0;
    }

    // Keep the underlying character centered, including when clothes hide the face.
    function framing(commands, width, height, maxScale, centerX = 0) {
        if (!commands.length) return { centerX, bottom: 0, scale: maxScale, padding: 12 * maxScale, bottomPadding: 30 * maxScale };
        const left = Math.min(...commands.map(p => p.x));
        const right = Math.max(...commands.map(p => p.x + p.width));
        const top = Math.min(...commands.map(p => p.y));
        const bottom = Math.max(...commands.map(p => p.y + p.height));
        const padding = 12 * maxScale;
        const bottomPadding = 30 * maxScale;
        const radius = Math.max(Math.abs(left - centerX), Math.abs(right - centerX));
        const scale = Math.min(maxScale, (width - 2 * padding) / (2 * radius), (height - padding - bottomPadding) / (bottom - top));
        return { centerX, bottom, scale, padding, bottomPadding };
    }

    function createPainter(baseUrl) {
        const cache = new Map();
        function load(path) {
            if (!cache.has(path)) cache.set(path, new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = () => { cache.delete(path); reject(new Error('画像を読み込めませんでした。再読み込みしてください。')); };
                img.src = `${baseUrl}/${path}`;
            }));
            return cache.get(path);
        }
        async function draw(canvas, commands, maxScale = 2, flipped = false, allFrames = commands, anchorX = 0) {
            const ticket = (canvas.fashionTicket || 0) + 1;
            canvas.fashionTicket = ticket;
            const imgs = await Promise.all(commands.map(command => load(command.image)));
            if (canvas.fashionTicket !== ticket) return;
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.save();
            ctx.imageSmoothingEnabled = false;
            const { centerX, bottom, scale, bottomPadding } = framing(allFrames, canvas.width, canvas.height, maxScale, anchorX);
            ctx.translate(canvas.width / 2, canvas.height - bottomPadding);
            ctx.scale(flipped ? -scale : scale, scale);
            ctx.translate(-centerX, -bottom);
            commands.forEach((command, i) => {
                ctx.drawImage(imgs[i], command.sx, command.sy, command.width, command.height,
                    command.x, command.y, command.width, command.height);
            });
            ctx.restore();
        }
        return { draw };
    }
    return { plan, resolveLayers, createPainter, framing, bodyCenter };
})();
