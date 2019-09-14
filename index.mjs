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

export default keydown;
export { alt, ctrl, del, down, enter, esc, left, meta, right, shift, space, tab, up };
