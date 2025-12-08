/*
 * ------------------------------------------------------------------
 * 🎄 ADVENT JS 2025 - RETO #07
 * 🏷️ Título: Montando el árbol
 * 📊 Dificultad: 🟢 Fácil
 * 🌟 PUNTUACIÓN OBTENIDA: ⭐⭐⭐⭐⭐ (5/5)
 * ------------------------------------------------------------------
 */

/**
 * ¡Es hora de decorar el árbol de Navidad 🎄! Escribe una función que reciba:
 *
 * height → la altura del árbol (número de filas).
 * ornament → el carácter del adorno (por ejemplo, "o" o "@").
 * frequency → cada cuántas posiciones de asterisco aparece el adorno.
 * El árbol se dibuja con asteriscos *, pero cada frequency posiciones, el asterisco se reemplaza por el adorno.
 *
 * El conteo de posiciones empieza en 1, desde la copa hasta la base, de izquierda a derecha. Si frequency es 2, los adornos aparecen en las posiciones 2, 4, 6, etc.
 *
 * El árbol debe estar centrado y tener un tronco # de una línea al final.
 *  @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
    let result = '';
    let remainingOrnamentCounter = frequency;

    for (let i = 1; i <= height; i++) {
        let row = '';
        const totalFill = i * 2 - 1;
        const initialSpaces = height - i + 1;

        for (let j = 0; j < totalFill; j++) {
            remainingOrnamentCounter--;
            if (remainingOrnamentCounter === 0) {
                row += ornament;
                remainingOrnamentCounter = frequency;
            } else {
                row += '*';
            }
        }

        result += row.padStart(initialSpaces + totalFill - 1, ' ');
        result += '\n';
    }

    result += '#'.padStart(height, ' ');

    return result;
}

// ------------------
// 🧪 ZONA DE TESTEO
// ------------------

const result1 = drawTree(5, 'o', 2);
console.log(result1);
//     *
//    o*o
//   *o*o*
//  o*o*o*o
// *o*o*o*o*
//     #

const result2 = drawTree(3, '@', 3);
console.log(result2);
//   *
//  *@*
// *@**@
//   #

const result3 = drawTree(4, '+', 1);
console.log(result3);
//    +
//   +++
//  +++++
// +++++++
//    #
