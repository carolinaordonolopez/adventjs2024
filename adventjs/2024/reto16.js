/*
DIFICULTAD: 🟢
Los elfos están trabajando arduamente para limpiar los caminos llenos de nieve mágica ❄️. Esta nieve tiene una propiedad especial: si dos montículos de nieve idénticos y adyacentes se encuentran, desaparecen automáticamente.

Tu tarea es escribir una función que ayude a los elfos a simular este proceso. El camino se representa por una cadena de texto y cada montículo de nieve un carácter.

Tienes que eliminar todos los montículos de nieve adyacentes que sean iguales hasta que no queden más movimientos posibles.

El resultado debe ser el camino final después de haber eliminado todos los montículos duplicados:
*/

/**
 * SCORE: ⭐⭐⭐⭐⭐
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
    // Code here
    let i = 0;
    s = Array.from(s);
    while (i < s.length) {
        const currentElement = s[i];
        const nextElement = s[i + 1];
        if (currentElement === nextElement) {
            s.splice(i, 2);
            i = 0;
        } else {
            i++;
        }
    }
    return s.join('');
}

const result = removeSnow('zxxzoz'); // -> "oz"
console.log(result);
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

const result2 = removeSnow('abcdd'); // -> "abc"
console.log(result2);
// 1. Eliminamos "dd", quedando "abc"

const result3 = removeSnow('zzz'); // -> "z"
console.log(result3);
// 1. Eliminamos "zz", quedando "z"

const result4 = removeSnow('a'); // -> "a"
console.log(result4);
// No hay montículos repetidos
