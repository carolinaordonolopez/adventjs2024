/*
DIFICULTAD: 🟡
Los elfos están jugando con un tren 🚂 mágico que transporta regalos. Este tren se mueve en un tablero representado por un array de strings.

El tren está compuesto por una locomotora (@), seguida de sus vagones (o), y debe recoger frutas mágicas (*) que le sirve de combustible. El movimiento del tren sigue las siguientes reglas:

Recibirás dos parámetros board y mov.

board es un array de strings que representa el tablero:

@ es la locomotora del tren.
o son los vagones del tren.
* es una fruta mágica.
· son espacios vacíos.
mov es un string que indica el próximo movimiento del tren desde la cabeza del tren @:

'L': izquierda
'R': derecha
'U': arriba
'D': abajo.
Con esta información, debes devolver una cadena de texto:

'crash': Si el tren choca contra los bordes del tablero o contra sí mismo.
'eat': Si el tren recoge una fruta mágica (*).
'none': Si avanza sin chocar ni recoger ninguna fruta mágica.
 */

/**
 * SCORE: ⭐⭐⭐⭐⭐
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
    // Code here
    const locomotiveRowIndex = board.findIndex(row => row.includes('@'));
    const locomotiveCellIndex = board[locomotiveRowIndex]?.indexOf('@');

    const moveAction = {
        U: [-1, 0],
        D: [1, 0],
        R: [0, 1],
        L: [0, -1]
    };

    const boardTarget = moveAction[mov];

    const targetRow = board[locomotiveRowIndex + boardTarget[0]];
    const targetCell = targetRow?.[locomotiveCellIndex + boardTarget[1]];

    const result = {
        '·': 'none',
        '*': 'eat',
        o: 'crash',
        undefined: 'crash'
    };

    return result[targetCell];
}

// prettier-ignore
/* const board = [
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
] */
const board = ['·····', '*····', '@····', 'o····', 'o····'];

console.log(moveTrain(board, 'U'));
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'));
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'));
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'));
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha
