"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHTMLOrSVGElement = exports.isSVGElement = exports.isElement = exports.isNode = void 0;
const consts_1 = require("./consts");
const isNode = (value) => value && typeof value['nodeType'] === 'number';
exports.isNode = isNode;
const isElement = (value) => value && value['nodeType'] === 1;
exports.isElement = isElement;
const isSVGElement = (value) => exports.isElement(value) && value.namespaceURI === consts_1.svgNs;
exports.isSVGElement = isSVGElement;
const isHTMLOrSVGElement = (value) => exports.isElement(value) && 'dataset' in value;
exports.isHTMLOrSVGElement = isHTMLOrSVGElement;
//# sourceMappingURL=predicates.js.map