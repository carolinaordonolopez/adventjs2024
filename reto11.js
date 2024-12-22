/* DIFICULTAD: 🟢
El Grinch ha hackeado 🏴‍☠️ los sistemas del taller de Santa Claus y ha codificado los nombres de todos los archivos importantes. Ahora los elfos no pueden encontrar los archivos originales y necesitan tu ayuda para descifrar los nombres.

Cada archivo sigue este formato:

Comienza con un número (puede contener cualquier cantidad de dígitos).
Luego tiene un guion bajo _.
Continúa con un nombre de archivo y su extensión.
Finaliza con una extensión extra al final (que no necesitamos).
Ten en cuenta que el nombre de los archivos pueden contener letras (a-z, A-Z), números (0-9), otros guiones bajos (_) y guiones (-).

Tu tarea es implementar una función que reciba un string con el nombre de un archivo codificado y devuelva solo la parte importante: el nombre del archivo y su extensión.
 */

/**
 * SCORE: ⭐⭐⭐⭐⭐
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
    // Code here
    const firstPart = filename.split('_')[0];
    const lastExtension = filename.split('.').at(-1);

    return filename.replace(`${firstPart}_`, '').replace(`.${lastExtension}`, '');
}

const result = decodeFilename('2023122512345678_sleighDesign.png.grinchwa');
console.log(result);
// ➞ "sleighDesign.png"

const result2 = decodeFilename('42_chimney_dimensions.pdf.hack2023');
console.log(result2);
// ➞ "chimney_dimensions.pdf"

const result3 = decodeFilename('987654321_elf-roster.csv.tempfile');
console.log(result3);
// ➞ "elf-roster.csv"
