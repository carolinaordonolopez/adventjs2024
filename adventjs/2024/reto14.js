/* DIFICULTAD: 🟢
Los renos necesitan moverse para ocupar los establos, pero no puede haber más de un reno por establo. Además, para que los renos estén cómodos, debemos minimizar la distancia total que recorren para acomodarse.

Tenemos dos parámetros:

reindeer: Un array de enteros que representan las posiciones de los renos.
stables: Un array de enteros que representan las posiciones de los establos.
Hay que mover cada reno, desde su posición actual, hasta un establo. Pero hay que tener en cuenta que sólo puede haber un reno por establo.

Tu tarea es calcular el mínimo número de movimientos necesarios para que todos los renos acaben en un establo.

Nota: Ten en cuenta que el array de establos siempre tendrá el mismo tamaño que el array de renos y que siempre los establos serán únicos.
 */

/**
 * SCORE: ⭐⭐⭐⭐⭐
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
function minMovesToStables(reindeer, stables) {
    // Code here
    reindeer.sort((a, b) => a - b);
    stables.sort((a, b) => a - b);

    let movements = 0;
    reindeer.forEach((reindeer, index) => {
        const max = Math.max(stables[index], reindeer);
        const min = Math.min(stables[index], reindeer);
        movements += max - min;
    });

    return movements;
}

const result = minMovesToStables([2, 6, 9], [3, 8, 5]); // -> 3
console.log(result);
// Explicación:
// Renos en posiciones: 2, 6, 9
// Establos en posiciones: 3, 8, 5
// 1er reno: se mueve de la posición 2 al establo en la posición 3 (1 movimiento).
// 2do reno: se mueve de la posición 6 al establo en la posición 5 (1 movimiento)
// 3er reno: se mueve de la posición 9 al establo en la posición 8 (1 movimiento).
// Total de movimientos: 1 + 1 + 1 = 3 movimientos

const result2 = minMovesToStables([1, 1, 3], [1, 8, 4]); // -> 8
console.log(result2);
// Explicación:
// Renos en posiciones: 1, 1, 3
// Establos en posiciones: 1, 8, 4
// 1er reno: no se mueve (0 movimientos)
// 2do reno: se mueve de la posición 1 al establo en la posición 4 (3 movimientos)
// 3er reno: se mueve de la posición 3 al establo en la posición 8 (5 movimientos)
// Total de movimientos: 0 + 3 + 5 = 8 movimientos
