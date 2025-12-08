/*
 * ------------------------------------------------------------------
 * 🎄 ADVENT JS 2025 - RETO #08
 * 🏷️ Título: Enuentra el juguete único
 * 📊 Dificultad: 🟢 Fácil
 * 🌟 PUNTUACIÓN OBTENIDA: ⭐⭐⭐⭐⭐ (5/5)
 * ------------------------------------------------------------------
 */

/**
 * Santa 🎅 quiere saber cuál es la primera letra no repetida en el nombre de un juguete 🎁.
 *
 * Escribe una función que reciba un string y devuelva la primera letra que no se repite,
 * ignorando mayúsculas y minúsculas al contar, pero devolviendo la letra tal como aparece en el string.
 *
 * Si no hay ninguna, devuelve una cadena vacía ("").
 *
 * @param {string} toy - The toy to find the first unique one letter
 * @returns {string} The first unique letter in the toy
 */
function findUniqueToy(toy) {
    const toyLower = toy.toLowerCase();

    for (let i = 0; i < toy.length; i++) {
        const letter = toyLower[i];
        const firstIndex = toyLower.indexOf(letter);
        const lastIndex = toyLower.lastIndexOf(letter);
        if (firstIndex === lastIndex) {
            return toy[i];
        }
    }

    return '';
}

// ------------------
// 🧪 ZONA DE TESTEO
// ------------------

console.log(findUniqueToy('Gift')); // 'G'
// ℹ️ La G es la primera letra que no se repite
// y la devolvemos tal y como aparece

console.log(findUniqueToy('sS')); // ''
// ℹ️ Las letras se repiten, ya que no diferencia mayúsculas

console.log(findUniqueToy('reindeeR')); // 'i'
// ℹ️ La r se repite (aunque sea en mayúscula)
// y la e también, así que la primera es la 'i'

// Más casos:
console.log(findUniqueToy('AaBbCc')); // ''
console.log(findUniqueToy('abcDEF')); // 'a'
console.log(findUniqueToy('aAaAaAF')); // 'F'
console.log(findUniqueToy('sTreSS')); // 'T'
console.log(findUniqueToy('z')); // 'z'
