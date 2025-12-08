/*
 * ------------------------------------------------------------------
 * 🎄 ADVENT JS 2025 - RETO #
 * 🏷️ Título:
 * 📊 Dificultad: 🟢 Fácil
 * 🌟 PUNTUACIÓN OBTENIDA: ⭐⭐⭐⭐⭐ (5/5)
 * ------------------------------------------------------------------
 */

/**
 * En el taller de Santa, los elfos han encontrado una montaña de guantes mágicos totalmente desordenados.
 * Cada guante viene descrito por dos valores:
 *
 * hand: indica si es un guante izquierdo (L) o derecho (R)
 * color: el color del guante (string)
 * Tu tarea es ayudarles a emparejar guantes: Un par válido es un guante izquierdo y uno derecho del mismo color.
 *
 * Debes devolver una lista con los colores de todos los pares encontrados.
 * Ten en cuenta que puede haber varios pares del mismo color. El orden se determina por el que se pueda hacer primero el par.
 *
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
function matchGloves(gloves) {
    const pairs = [];
    const leftGloves = {};
    const rightGloves = {};

    for (const glove of gloves) {
        const { hand, color } = glove;
        if (hand === 'L') {
            if (rightGloves[color] && rightGloves[color] > 0) {
                pairs.push(color);
                rightGloves[color]--;
            } else {
                leftGloves[color] = (leftGloves[color] || 0) + 1;
            }
        } else {
            if (leftGloves[color] && leftGloves[color] > 0) {
                pairs.push(color);
                leftGloves[color]--;
            } else {
                rightGloves[color] = (rightGloves[color] || 0) + 1;
            }
        }
    }
    return pairs;
}

// ------------------
// 🧪 ZONA DE TESTEO
// ------------------

const gloves1 = [
    { hand: 'L', color: 'red' },
    { hand: 'R', color: 'red' },
    { hand: 'R', color: 'green' },
    { hand: 'L', color: 'blue' },
    { hand: 'L', color: 'green' }
];
const result1 = matchGloves(gloves1);
console.log(result1);
// ["red", "green"]

const gloves2 = [
    { hand: 'L', color: 'gold' },
    { hand: 'R', color: 'gold' },
    { hand: 'L', color: 'gold' },
    { hand: 'L', color: 'gold' },
    { hand: 'R', color: 'gold' }
];
const result2 = matchGloves(gloves2);
console.log(result2);
// ["gold", "gold"]

const gloves3 = [
    { hand: 'L', color: 'red' },
    { hand: 'R', color: 'green' },
    { hand: 'L', color: 'blue' }
];
const result3 = matchGloves(gloves3);
console.log(result3);
// [];

const gloves4 = [
    { hand: 'L', color: 'green' },
    { hand: 'L', color: 'red' },
    { hand: 'R', color: 'red' },
    { hand: 'R', color: 'green' }
];
const result4 = matchGloves(gloves4);
console.log(result4);
// ['red', 'green'];

// ------------------
// OTHER SOLUTIONS
// ------------------

// SCORE: ⭐⭐⭐
function matchGloves1(gloves) {
    const pairedGloves = [];

    for (const glove of gloves) {
        const otherPairIndex = gloves.findIndex((g) => g.color === glove.color && g.hand !== glove.hand);
        if (otherPairIndex > 0) {
            gloves.splice(otherPairIndex, 1);
            pairedGloves.push({ color: glove.color, atIndex: otherPairIndex });
        }
    }

    return pairedGloves.sort((a, b) => a.atIndex - b.atIndex).map((g) => g.color);
}
