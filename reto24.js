/*
DIFICULTAD: 🟡
En el Polo Norte, los elfos tienen dos árboles binarios mágicos que generan energía 🌲🌲 para mantener encendida la estrella navideña ⭐️. Sin embargo, para que funcionen correctamente, los árboles deben estar en perfecta sincronía como espejos 🪞.

Dos árboles binarios son espejos si:

Las raíces de ambos árboles tienen el mismo valor.
Cada nodo del primer árbol debe tener su correspondiente nodo en la posición opuesta en el segundo árbol.
Y el árbol se representa con tres propiedades value, left y right. Dentro de estas dos últimas va mostrando el resto de ramas (si es que tiene):

const tree = {
  value: '⭐️',
  left: {
    value: '🎅'
    // left: {...}
    // right: { ... }
  },
  right: {
    value: '🎁'
    // left: { ... }
    // right: { ...&nbsp;}
  }
}

Santa necesita tu ayuda para verificar si los árboles están sincronizados para que la estrella pueda seguir brillando. Debes devolver un array donde la primera posición indica si los árboles están sincronizados y la segunda posición devuelve el valor de la raíz del primer árbol.
*/

/**
 * SCORE: ⭐⭐⭐⭐⭐
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
    // Code here
    let isTreesSynchronized = true;

    function compareTrees(tree1, tree2) {
        if (tree1.value !== tree2.value) {
            isTreesSynchronized = false;
            return;
        }
        if (tree1.left?.value == tree2.right?.value && tree1.right?.value == tree2.left?.value) {
            if (tree1.left && tree2.right) {
                compareTrees(tree1.left, tree2.right);
            }
            if (tree1.right && tree2.left) {
                compareTrees(tree1.right, tree2.left);
            }
        } else {
            isTreesSynchronized = false;
        }
    }

    compareTrees(tree1, tree2);
    return [isTreesSynchronized, tree1.value];
}

const tree1 = {
    value: '🎄',
    left: { value: '⭐' },
    right: { value: '🎅' }
};

const tree2 = {
    value: '🎄',
    left: { value: '🎅' },
    right: { value: '⭐' }
};

const result = isTreesSynchronized(tree1, tree2); // [true, '🎄']
console.log(result);

/*
  tree1          tree2
   🎄              🎄
  / \             / \
⭐   🎅         🎅   ⭐
*/

const tree3 = {
    value: '🎄',
    left: { value: '🎅' },
    right: { value: '🎁' }
};

const result2 = isTreesSynchronized(tree1, tree3); // [false, '🎄']
console.log(result2);

const tree4 = {
    value: '🎄',
    left: { value: '⭐' },
    right: { value: '🎅' }
};

const result3 = isTreesSynchronized(tree1, tree4); // [false, '🎄']
console.log(result3);

const result4 = isTreesSynchronized({ value: '🎅' }, { value: '🧑‍🎄' }); // [false, '🎅']
console.log(result4);

const tree5 = {
    value: '🎄',
    left: {
        value: '⭐',
        left: { value: 'a' },
        right: { value: 'b' }
    },
    right: {
        value: '🎅',
        left: { value: 'c' },
        right: { value: 'd' }
    }
};

const tree6 = {
    value: '🎄',
    left: {
        value: '🎅',
        left: { value: 'd' },
        right: { value: 'c' }
    },
    right: {
        value: '⭐',
        left: { value: 'b' },
        right: { value: 'a' }
    }
};

const result5 = isTreesSynchronized(tree5, tree6);
console.log(result5);

/*
       🎄             🎄
      /  \           /  \
    ⭐    🎅      🎅    ⭐
    / \   / \      / \   / \
   a  b  c  d     d  c  b   a
*/
