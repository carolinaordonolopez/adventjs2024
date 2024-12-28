/*
DIFICULTAD: 🟡
¡Ya hemos repartido todos los regalos! De vuelta al taller, ya comienzan los preparativos para el año que viene.

Un elfo genio está creando un lenguaje de programación mágico 🪄, que ayudará a simplificar la entrega de regalos a los niños en 2025.

Los programas siempre empiezan con el valor 0 y el lenguaje es una cadena de texto donde cada caracter representa una instrucción:

> Se mueve a la siguiente instrucción
+ Incrementa en 1 el valor actual
- Decrementa en 1 el valor actual
[ y ]: Bucle. Si el valor actual es 0, salta a la instrucción después de ]. Si no es 0, vuelve a la instrucción después de [
{y }: Condicional. Si el valor actual es 0, salta a la instrucción después de }. Si no es 0, sigue a la instrucción después de {
Tienes que devolver el valor del programa tras ejecutar todas las instrucciones.

Nota: Un condicional puede tener un bucle dentro y también un bucle puede tener un condicional. Pero nunca se anidan dos bucles o dos condicionales.
*/

/**
 * SCORE: ⭐⭐⭐⭐⭐
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
    // Code here
    let result = 0;
    const performInstruction = {
        '>': (i) => i + 1,
        '+': (i) => {
            result++;
            return i + 1;
        },
        '-': (i) => {
            result--;
            return i + 1;
        },
        '[': (i) => {
            if (result == 0) {
                const closedIdx = code.slice(i).lastIndexOf(']');
                return i + closedIdx + 1;
            }
            return i + 1;
        },
        ']': (i) => {
            const openIdx = code.slice(0, i).lastIndexOf('[');
            return openIdx;
        },
        '{': (i) => {
            if (result == 0) {
                const closedIdx = code.slice(i).lastIndexOf('}');
                return i + closedIdx + 1;
            }
            return i + 1;
        },
        '}': (i) => {
            return i + 1;
        }
    };

    let i = 0;
    while (i < code.length) {
        const char = code[i];
        i = performInstruction[char](i);
    }

    return result;
}

const result = execute('+++'); // 3
console.log(result);

const result2 = execute('+--'); // -1
console.log(result2);

const result3 = execute('>+++[-]'); // 0
console.log(result3);

const result4 = execute('>>>+{++}'); // 3
console.log(result4);

const result5 = execute('+{[-]+}+'); // 2
console.log(result5);

const result6 = execute('{+}{+}{+}'); // 0
console.log(result6);

const result7 = execute('------[+]++'); // 2
console.log(result7);

const result8 = execute('-[++{-}]+{++++}'); // 5
console.log(result8);
