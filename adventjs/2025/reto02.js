/*
 * ------------------------------------------------------------------
 * 🎄 ADVENT JS 2025 - RETO #02
 * 🏷️ Título: Fabrica los juguetes
 * 📊 Dificultad: 🟢 Fácil
 * 🌟 PUNTUACIÓN OBTENIDA: ⭐⭐⭐⭐⭐ (5/5)
 * ------------------------------------------------------------------
 */

/**
 * La fábrica de Santa ha empezado a recibir la lista de producción de juguetes.
 * Cada línea indica qué juguete hay que fabricar y cuántas unidades.
 *
 * Los elfos, como siempre, han metido la pata: han apuntado algunos juguetes con cantidades que no tienen sentido.
 *
 * Tienes una lista de objetos con esta forma:
 *
 * toy: el nombre del juguete (string)
 * quantity: cuántas unidades hay que fabricar (number)
 * Tu tarea es escribir una función que reciba esta lista y devuelva un array de strings con:
 *
 * Cada juguete repetido tantas veces como indique quantity
 * En el mismo orden en el que aparecen en la lista original
 * Ignorando los juguetes con cantidades no válidas (menores o iguales a 0, o que no sean número)
 *
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
function manufactureGifts(giftsToProduce) {
    const result = [];
    giftsToProduce.forEach((gift) => {
        for (let i = 0; i < gift.quantity; i++) {
            result.push(gift.toy);
        }
    });
    return result;
}

// ------------------
// 🧪 ZONA DE TESTEO
// ------------------

const production1 = [
    { toy: 'car', quantity: 3 },
    { toy: 'doll', quantity: 1 },
    { toy: 'ball', quantity: 2 }
];

const result1 = manufactureGifts(production1);
console.log(result1);
// ['car', 'car', 'car', 'doll', 'ball', 'ball']

const production2 = [
    { toy: 'train', quantity: 0 }, // no se fabrica
    { toy: 'bear', quantity: -2 }, // tampoco
    { toy: 'puzzle', quantity: 1 }
];

const result2 = manufactureGifts(production2);
console.log(result2);
// ['puzzle']

const production3 = [];
const result3 = manufactureGifts(production3);
console.log(result3);
// []
