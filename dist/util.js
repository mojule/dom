"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.css = exports.unwrap = exports.decorateAttributes = exports.decorateData = exports.strictSelect = exports.attr = exports.emptyElement = void 0;
const h_1 = require("./h");
const predicates_1 = require("./predicates");
const emptyElement = (el) => {
    while (el.firstChild)
        el.removeChild(el.firstChild);
};
exports.emptyElement = emptyElement;
const styleKey = 'style';
const dataKey = 'data';
const attr = (el, ...attributeRecords) => {
    attributeRecords.forEach(attributes => {
        Object.keys(attributes).forEach(key => {
            if (key === styleKey) {
                if (styleKey in el) {
                    const value = attributes[key];
                    if (typeof value === 'string') {
                        el.setAttribute('style', value);
                        return;
                    }
                    const styleTarget = el[styleKey];
                    try {
                        Object.assign(styleTarget, value);
                    }
                    catch (err) {
                        console.warn('setting style on el', { styleTarget, value });
                        throw err;
                    }
                }
                return;
            }
            if (key === dataKey && (0, predicates_1.isHTMLOrSVGElement)(el)) {
                Object.assign(el.dataset, attributes[key]);
                return;
            }
            const attributeValue = attributes[key];
            const value = (Array.isArray(attributeValue) ?
                attributeValue.join(' ') :
                String(attributeValue));
            el.setAttribute(key, value);
        });
    });
};
exports.attr = attr;
const strictSelect = (selectors, el = document) => {
    const result = el.querySelector(selectors);
    if (result === null)
        throw Error(`Expected ${selectors} to match something`);
    return result;
};
exports.strictSelect = strictSelect;
const decorateData = (data, ...els) => {
    els.forEach(el => Object.assign(el.dataset, data));
    return (0, h_1.fragment)(...els);
};
exports.decorateData = decorateData;
const decorateAttributes = (attrs, ...els) => {
    els.forEach(el => {
        (0, exports.attr)(el, attrs);
    });
    return (0, h_1.fragment)(...els);
};
exports.decorateAttributes = decorateAttributes;
const unwrap = (el) => {
    const { parentElement } = el;
    if (parentElement === null)
        throw Error('Expected parentElement');
    while (el.firstChild) {
        parentElement.insertBefore(el.firstChild, el);
    }
    el.remove();
};
exports.unwrap = unwrap;
const css = (strings, ...keys) => (0, h_1.style)(strings.map((s, i) => s + (keys[i] || '')).join(''));
exports.css = css;
//# sourceMappingURL=util.js.map