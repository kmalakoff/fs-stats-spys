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
function createSpy() {
    function spy() {
        spy.callCount++;
    }
    spy.callCount = 0;
    return spy;
}
function statsSpys() {
    function spys(stats) {
        if (stats.isSymbolicLink()) spys.link(stats);
        else if (stats.isDirectory()) spys.dir(stats);
        else if (stats.isFile()) spys.file(stats);
        spys.callCount++;
    }
    spys.dir = createSpy();
    spys.file = createSpy();
    spys.link = createSpy();
    spys.callCount = 0;
    return spys;
}
/* CJS INTEROP */ if (exports.__esModule && exports.default) { try { Object.defineProperty(exports.default, '__esModule', { value: true }); for (var key in exports) { exports.default[key] = exports[key]; } } catch (_) {}; module.exports = exports.default; }