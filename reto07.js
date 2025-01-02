/*
DIFICULTAD: 🟡
¡El grinch 👹 ha pasado por el taller de Santa Claus! Y menudo desastre ha montado. Ha cambiado el orden de algunos paquetes, por lo que los envíos no se pueden realizar.

Por suerte, el elfo Pheralb ha detectado el patrón que ha seguido el grinch para desordenarlos. Nos ha escrito las reglas que debemos seguir para reordenar los paquetes. Las instrucciones que siguen son:

Recibirás un string que contiene letras y paréntesis.
Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos.
Si hay paréntesis anidados, resuelve primero los más internos.
Devuelve el string resultante con los paréntesis eliminados, pero con el contenido volteado correctamente.
Nos ha dejado algunos ejemplos:
 */

/**
 * SCORE: ⭐⭐⭐⭐⭐
 * @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
    // Code here
    const firstClosedParenthesis = packages.indexOf(')');
    const lastOpenParenthesis = packages.slice(0, firstClosedParenthesis).lastIndexOf('(');

    const inside = packages.slice(lastOpenParenthesis + 1, firstClosedParenthesis);

    const reversed = inside.split('').reverse().join('');
    const newString = packages.replace(`(${inside})`, reversed);

    return lastOpenParenthesis < 0 ? packages : fixPackages(newString);
}

const result = fixPackages('a(cb)de');
console.log(result);
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

const result2 = fixPackages('a(bc(def)g)h');
console.log(result2);
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

const result3 = fixPackages('abc(def(gh)i)jk');
console.log(result3);
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

const result4 = fixPackages('a(b(c))e');
console.log(result4);
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"

console.log(fixPackages('(ab))cd('));

// First attempt: ⭐⭐⭐⭐
function fixPackages2(packages) {
    // Code here
    const firstClosedParenthesis = packages.indexOf(')');
    const lastOpenParenthesis = packages.slice(0, firstClosedParenthesis).lastIndexOf('(');

    if (lastOpenParenthesis < 0) {
        return packages;
    }

    const inside = packages.slice(lastOpenParenthesis + 1, firstClosedParenthesis);

    const reversed = inside.split('').reverse().join('');
    const newString = packages.replace(`(${inside})`, reversed);

    return fixPackages(newString);
}
