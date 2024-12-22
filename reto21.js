/*
DIFICULTAD: 🟢
Santa Claus 🎅 está decorando un árbol de Navidad mágico 🪄, que este año tiene una estructura especial en forma de árbol binario. Cada nodo del árbol representa un regalo, y Santa quiere saber la altura del árbol para colocar la estrella mágica en la punta.

Tu tarea es escribir una función que calcule la altura de un árbol binario. La altura de un árbol binario se define como el número máximo de niveles desde la raíz hasta una hoja. Un árbol vacío tiene una altura de 0.
*/

/**
 * SCORE: ⭐⭐⭐⭐⭐
 * @param {{ value: string; left: any; right: any }} tree
 * @returns {number} - Height of the tree.
 */
function treeHeight(tree) {
    return tree ? treeHeight(tree.left) + 1 : 0;
}

// Definición del árbol
const tree = {
    value: '🎁',
    left: {
        value: '🎄',
        left: {
            value: '⭐',
            left: null,
            right: null
        },
        right: {
            value: '🎅',
            left: null,
            right: null
        }
    },
    right: {
        value: '❄️',
        left: null,
        right: {
            value: '🦌',
            left: null,
            right: null
        }
    }
};

// Representación gráfica del árbol:
//        🎁
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌

// Llamada a la función
const result = treeHeight(tree);
console.log(result);
// Devuelve: 3

const tree2 = null;
console.log(treeHeight(null));

// SCORE: ⭐
function treeHeight2(tree) {
    let height = 0;

    let hasChildren = tree => {
        height++;
        if (tree?.left) {
            hasChildren(tree.left);
        }
    };

    if (tree) {
        hasChildren(tree);
    }
    return height;
}

// ⭐⭐⭐
function treeHeight3(tree) {
    let height = 0;
    function hasChildren(tree) {
        if (tree) {
            height++;
        }
        if (tree?.left) {
            hasChildren(tree.left);
        }
    }
    hasChildren(tree);

    return height;
}

// ⭐⭐⭐⭐
function treeHeight4(tree) {
    let height = 0;
    function hasChildren(tree) {
        if (tree) {
            height++;
            hasChildren(tree.left);
        }
    }
    hasChildren(tree);

    return height;
}
