/*
DIFICULTAD: 🟢
Santa Claus 🎅 está revisando la lista de regalos que debe entregar esta Navidad. Sin embargo, algunos regalos faltan, otros están duplicados, y algunos tienen cantidades incorrectas. Necesita tu ayuda para resolver el problema.

Recibirás dos arrays:

received: Lista con los regalos que Santa tiene actualmente.
expected: Lista con los regalos que Santa debería tener.
Tu tarea es escribir una función que, dado received y expected, devuelva un objeto con dos propiedades:

missing: Un objeto donde las claves son los nombres de los regalos faltantes y los valores son las cantidades que faltan.
extra: Un objeto donde las claves son los nombres de los regalos extra o duplicados y los valores son las cantidades que sobran.
Ten en cuenta que:

Los regalos pueden repetirse en ambas listas.
Las listas de regalos están desordenadas.
Si no hay regalos que falten o sobren, las propiedades correspondientes (missing o extra) deben ser objetos vacíos.
*/

/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * SCORE: ⭐⭐⭐⭐⭐
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
    // Escribe tu código aquí
    const result = {
        missing: {},
        extra: {}
    };

    expected.forEach(expectedGift => {
        const receivedIndex = received.indexOf(expectedGift);
        if (receivedIndex > -1) {
            received.splice(receivedIndex, 1);
        } else {
            result.missing[expectedGift] ??= 0;
            result.missing[expectedGift]++;
        }
    });

    received.forEach(receivedGift => {
        result.extra[receivedGift] ??= 0;
        result.extra[receivedGift]++;
    });

    return result;
}

const result = fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball']);
console.log(result);
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

const result2 = fixGiftList(['book', 'train', 'kite', 'train'], ['train', 'book', 'kite', 'ball', 'kite']);
console.log(result2);
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

const result3 = fixGiftList(['bear', 'bear', 'car'], ['bear', 'car', 'puzzle', 'bear', 'car', 'car']);
console.log(result3);
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

const result4 = fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear']);
console.log(result4);
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }
