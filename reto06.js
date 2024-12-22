/* DIFICULTAD: 🟡
Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *, está dentro de la caja.

La caja tiene un regalo (*) y cuenta como dentro de la caja si:

Está rodeada por # en los bordes de la caja.
El * no está en los bordes de la caja.
Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario.
*/

/**
 * SCORE: ⭐⭐⭐⭐⭐
 * @param {string[]} gifts
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
    box.shift();
    box.pop();

    return box.some(line => {
        const firstSide = line.indexOf('#');
        const lastSide = line.lastIndexOf('#');
        const insideGift = line.slice(firstSide + 1, lastSide);
        return insideGift.includes('*');
    });
}

// prettier-ignore
const result = inBox([
  "###",
  "#*#",
  "###"
]) // ➞ true
console.log(result);

// prettier-ignore
const result2 = inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) // ➞ true
console.log(result2);

// prettier-ignore
const result3 = inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
]) // ➞ false
console.log(result3);

// prettier-ignore
const result4 = inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) // ➞ false
console.log(result4);
