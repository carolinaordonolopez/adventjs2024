/*
DIFICULTAD: 🟡
Santa Claus 🎅 está revisando una lista de juguetes únicos que podría incluir en su bolsa mágica de regalos. Quiere explorar todas las combinaciones posibles de juguetes. Quiere ver todas las combinaciones que realmente contengan al menos un juguete.

Tu tarea es escribir una función que, dado un array de juguetes, devuelva todas las combinaciones posibles.

Importante: Debes devolverlo en el orden que aparecen los juguetes y de combinaciones de 1 a n juguetes.
*/

/*
Nota: En el array de entrada siempre habrá al menos un juguete y nunca habrá juguetes duplicados.

Consejo: Hay muchas formas de solucionar este problema, pero el backtracking puede ser una buena opción. 😉
*/

/** ⭐⭐⭐⭐⭐
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
    // Code here
    const results = [];

    function backTrack(start, path) {
        if (path.length) {
            results.push([...path]);
        }
        for (let i = start; i < gifts.length; i++) {
            const element = gifts[i];
            path.push(element);
            backTrack(i + 1, path);
            path.pop();
        }
    }

    backTrack(0, []);

    return results.sort((a, b) => a.length - b.length);
}

const result = generateGiftSets(['car', 'doll', 'puzzle']);
console.log(result);
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

const result2 = generateGiftSets(['ball']);
console.log(result2);
// [
//   ['ball']
// ]

const result3 = generateGiftSets(['game', 'pc']);
console.log(result3);
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]
