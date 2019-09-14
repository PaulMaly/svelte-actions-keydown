(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.actionsKeydown = {}));
}(this, function (exports) { 'use strict';

    function keydown(code, options) {
    	typeof code === 'string' && (code = [code]);
        return function(node, callback) {
            function keydown(e) {
                if (code.includes(e.code)) callback(e);
            }
            node.addEventListener('keydown', keydown, options);
            return {
                destroy() {
                    node.removeEventListener('keydown', keydown, options);
                }
            };
        }
    }

    const enter = keydown('Enter');
    const tab = keydown('Tab');
    const del = keydown(['Backspace', 'Delete']);
    const esc = keydown('Escape');
    const space = keydown('Space');
    const up = keydown('ArrowUp');
    const down = keydown('ArrowDown');
    const left = keydown('ArrowLeft');
    const right = keydown('ArrowRight');
    const ctrl = keydown(['ControlLeft', 'ControlRight']);
    const alt = keydown(['AltLeft', 'AltRight']);
    const shift = keydown(['ShiftLeft', 'ShiftRight']);
    const meta = keydown(['MetaLeft', 'MetaRight']);

    exports.alt = alt;
    exports.ctrl = ctrl;
    exports.default = keydown;
    exports.del = del;
    exports.down = down;
    exports.enter = enter;
    exports.esc = esc;
    exports.left = left;
    exports.meta = meta;
    exports.right = right;
    exports.shift = shift;
    exports.space = space;
    exports.tab = tab;
    exports.up = up;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
