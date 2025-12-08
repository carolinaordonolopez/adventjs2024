/*
 * ------------------------------------------------------------------
 * 🎄 ADVENT JS 2025 - RETO #05
 * 🏷️ Título: La cuenta atrás para el despegue
 * 📊 Dificultad: 🟢 Fácil
 * 🌟 PUNTUACIÓN OBTENIDA: ⭐⭐⭐⭐⭐ (5/5)
 * ------------------------------------------------------------------
 */

/**
 * Los elfos tienen un timestamp secreto: es la fecha y hora exacta en la que Papá Noel despega con el trineo 🛷 para repartir regalos por el mundo.
 * Pero en el Polo Norte usan un formato rarísimo para guardar la hora: YYYY*MM*DD@HH|mm|ss NP (ejemplo: 2025*12*25@00|00|00 NP).
 *
 * Tu misión es escribir una función que reciba:
 *
 * fromTime → fecha de referencia en formato elfo (YYYY*MM*DD@HH|mm|ss NP).
 * takeOffTime → la misma fecha de despegue, también en formato elfo.
 * La función debe devolver:
 *
 * Los segundos completos que faltan para el despegue.
 * Si ya estamos en el despegue exacto → 0.
 * Si el despegue ya ocurrió → un número negativo indicando cuántos segundos han pasado desde entonces.
 *
 * 🎯 Reglas
 * Convierte el formato elfo a un timestamp primero. El sufijo NP indica la hora oficial del Polo Norte (sin husos horarios ni DST),
 * así que puedes tratarlo como si fuera UTC.
 * Usa diferencias en segundos, no en milisegundos.
 * Redondea siempre hacia abajo (floor): solo segundos completos.
 *
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
function timeUntilTakeOff(fromTime, takeOffTime) {
    const parseDate = (stringDate) => {
        const year = stringDate.substring(0, 4);
        const month = stringDate.substring(5, 7);
        const day = stringDate.substring(8, 10);
        const hour = stringDate.substring(11, 13);
        const minutes = stringDate.substring(14, 16);
        const seconds = stringDate.substring(17, 19);

        return Date.UTC(year, month - 1, day, hour, minutes, seconds);
    };

    const fromMiliseconds = parseDate(fromTime);
    const takeOffMiliseconds = parseDate(takeOffTime);

    return Math.floor((takeOffMiliseconds - fromMiliseconds) / 1000);
}

// ------------------
// 🧪 ZONA DE TESTEO
// ------------------
const takeoff = '2025*12*25@00|00|00 NP';

// desde el 24 diciembre 2025, 23:59:30, 30 segundos antes del despegue
const result1 = timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff);
console.log(result1);
// 30

// justo en el momento exacto
const result2 = timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff);
console.log(result2);
// 0

// 12 segundos después del despegue
const result3 = timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff);
console.log(result3);
// -12
