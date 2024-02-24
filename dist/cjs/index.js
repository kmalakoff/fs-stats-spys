"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return statsSpys;
    }
});
var _sinon = /*#__PURE__*/ _interop_require_default(require("sinon"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function statsSpys() {
    function spys(stats) {
        if (stats.isSymbolicLink()) spys.link(stats);
        else if (stats.isDirectory()) spys.dir(stats);
        else if (stats.isFile()) spys.file(stats);
        spys.callCount++;
    }
    spys.dir = _sinon.default.spy();
    spys.file = _sinon.default.spy();
    spys.link = _sinon.default.spy();
    spys.callCount = 0;
    return spys;
}
/* CJS INTEROP */ if (exports.__esModule && exports.default) { Object.defineProperty(exports.default, '__esModule', { value: true }); for (var key in exports) exports.default[key] = exports[key]; module.exports = exports.default; }