/* Display-only translations. Stored values, game names and calculation keys stay Japanese. */
const I18n = (() => {
    const storageKey = 'latale-language';
    let language = 'ja';
    try { if (localStorage.getItem(storageKey) === 'ko') language = 'ko'; } catch (_) { /* Storage is optional. */ }
    const dictionary = window.LATALE_KO;
    const bindings = new Map();
    let cleanupPending = false;
    const listeners = new Set();
    const escape = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const patterns = Object.entries(dictionary).filter(([key]) => /\{\d+\}/.test(key)).map(([key, value]) => {
        const indices = [];
        const parts = key.split(/(\{\d+\})/).map(part => {
            if (/^\{\d+\}$/.test(part)) { indices.push(Number(part.slice(1, -1))); return '([\\s\\S]*?)'; }
            return escape(part);
        });
        return { regex: new RegExp('^' + parts.join('') + '$'), value, indices };
    });
    function format(text, args) { return text.replace(/\{(\d+)\}/g, (match, index) => args[index] ?? match); }
    function t(key, args = []) {
        return format(language === 'ko' ? dictionary[key] ?? key : key, args);
    }
    function display(value) {
        if (language !== 'ko' || typeof value !== 'string') return value;
        if (Object.hasOwn(dictionary, value)) return dictionary[value];
        const imported = /^(\d+)項目を反映しました \/ 未反映: (.*)$/.exec(value);
        if (imported) return t('{0}項目を反映しました', [imported[1]]) + t(' / 未反映: {0}', [effect(imported[2])]);
        for (const pattern of patterns) {
            const match = pattern.regex.exec(value);
            if (match) {
                const args = [];
                pattern.indices.forEach((index, i) => { args[index] = match[i + 1]; });
                return format(pattern.value, args);
            }
        }
        return value;
    }
    // Used only for stat/effect descriptions, never for item, skill or user-provided names.
    const terms = Object.keys(dictionary).filter(key => !/[\s{}<>]/.test(key) && key.length < 30)
        .sort((a, b) => b.length - a.length);
    const termPattern = new RegExp(terms.map(escape).join('|'), 'g');
    function effect(value) {
        if (language !== 'ko' || typeof value !== 'string') return value;
        return value.split(/(<[^>]*>)/g).map(part => part.startsWith('<') ? part :
            part.replace(termPattern, key => dictionary[key])).join('');
    }
    function bind(element, attribute, getter) {
        let entries = bindings.get(element);
        if (!entries) bindings.set(element, entries = new Map());
        const apply = () => {
            const value = getter();
            if (attribute) element.setAttribute(attribute, value);
            else element.textContent = value;
        };
        entries.set(attribute, apply);
        apply();
        if (!cleanupPending) {
            cleanupPending = true;
            queueMicrotask(() => {
                for (const element of bindings.keys()) if (!element.isConnected) bindings.delete(element);
                cleanupPending = false;
            });
        }
    }
    function text(element, getter) { bind(element, '', getter); }
    function attribute(element, name, getter) { bind(element, name, getter); }
    function update() {
        document.documentElement.lang = language;
        for (const [element, entries] of bindings) {
            if (!element.isConnected) { bindings.delete(element); continue; }
            for (const apply of entries.values()) apply();
        }
        document.querySelectorAll('[data-language]').forEach(button => {
            button.setAttribute('aria-pressed', String(button.dataset.language === language));
        });
        for (const listener of listeners) listener(language);
    }
    function setLanguage(next) {
        if (!['ja', 'ko'].includes(next)) return;
        language = next;
        try { localStorage.setItem(storageKey, next); } catch (_) { /* Keep working without persistence. */ }
        update();
    }
    function useVue() {
        const locale = Vue.ref(language);
        const listener = next => { locale.value = next; };
        listeners.add(listener);
        Vue.onUnmounted(() => listeners.delete(listener));
        return {
            t: (value, args) => { locale.value; return args ? t(value, args) : display(value); },
            te: value => { locale.value; return effect(value); }
        };
    }
    function init() {
        // Capture static text once outside Vue. Dynamic DOM writes use explicit bindings.
        const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);
        for (const node of nodes) {
            if (node.parentElement.closest('#app, script, style, [data-language]')) continue;
            const source = node.textContent;
            if (!Object.hasOwn(dictionary, source.trim())) continue;
            text(node, () => source.replace(source.trim(), () => t(source.trim())));
        }
        for (const element of document.querySelectorAll('[title], [placeholder], [aria-label], [alt]')) {
            if (element.closest('#app')) continue;
            for (const name of ['title', 'placeholder', 'aria-label', 'alt']) {
                const source = element.getAttribute(name);
                if (source && Object.hasOwn(dictionary, source)) attribute(element, name, () => t(source));
            }
        }
        document.querySelectorAll('[data-language]').forEach(button => {
            button.addEventListener('click', () => setLanguage(button.dataset.language));
        });
        update();
    }
    window.addEventListener('storage', event => {
        if (event.key === storageKey) { language = event.newValue === 'ko' ? 'ko' : 'ja'; update(); }
    });
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
    else init();
    return { t, display, effect, text, attribute, useVue, setLanguage, onChange: listener => listeners.add(listener) };
})();
