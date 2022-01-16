"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$style = exports.stop = exports.$script = exports.rect = exports.radialGradient = exports.polyline = exports.polygon = exports.pattern = exports.path = exports.metadata = exports.mask = exports.marker = exports.linearGradient = exports.line = exports.image = exports.g = exports.foreignObject = exports.filter = exports.feTurbulence = exports.feTile = exports.feSpotLight = exports.feSpecularLighting = exports.fePointLight = exports.feOffset = exports.feMorphology = exports.feMergeNode = exports.feMerge = exports.feImage = exports.feGaussianBlur = exports.feFuncR = exports.feFuncG = exports.feFuncB = exports.feFuncA = exports.feFlood = exports.feDistantLight = exports.feDisplacementMap = exports.feDiffuseLighting = exports.feConvolveMatrix = exports.feComposite = exports.feComponentTransfer = exports.feColorMatrix = exports.feBlend = exports.ellipse = exports.desc = exports.defs = exports.clipPath = exports.circle = exports.$a = exports.svgElementFactory = exports.s = void 0;
exports.createLinearGradient = exports.view = exports.use = exports.tspan = exports.$title = exports.textPath = exports.$text = exports.symbol = exports.$switch = exports.svg = void 0;
const consts_1 = require("./consts");
const predicates_1 = require("./predicates");
const util_1 = require("./util");
const s = (name, ...args) => {
    const el = document.createElementNS(consts_1.svgNs, name);
    args.forEach(arg => {
        if ((0, predicates_1.isSVGElement)(arg) || (0, predicates_1.isElement)(arg) || typeof arg === 'string') {
            el.append(arg);
        }
        else {
            (0, util_1.attr)(el, arg);
        }
    });
    return el;
};
exports.s = s;
const svgElementFactory = (name) => (...args) => (0, exports.s)(name, ...args);
exports.svgElementFactory = svgElementFactory;
exports.$a = (0, exports.svgElementFactory)('a');
exports.circle = (0, exports.svgElementFactory)('circle');
exports.clipPath = (0, exports.svgElementFactory)('clipPath');
exports.defs = (0, exports.svgElementFactory)('defs');
exports.desc = (0, exports.svgElementFactory)('desc');
exports.ellipse = (0, exports.svgElementFactory)('ellipse');
exports.feBlend = (0, exports.svgElementFactory)('feBlend');
exports.feColorMatrix = (0, exports.svgElementFactory)('feColorMatrix');
exports.feComponentTransfer = (0, exports.svgElementFactory)('feComponentTransfer');
exports.feComposite = (0, exports.svgElementFactory)('feComposite');
exports.feConvolveMatrix = (0, exports.svgElementFactory)('feConvolveMatrix');
exports.feDiffuseLighting = (0, exports.svgElementFactory)('feDiffuseLighting');
exports.feDisplacementMap = (0, exports.svgElementFactory)('feDisplacementMap');
exports.feDistantLight = (0, exports.svgElementFactory)('feDistantLight');
exports.feFlood = (0, exports.svgElementFactory)('feFlood');
exports.feFuncA = (0, exports.svgElementFactory)('feFuncA');
exports.feFuncB = (0, exports.svgElementFactory)('feFuncB');
exports.feFuncG = (0, exports.svgElementFactory)('feFuncG');
exports.feFuncR = (0, exports.svgElementFactory)('feFuncR');
exports.feGaussianBlur = (0, exports.svgElementFactory)('feGaussianBlur');
exports.feImage = (0, exports.svgElementFactory)('feImage');
exports.feMerge = (0, exports.svgElementFactory)('feMerge');
exports.feMergeNode = (0, exports.svgElementFactory)('feMergeNode');
exports.feMorphology = (0, exports.svgElementFactory)('feMorphology');
exports.feOffset = (0, exports.svgElementFactory)('feOffset');
exports.fePointLight = (0, exports.svgElementFactory)('fePointLight');
exports.feSpecularLighting = (0, exports.svgElementFactory)('feSpecularLighting');
exports.feSpotLight = (0, exports.svgElementFactory)('feSpotLight');
exports.feTile = (0, exports.svgElementFactory)('feTile');
exports.feTurbulence = (0, exports.svgElementFactory)('feTurbulence');
exports.filter = (0, exports.svgElementFactory)('filter');
exports.foreignObject = (0, exports.svgElementFactory)('foreignObject');
exports.g = (0, exports.svgElementFactory)('g');
exports.image = (0, exports.svgElementFactory)('image');
exports.line = (0, exports.svgElementFactory)('line');
exports.linearGradient = (0, exports.svgElementFactory)('linearGradient');
exports.marker = (0, exports.svgElementFactory)('marker');
exports.mask = (0, exports.svgElementFactory)('mask');
exports.metadata = (0, exports.svgElementFactory)('metadata');
exports.path = (0, exports.svgElementFactory)('path');
exports.pattern = (0, exports.svgElementFactory)('pattern');
exports.polygon = (0, exports.svgElementFactory)('polygon');
exports.polyline = (0, exports.svgElementFactory)('polyline');
exports.radialGradient = (0, exports.svgElementFactory)('radialGradient');
exports.rect = (0, exports.svgElementFactory)('rect');
exports.$script = (0, exports.svgElementFactory)('script');
exports.stop = (0, exports.svgElementFactory)('stop');
exports.$style = (0, exports.svgElementFactory)('style');
exports.svg = (0, exports.svgElementFactory)('svg');
exports.$switch = (0, exports.svgElementFactory)('switch');
exports.symbol = (0, exports.svgElementFactory)('symbol');
exports.$text = (0, exports.svgElementFactory)('text');
exports.textPath = (0, exports.svgElementFactory)('textPath');
exports.$title = (0, exports.svgElementFactory)('title');
exports.tspan = (0, exports.svgElementFactory)('tspan');
exports.use = (0, exports.svgElementFactory)('use');
exports.view = (0, exports.svgElementFactory)('view');
const createLinearGradient = (stops, x1, y1, x2, y2, gradientUnits = 'userSpaceOnUse') => {
    const el = (0, exports.linearGradient)(...stops.map(createStop));
    (0, util_1.attr)(el, { gradientUnits, x1, y1, x2, y2 });
    return el;
};
exports.createLinearGradient = createLinearGradient;
const createStop = ([offset, color]) => (0, exports.stop)({ offset, style: `stop-color:${color}` });
//# sourceMappingURL=s.js.map