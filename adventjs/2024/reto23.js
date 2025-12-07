/*
DIFICULTAD: 🟢
Los elfos están trabajando en un sistema para verificar las listas de regalos de los niños 👧👦. Sin embargo, ¡algunas listas están incompletas y faltan números!

Tu tarea es escribir una función que, dado un array de números, encuentre todos los números que faltan entre 1 y n (donde n es el tamaño del array o el número más alto del array).

Eso sí, ten en cuenta que:

Los números pueden aparecer más de una vez y otros pueden faltar
El array siempre contiene números enteros positivos
Siempre se empieza a contar desde el 1
*/

/**
 * SCORE: ⭐⭐⭐⭐⭐
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
    // Code here
    const maxNum = Math.max(...nums);
    const numsSet = new Set(nums);
    const expectedSet = new Set();

    for (let i = 1; i <= maxNum; i++) {
        expectedSet.add(i);
    }

    return Array.from(expectedSet.difference(numsSet));
}

const result = findMissingNumbers([1, 2, 4, 6]);
console.log(result);
// [3, 5]

const result2 = findMissingNumbers([4, 8, 7, 2]);
console.log(result2);
// [1, 3, 5, 6]

const result3 = findMissingNumbers([3, 2, 1, 1]);
console.log(result3);
// []

const result4 = findMissingNumbers([5, 5, 5, 3, 3, 2, 1]);
console.log(result4);
// [4]

// First attempt: ⭐⭐⭐⭐
function findMissingNumbers1(nums) {
    // Code here
    const maxNum = Math.max(...nums);

    const result = [];

    for (let i = 1; i <= maxNum; i++) {
        const numExists = nums.includes(i);
        if (!numExists) {
            result.push(i);
        }
    }

    return result;
}

// Second attempt: ⭐⭐⭐⭐
function findMissingNumbers2(nums) {
    // Code here
    const maxNum = Math.max(...nums);

    const expected = Array.from({ length: maxNum }, (_v, k) => k + 1);
    const result = expected.filter(n => !nums.includes(n));
    return result;
}
