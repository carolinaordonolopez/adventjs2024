/* DIFICULTAD: 🟢
Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños.

Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta en una tabla de texto.

La tabla dibujada debe representar los datos del objeto de la siguiente manera:

Tiene una cabecera con el nombre de la columna.
El nombre de la columna pone la primera letra en mayúscula.
Cada fila debe contener los valores de los objetos en el orden correspondiente.
Cada valor debe estar alineado a la izquierda.
Los campos dejan siempre un espacio a la izquierda.
Los campos dejan a la derecha el espacio necesario para alinear la caja.
*/

/**
 * @param {Array<Object>} data
 * @returns {string}
 */
function drawTable(data) {
    const columnNames = Object.keys(data[0]); /* .map(name => name.charAt(0).toUpperCase() + name.slice(1)) */
    let columnsMaxLengthInOrder = [];

    let horizontalLine = '';
    let headerLine = '';
    let valuesLines = '';
    columnNames.forEach(columnName => {
        const maxLength = Math.max(columnName.length, ...data.map(item => item[columnName].toString().length));
        columnsMaxLengthInOrder.push(maxLength);
        columnName = columnName.charAt(0).toUpperCase() + columnName.slice(1);
        horizontalLine += '+' + '-'.padEnd(maxLength + 2, '-');
        headerLine += '| ' + columnName.padEnd(maxLength + 1, ' ');
    });

    data.forEach(dataItem => {
        const row = columnNames.map((columnName, i) => dataItem[columnName].toString().padEnd(columnsMaxLengthInOrder[i], ' ')).join(' | ');
        valuesLines += `| ${row} |\n`;
    });

    horizontalLine += '+\n';
    headerLine += '|\n';

    return horizontalLine + headerLine + horizontalLine + valuesLines + horizontalLine.trim();
}

const result = drawTable([
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'New York' }
]);
console.log(result);

// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

const result2 = drawTable([
    { gift: 'Doll', quantity: 10 },
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 }
]);
console.log(result2);

// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+

/** ⭐⭐⭐⭐
 * @param {Array<Object>} data
 * @returns {string}
 */
function drawTable1(data) {
    // Code here
    const columnNames = Object.keys(data[0]); /* .map(name => name.charAt(0).toUpperCase() + name.slice(1)) */
    let columns = [];
    columnNames.forEach((columnName, i) => {
        columns.push({
            header: columnName.charAt(0).toUpperCase() + columnName.slice(1),
            values: [],
            maxLength: columnName.length
        });
        // TODO: Se esta recorriendo 3 veces, deberia solo 1
        data.forEach(data => {
            columns[i].values.push(data[columnName].toString());
        });
    });

    let horizontalLine = '';
    let headerLine = '';
    let valueLine = '';
    let valuesLines = {};
    columns.forEach((column, i) => {
        column.maxLength = Math.max(column.maxLength, ...column.values.map(v => v.length));

        horizontalLine += '+' + '-'.padEnd(column.maxLength + 2, '-');
        headerLine += '| ' + column.header.padEnd(column.maxLength + 1, ' ');
        column.values.forEach((value, i) => {
            valuesLines[i] ??= [];
            valuesLines[i].push(value);
        });
    });
    Object.values(valuesLines).forEach((valLine, i) => {
        valLine.forEach((val, idx) => {
            valueLine += '| ' + val.padEnd(columns[idx].maxLength + 1, ' ');
        });
        valueLine += '|\n';
    });
    horizontalLine += '+\n';
    headerLine += '|\n';

    return horizontalLine + headerLine + horizontalLine + valueLine + horizontalLine.trim();
}

// ⭐⭐⭐⭐
function drawTable2(data) {
    const columnNames = Object.keys(data[0]); /* .map(name => name.charAt(0).toUpperCase() + name.slice(1)) */
    let rowsValues = [];
    let columnsMaxLengthInOrder = [];

    data.forEach((data, i) => {
        const values = Object.values(data).map(data => data.toString());
        rowsValues[i] = values;
    });

    let horizontalLine = '';
    let headerLine = '';
    let valuesLines = '';
    columnNames.forEach(columnName => {
        const maxLength = Math.max(columnName.length, ...data.map(item => item[columnName].toString().length));
        columnsMaxLengthInOrder.push(maxLength);
        columnName = columnName.charAt(0).toUpperCase() + columnName.slice(1);
        horizontalLine += '+' + '-'.padEnd(maxLength + 2, '-');
        headerLine += '| ' + columnName.padEnd(maxLength + 1, ' ');
    });

    rowsValues.forEach(row => {
        row.forEach((item, i) => {
            valuesLines += '| ' + item.padEnd(columnsMaxLengthInOrder[i] + 1, ' ');
        });
        valuesLines += '|\n';
    });
    horizontalLine += '+\n';
    headerLine += '|\n';

    return horizontalLine + headerLine + horizontalLine + valuesLines + horizontalLine.trim();
}

/**
 * @param {Array<Object>} data
 * @returns {string}
 */
function drawTable3(data) {
    // Code here
    const columnNames = Object.keys(data[0]); /* .map(name => name.charAt(0).toUpperCase() + name.slice(1)) */
    let columnsMaxLengthInOrder = [];

    let horizontalLine = '';
    let headerLine = '';
    let valuesLines = '';
    columnNames.forEach(columnName => {
        const maxLength = Math.max(columnName.length, ...data.map(item => item[columnName].toString().length));
        columnsMaxLengthInOrder.push(maxLength);
        columnName = columnName.charAt(0).toUpperCase() + columnName.slice(1);
        horizontalLine += '+' + '-'.padEnd(maxLength + 2, '-');
        headerLine += '| ' + columnName.padEnd(maxLength + 1, ' ');
    });

    data.forEach(dataItem => {
        const row = columnNames.map((columnName, i) => dataItem[columnName].toString().padEnd(columnsMaxLengthInOrder[i], ' ')).join(' | ');
        valuesLines += `| ${row} |\n`;
    });
    horizontalLine += '+\n';
    headerLine += '|\n';

    return horizontalLine + headerLine + horizontalLine + valuesLines + horizontalLine.trim();
}
