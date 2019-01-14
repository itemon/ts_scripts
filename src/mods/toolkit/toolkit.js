"use strict";
/// <reference path="toolkit.d.ts"/>
//
exports.__esModule = true;
exports.serialVersionUID = 1;
function getVersion() {
    return '1.0.0';
}
exports.getVersion = getVersion;
var N = /** @class */ (function () {
    function N() {
    }
    N.prototype.did = function () {
        console.log('did it');
    };
    return N;
}());
exports.N = N;
