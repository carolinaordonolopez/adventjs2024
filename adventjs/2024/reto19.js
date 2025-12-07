/*´
DIFICULTAD: 🔴
¡Se acerca el día para repartir regalos! Necesitamos apilar los regalos que transportaremos en el trineo 🛷 y para eso los vamos a meter en cajas 📦.

Los regalos se pueden meter en 4 cajas distintas, donde cada caja soporta 1, 2, 5, 10 de peso y se representan así:

    _
1: |_|
    _____
2: |_____|
    _____
5: |     |
   |_____|
     _________
10: |         |
    |_________|

// Representación en JavaScript:
const boxRepresentations = {
  1: [" _ ", "|_|"] ,
  2: [" ___ ", "|___|"],
  5: [" _____ ", "|     |", "|_____|"],
  10: [" _________ ", "|         |", "|_________|"]
}
Tu misión es que al recibir el peso de los regalos, uses las mínimas cajas posibles y que, además, las apiles de menos peso (arriba) a más peso (abajo). Siempre alineadas a la izquierda.

Además, ten en cuenta que al apilarlas, se reusa el borde inferior de la caja.

Nota: ¡Ten cuidado con los espacios en blanco! No añadas espacios en blanco a la derecha de una caja si no son necesarios.
*/

/**
 * SCORE: ⭐⭐⭐⭐⭐
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */
function distributeWeight(weight) {
    // Code here
    const boxes = {
        1: [' _ ', '|_|'],
        2: [' ___ ', '|___|'],
        5: [' _____ ', '|     |', '|_____|'],
        10: [' _________ ', '|         |', '|_________|']
    };

    // Get an Array of the necessary boxes, first the small ones
    const weights = [10, 5, 2, 1];
    let remaining = weight;
    const boxesResult = [];

    for (const value of weights) {
        while (remaining >= value) {
            boxesResult.unshift(value);
            remaining -= value;
        }
    }

    // Build the result string. Calculate the length of the upper box floor to keeping into account for the roof of the one put below it

    let result = '';
    let upperFloorLength = 0;

    for (let i = 0; i < boxesResult.length; i++) {
        const element = boxesResult[i];

        const boxRepresentationArr = boxes[element];

        if (i == 0) {
            result += boxRepresentationArr.join('\n');
        } else {
            const roof = boxRepresentationArr[0]?.slice(upperFloorLength + 2).trim();
            const restOfBox = boxRepresentationArr.slice(1);

            result += `${roof}\n${restOfBox.join('\n')}`;
        }
        upperFloorLength = boxRepresentationArr.at(-1)?.length - 2;
    }

    return result;
}

const result1 = distributeWeight(1);
console.log(result1);
// Devuelve:
//  _
// |_|

const result2 = distributeWeight(2);
console.log(result2);
// Devuelve:
//  ___
// |___|

const result3 = distributeWeight(3);
console.log(result3);
// Devuelve:
//  _
// |_|_
// |___|

const result4 = distributeWeight(4);
console.log(result4);
// Devuelve:
//  ___
// |___|
// |___|

const result5 = distributeWeight(5);
console.log(result5);
// Devuelve:
//  _____
// |     |
// |_____|

const result6 = distributeWeight(6);
console.log(result6);
// Devuelve:
//  _
// |_|___
// |     |
// |_____|
