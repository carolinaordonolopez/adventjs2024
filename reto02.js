/* DIFICULTAD: 🟢
Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
*/

/**
 * SCORE: ⭐⭐⭐⭐⭐
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
    // Code here
    const lengthsArr = names.map(name => name.length);
    const maxLengthCount = Math.max(...lengthsArr);

    const horizontalLine = `${'**'.padEnd(maxLengthCount + 2, '*')}**`;
    let output = horizontalLine;
    names.forEach(name => {
        output += `\n* ${name.padEnd(maxLengthCount, ' ')} *`;
    });
    return `${output}\n${horizontalLine}`;
}

console.log(createFrame(['midu', 'madeval', 'educalvolpz']));

// Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

console.log(createFrame(['midu']));

// Resultado esperado:
// ********
// * midu *
// ********

console.log(createFrame(['a', 'bb', 'ccc']));

// Resultado esperado:
// *******
// * a   *
// * bb  *
// * ccc *
// *******

console.log(createFrame(['a', 'bb', 'ccc', 'dddd']));

/**
 * ⭐⭐⭐⭐ First approach (4/5 starts)
 */
function createFrameNo(names) {
    // Code here
    let maxLengthCount = 0;
    names.forEach(name => {
        maxLengthCount = name.length > maxLengthCount ? name.length : maxLengthCount;
    });

    const horizontalLine = `${'**'.padEnd(maxLengthCount + 2, '*')}**`;
    let output = horizontalLine;
    names.forEach(name => {
        output += `\n* ${name.padEnd(maxLengthCount, ' ')} *`;
    });
    return `${output}\n${horizontalLine}`;
}
