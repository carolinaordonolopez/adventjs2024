/* DIFICULTAD: 🟡
Los elfos programadores están creando un pequeño ensamblador mágico para controlar las máquinas del taller de Santa Claus.

Para ayudarles, vamos a implementar un intérprete sencillo que soporte las siguientes instrucciones mágicas:

MOV x y: Copia el valor x (puede ser un número o el contenido de un registro) en el registro y
INC x: Incrementa en 1 el contenido del registro x
DEC x: Decrementa en 1 el contenido del registro x
JMP x y: Si el valor del registro x es 0 entonces salta a la instrucción en el índice y y sigue ejecutándose el programa desde ahí.
Comportamiento esperado:
Si se intenta acceder, incrementar o decrementar a un registro que no ha sido inicializado, se tomará el valor 0 por defecto.
El salto con JMP es absoluto y lleva al índice exacto indicado por y.
Al finalizar, el programa debe devolver el contenido del registro A. Si A no tenía un valor definido, retorna undefined.
 */

/**
 * SCORE: ⭐⭐⭐⭐⭐
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
    // Code here
    const registries = { A: undefined };

    const actions = {
        MOV: (firstParam, secondParam) => {
            registries[secondParam] = isNaN(+firstParam) ? registries[firstParam] : +firstParam;
        },
        INC: firstParam => {
            registries[firstParam] ??= 0;
            registries[firstParam]++;
        },
        DEC: firstParam => {
            registries[firstParam] ??= 0;
            registries[firstParam]--;
        },
        JMP: (firstParam, secondParam, instructions) => {
            if (registries[firstParam] == 0) {
                performInstructions(instructions.slice(secondParam));
            }
        }
    };

    function performInstructions(instructions) {
        instructions.forEach(instruction => {
            const [action, firstParam, secondParam] = instruction.split(' ');
            actions[action](firstParam, secondParam, instructions);
        });
    }

    performInstructions(instructions);

    return registries.A;
}

const instructions = [
    'MOV -1 C', // copia -1 al registro 'C',
    'INC C', // incrementa el valor del registro 'C'
    'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
    'MOV C A', // copia el registro 'C' al registro 'a',
    'INC A' // incrementa el valor del registro 'a'
];

const result = compile(instructions); // -> 2
console.log(result);

/**
 Ejecución paso a paso:
 0: MOV -1 C -> El registro C recibe el valor -1
 1: INC C    -> El registro C pasa a ser 0
 2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
 1: INC C    -> El registro C pasa a ser 1
 2: JMP C 1  -> C es 1, ignoramos la instrucción
 3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
 4: INC A    -> El registro A pasa a ser 2
 */

const result2 = compile(['INC C', 'DEC B', 'MOV C Y', 'INC Y']); // -> undefined
console.log(result2);

const result3 = compile(['INC A', 'INC A', 'DEC A', 'MOV A B']); // -> 1
console.log(result3);

const result4 = compile(['MOV 2 X', 'DEC X', 'DEC X', 'JMP X 1', 'MOV X A']); // -> -2
console.log(result4);

const result5 = compile(['MOV 3 C', 'DEC C', 'DEC C', 'DEC C', 'JMP C 3', 'MOV C A']); // -> -1
console.log(result5);

/**
 * SCORE: ⭐ (First approach)
 */
function compile1star(instructions) {
    // Code here
    const registries = [
        {
            name: 'A',
            value: undefined
        }
    ];

    function getTargetRegistry1star(name) {
        return registries.find(registry => registry.name === name) ?? registries[registries.push({ name, value: 0 }) - 1];
    }

    performInstructions1star(instructions);

    function performInstructions1star(instructions) {
        instructions.forEach(instruction => {
            console.log(instruction);

            const [action, firstParam, secondParam] = instruction.split(' ');
            let targetRegistry = null;

            switch (action) {
                case 'MOV':
                    targetRegistry = getTargetRegistry1star(secondParam);
                    targetRegistry.value = isNaN(+firstParam) ? registries.find(r => r.name == firstParam)?.value ?? 0 : +firstParam;
                    break;
                case 'INC':
                    targetRegistry = getTargetRegistry1star(firstParam);
                    targetRegistry.value ??= 0;
                    targetRegistry.value++;
                    break;
                case 'DEC':
                    targetRegistry = getTargetRegistry1star(firstParam);
                    targetRegistry.value ??= 0;
                    targetRegistry.value--;
                    break;
                case 'JMP':
                    targetRegistry = getTargetRegistry1star(firstParam);
                    if (targetRegistry.value == 0) {
                        console.log('Jumping to: ' + instructions.at(+secondParam));
                        performInstructions1star(instructions.slice(secondParam));
                    }
                    break;
            }
        });
    }

    return registries.find(r => (r.name = 'A')).value;
}

// SCORE: ⭐⭐ (second approach)
function compile2(instructions) {
    // Code here
    const registries = [{ name: 'A', value: undefined }];

    function getTargetRegistry2(name) {
        return registries.find(registry => registry.name === name) ?? registries[registries.push({ name, value: 0 }) - 1];
    }

    const actions = {
        MOV: (firstParam, secondParam) => {
            const targetRegistry = getTargetRegistry2(secondParam);
            targetRegistry.value = isNaN(+firstParam) ? registries.find(r => r.name == firstParam)?.value ?? 0 : +firstParam;
        },
        INC: firstParam => {
            const targetRegistry = getTargetRegistry2(firstParam);
            targetRegistry.value ??= 0;
            targetRegistry.value++;
        },
        DEC: firstParam => {
            const targetRegistry = getTargetRegistry2(firstParam);
            targetRegistry.value ??= 0;
            targetRegistry.value--;
        },
        JMP: (firstParam, secondParam, instructions) => {
            const targetRegistry = getTargetRegistry2(firstParam);
            if (targetRegistry.value == 0) {
                performInstructions2(instructions.slice(secondParam));
            }
        }
    };

    function performInstructions2(instructions) {
        instructions.forEach(instruction => {
            const [action, firstParam, secondParam] = instruction.split(' ');
            actions[action](firstParam, secondParam, instructions);
        });
    }

    performInstructions2(instructions);

    return registries.find(r => (r.name = 'A')).value;
}
