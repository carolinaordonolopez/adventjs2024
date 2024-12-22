/* DIFICULTAD: 🟢
Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

type indica si es una bota izquierda (I) o derecha (R).
size indica el tamaño de la bota.
Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!
*/

/**
 * SCORE: ⭐⭐⭐⭐⭐
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes
 */
function organizeShoes(shoes) {
    const result = [];

    const grouped = shoes.reduce((acc, shoe) => {
        acc[shoe.size] ??= {
            I: 0,
            R: 0
        };
        acc[shoe.size][shoe.type]++;
        return acc;
    }, {});

    for (const size in grouped) {
        const sides = grouped[size];
        const minCount = Math.min(sides.I, sides.R);
        for (let i = 0; i < minCount; i++) {
            result.push(+size);
        }
    }

    return result;
}

const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
];
const result = organizeShoes(shoes);
console.log(result);
// [38, 42];

const shoes2 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
];
const result2 = organizeShoes(shoes2);
console.log(result2);
// [38, 38]

const shoes3 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 }
];

const result3 = organizeShoes(shoes3);
console.log(result3);
// []
