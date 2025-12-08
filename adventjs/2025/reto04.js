/*
 * ------------------------------------------------------------------
 * 🎄 ADVENT JS 2025 - RETO #04
 * 🏷️ Título: Descifra el pin de Santa
 * 📊 Dificultad: 🟡 Medio
 * 🌟 PUNTUACIÓN OBTENIDA: ⭐⭐⭐⭐⭐ (5/5)
 * ------------------------------------------------------------------
 */

/**
 * Los elfos han encontrado el código cifrado que protege la puerta del taller de Santa 🔐. El PIN tiene 4 dígitos,
 * y está escondido dentro de bloques como estos:
 *
 * [1++][2-][3+][<]
 * Escribe una función que descifre el PIN a partir del código.
 *
 * El código está formado por bloques entre corchetes [...] y cada bloque genera un dígito del PIN.
 *
 * Un bloque normal tiene la forma [nOP...], donde n es un número (0-9) y después puede haber una lista de operaciones (opcionales).
 *
 * Las operaciones se aplican en orden al número y son:
 *
 * + suma 1
 * - resta 1
 * El resultado siempre es un dígito (aritmética mod 10), por ejemplo 9 + 1 → 0 y 0 - 1 → 9.
 *
 * También existe el bloque especial [<], que repite el dígito del bloque anterior.
 *
 * Si al final hay menos de 4 dígitos, se debe devolver null.
 *
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin(code) {
    const blocks = code.replaceAll('[', '').split(']');
    blocks.pop();

    if (blocks.length < 4) return null;
    const result = [];

    for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        let number = block.at(0);

        if (number == '<') {
            result.push(result.at(i - 1));
            continue;
        }
        const operations = block.slice(1);
        for (const operation of operations) {
            operation == '+' ? number++ : number--;
            if (number > 9) number = 0;
            if (number < 0) number = 9;
        }

        result.push(number);
    }

    return result.join('');
}

// ------------------
// 🧪 ZONA DE TESTEO
// ------------------

const result1 = decodeSantaPin('[1++][2-][3+][<]');
console.log(result1);
// "3144"

const result2 = decodeSantaPin('[9+][0-][4][<]');
console.log(result2);
// "0944"

const result3 = decodeSantaPin('[1+][2-][1]');
console.log(result3);
// null (solo 2 dígitos)
