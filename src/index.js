export default function keydown(code, options) {
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

export const enter = keydown('Enter');
export const tab = keydown('Tab');
export const del = keydown(['Backspace', 'Delete']);
export const esc = keydown('Escape');
export const space = keydown('Space');
export const up = keydown('ArrowUp');
export const down = keydown('ArrowDown');
export const left = keydown('ArrowLeft');
export const right = keydown('ArrowRight');
export const ctrl = keydown(['ControlLeft', 'ControlRight']);
export const alt = keydown(['AltLeft', 'AltRight']);
export const shift = keydown(['ShiftLeft', 'ShiftRight']);
export const meta = keydown(['MetaLeft', 'MetaRight']);
