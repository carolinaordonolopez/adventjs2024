/*
DIFICULTAD: 🔴
Santa Claus tiene una agenda mágica 📇 donde guarda las direcciones de los niños para entregar los regalos. El problema: la información de la agenda está mezclada y malformateada. Las líneas contienen un número de teléfono mágico, el nombre de un niño y su dirección, pero todo está rodeado de caracteres extraños.

Santa necesita tu ayuda para encontrar información específica de la agenda. Escribe una función que, dado el contenido de la agenda y un número de teléfono, devuelva el nombre del niño y su dirección.

Ten en cuenta que en la agenda:

Los números de teléfono están formateados como +X-YYY-YYY-YYY (donde X es uno o dos dígitos, e Y es un dígito).
El nombre de cada niño está siempre entre < y >
La idea es que escribas una funcióna que, pasándole el teléfono completo o una parte, devuelva el nombre y dirección del niño. Si no encuentra nada o hay más de un resultado, debes devolver null.
*/

/**
 * SCORE: ⭐⭐⭐⭐⭐
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */
function findInAgenda(agenda, phone) {
    // Code here
    const agendaArr = agenda.split('\n');

    const filterResultsArr = agendaArr.filter((line) => line.includes(phone));
    const resultString = filterResultsArr.length == 1 ? filterResultsArr[0] : null;

    if (!resultString) {
        return null;
    }

    const name = resultString.slice(resultString.indexOf('<') + 1, resultString.indexOf('>'));

    const indexTelStart = resultString.indexOf('+');
    const indexTelEnd = resultString.slice(indexTelStart).indexOf(' ');
    const telephone = resultString.slice(
        indexTelStart,
        indexTelEnd > 0 ? indexTelStart + indexTelEnd : resultString.length
    );

    const address = resultString.replace(`<${name}>`, '').replace(telephone, '').trim();

    return { name, address };
}

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`;

// const result = findInAgenda(agenda, '34-600-123-456');
// console.log(result);
// { name: "Juan Perez", address: "Calle Gran Via 12" }

const result2 = findInAgenda(agenda, '600-987');
console.log(result2);
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

// const result3 = findInAgenda(agenda, '111');
// console.log(result3);
// null
// Explicación: No hay resultados

// const result4 = findInAgenda(agenda, '1');
// console.log(result4);
// null
// Explicación: Demasiados resultados

// First attempt. SCORE: ⭐⭐⭐⭐
function findInAgenda2(agenda, phone) {
    // Code here
    const agendaArr = agenda.split('\n');

    let resultString = agendaArr.filter((line) => line.includes(phone));

    if (resultString.length > 1) {
        return null;
    }

    resultString = resultString[0];

    if (!resultString) {
        return null;
    }

    const name = resultString.slice(resultString.indexOf('<') + 1, resultString.indexOf('>'));

    const indexTelStart = resultString.indexOf('+');
    const indexTelEnd = resultString.slice(indexTelStart).indexOf(' ');
    const telephone = resultString.slice(indexTelStart, indexTelEnd > 0 ? indexTelEnd : resultString.length);

    const address = resultString.replace(`<${name}>`, '').replace(`${telephone}`, '').trim();

    return { name, address };
}

// Second attempt. SCORE: ⭐⭐⭐⭐
function findInAgenda3(agenda, phone) {
    // Code here
    const agendaArr = agenda.split('\n');

    const contacts = [];

    agendaArr.forEach((item) => {
        const name = item.slice(item.indexOf('<') + 1, item.indexOf('>'));
        const indexTelStart = item.indexOf('+');
        const indexTelEnd = item.slice(indexTelStart).indexOf(' ');
        const telephone = item.slice(indexTelStart, indexTelEnd > 0 ? indexTelStart + indexTelEnd : item.length);
        const address = item.replace(`<${name}>`, '').replace(`${telephone}`, '').trim();

        contacts.push({
            name,
            telephone,
            address
        });
    });

    const coincidences = contacts.filter((c) => c.telephone.includes(phone));

    return coincidences.length == 1 ? { name: coincidences[0].name, address: coincidences[0].address } : null;
}
