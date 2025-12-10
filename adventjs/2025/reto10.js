/*
 * ------------------------------------------------------------------
 * 🎄 ADVENT JS 2025 - RETO #10
 * 🏷️ Título: Profundidad de la magia navideña
 * 📊 Dificultad: 🟢 Fácil
 * 🌟 PUNTUACIÓN OBTENIDA: ⭐⭐⭐⭐⭐ (5/5)
 * ------------------------------------------------------------------
 */

/**
 * 🎄 Profundidad de Magia Navideña
 * En el Polo Norte, Santa Claus está revisando las cartas mágicas 📩✨ que recibe de los niños de todo el mundo.
 * Estas cartas usan un antiguo lenguaje navideño en el que los corchetes [ y ] representan la intensidad del deseo.
 *
 * Cuanto más profunda sea la anidación de los corchetes, más fuerte es el deseo.
 * Tu misión es averiguar la máxima profundidad en la que se anidan los [].
 *
 * Pero ¡cuidado! Algunas cartas pueden estar mal escritas.
 * Si los corchetes no están correctamente balanceados (si se cierra antes de abrir, sobran cierres o faltan cierres),
 * la carta es inválida y debes devolver -1.
 *
 * @param {string} s - The string to check
 * @returns {number} The maximum depth of the magic
 */
function maxDepth(s) {
    let currentDepth = 0;
    let maxDepth = 0;

    if (s.split('[').length != s.split(']').length) return -1;

    for (const letter of s) {
        if (letter === '[') {
            currentDepth++;
            if (currentDepth > maxDepth) maxDepth = currentDepth;
        } else {
            currentDepth--;
            if (currentDepth == -1) return -1;
        }
    }

    return maxDepth;
}

// ------------------
// 🧪 ZONA DE TESTEO
// ------------------

console.log(maxDepth('[]')); // -> 1
console.log(maxDepth('[[]]')); // -> 2
console.log(maxDepth('[][]')); // -> 1
console.log(maxDepth('[[][]]')); // -> 2
console.log(maxDepth('[[[]]]')); // -> 3
console.log(maxDepth('[][[]][]')); // -> 2

console.log(maxDepth('][')); // -> -1 (cierra antes de abrir)
console.log(maxDepth('[[[')); // -> -1 (faltan cierres)
console.log(maxDepth('[]]]')); // -> -1 (sobran cierres)
console.log(maxDepth('[][][')); // -> -1 (queda uno sin cerrar)
