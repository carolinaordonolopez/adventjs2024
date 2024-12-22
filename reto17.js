/*
DIFICULTAD: 🟡
 El Grinch ha estado haciendo de las suyas en el Polo Norte y ha sembrado bombas de carbón explosivo 💣 en la fábrica de juguetes de los duendes. Quiere que todos los juguetes queden inutilizados y por eso ha dejado una cuadrícula donde algunas celdas tienen carbón explosivo (true) y otras están vacías (false).

Los duendes necesitan tu ayuda para mapear las zonas peligrosas. Cada celda vacía debe mostrar un número que indique cuántas bombas de carbón explosivo hay en las posiciones adyacentes, incluidas las diagonales.

Nota: ¿Quieres una pista? Seguro que has jugado al juego de buscaminas antes… 😉
 */

/**
 * SCORE: ⭐⭐⭐⭐⭐
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
    // Code here
    const result = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            const currentCell = grid[i][j];

            const neighbours = [];
            neighbours.push(grid[i - 1]?.[j - 1]);
            neighbours.push(grid[i - 1]?.[j]);
            neighbours.push(grid[i - 1]?.[j + 1]);
            neighbours.push(grid[i]?.[j + 1]);
            neighbours.push(grid[i + 1]?.[j + 1]);
            neighbours.push(grid[i + 1]?.[j]);
            neighbours.push(grid[i + 1]?.[j - 1]);
            neighbours.push(grid[i]?.[j - 1]);

            if (currentCell !== undefined) {
                result[i] ??= [];
                result[i][j] = neighbours.filter(neighbour => neighbour).length;
            }
        }
    }
    return result;
}

const result = detectBombs([
    [true, false, false],
    [false, true, false],
    [false, false, false]
]);
console.log(result);
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

const result2 = detectBombs([
    [true, false],
    [false, false]
]);
console.log(result2);
// [
//   [0, 1],
//   [1, 1]
// ]

const result3 = detectBombs([
    [true /* true */],
    [false /* false */]
    // [true, true]
]);
console.log(result3);
// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]
