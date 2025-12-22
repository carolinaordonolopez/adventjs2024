/*
 * ------------------------------------------------------------------
 * 🎄 ADVENT JS 2025 - RETO #09
 * 🏷️ Título: El reno robot aspirador
 * 📊 Dificultad: 🔴 Difícil
 * 🌟 PUNTUACIÓN OBTENIDA: ⭐⭐⭐⭐ (4/5)
 * ------------------------------------------------------------------
 */

/**
 * Los elfos han construido un reno 🦌 robot aspirador (@) para limpiar un poco el taller de cara a las navidades.
 *
 * El reno se mueve sobre un tablero para recoger cosas del suelo (*) y debe evitar obstáculos (#).
 *
 * Recibirás dos parámetros:
 *
 * board: un string que representa el tablero.
 * moves: un string con los movimientos: 'L' (izquierda), 'R' (derecha), 'U' (arriba), 'D' (abajo).
 * Reglas del movimiento:
 *
 * Si el reno recoge algo del suelo (*) durante los movimientos → devuelve 'success'.
 * Si el reno se sale del tablero o choca contra un obstáculo (#) → devuelve 'crash'.
 * Si el reno no recoge nada ni se estrella → devuelve 'fail'.
 * Ten en cuenta que si el reno recoge algo del suelo, ya es 'success',
 * indepentientemente de si en movimientos posteriores se chocase con un obstáculo o saliese del tabler.
 *
 * Importante: Ten en cuenta que en el board la primera y última línea están en blanco y deben descartarse.
 *
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */
function moveReno(board, moves) {
    const operations = {
        D: [1, 0],
        U: [-1, 0],
        R: [0, 1],
        L: [0, -1]
    };

    const results = {
        '*': 'success',
        '#': 'crash',
        '.': 'fail'
    };

    const boardArr = board.split('\n').slice(1, -1);

    const reindeerRowPosition = boardArr.findIndex((line) => line.includes('@'));
    const reindeerColumnPosition = boardArr[reindeerRowPosition].indexOf('@');
    let reindeerPosition = [reindeerRowPosition, reindeerColumnPosition];

    const operateVectors = (vec1, vec2) => {
        return vec1.map((v, i) => {
            return v + vec2[i];
        });
    };

    for (const move of moves) {
        reindeerPosition = operateVectors(reindeerPosition, operations[move]);

        if (
            reindeerPosition.some((v) => v == -1) ||
            reindeerPosition[0] > boardArr.length ||
            boardArr[reindeerPosition[0]]?.length < reindeerPosition[1]
        )
            return 'crash';

        const isSuccess = boardArr[reindeerPosition[0]]?.[reindeerPosition[1]] == '*';

        if (isSuccess) return 'success';
    }

    return results[boardArr[reindeerPosition[0]]?.[reindeerPosition[1]]] ?? 'crash';
}

// ------------------
// 🧪 ZONA DE TESTEO
// ------------------

const board = `
.....
.*#.*
.@...
.....
`;

console.log(moveReno(board, 'D'));
// ➞ 'fail' -> se mueve pero no recoge nada

console.log(moveReno(board, 'U'));
// ➞ 'success' -> recoge algo (*) justo encima

console.log(moveReno(board, 'RU'));
// ➞ 'crash' -> choca contra un obstáculo (#)

console.log(moveReno(board, 'RRRUU'));
// ➞ 'success' -> recoge algo (*)

console.log(moveReno(board, 'DD'));
// ➞ 'crash' -> se choca con la parte de abajo del tablero

console.log(moveReno(board, 'UUU'));
// ➞ 'success' -> recoge algo del suelo (*) y luego se choca por arriba

console.log(moveReno(board, 'RR'));
// ➞ 'fail' -> se mueve pero no recoge nada
