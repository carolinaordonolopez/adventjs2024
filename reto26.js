/*
DIFICULTAD: 🟢
¡Santa Claus ya ha repartido todos los regalos! Ahora está revisando los informes de productividad de los elfos. Pero hay un problema: la Product Owner, Mrs. Claus 🧑‍🎄✨, necesita entender rápidamente si los elfos cumplieron con los tiempos estimados. Están haciendo Agile Scream.

Para ayudar a Mrs. Claus, tu tarea es calcular el porcentaje completado de cada tarea y devolverlo redondeado al número entero más cercano. Esto le permitirá planificar mejor para la próxima Navidad y mantener a todos contentos.

🎁 Ahora Santa Claus y los elfos merecen un descanso. ¡Esperamos que hayan disfrutado el AdventJS y lo recomienden a sus amigos!
*/

/**
 * SCORE: ⭐⭐⭐⭐⭐
 * @param {string} timeWorked - Time worked in hh:mm:ss format.
 * @param {string} totalTime - Total estimated time in hh:mm:ss format.
 * @returns {string} - The completed percentage rounded to the nearest integer with a % sign.
 */
function getCompleted(timeWorked, totalTime) {
    // Code here
    const timeWorkedArr = timeWorked.split(':').map(Number);
    const secsWorked = timeWorkedArr[0] * 3600 + timeWorkedArr[1] * 60 + timeWorkedArr[2];
    const totalTimeArr = totalTime.split(':').map(Number);
    const secsTotal = totalTimeArr[0] * 3600 + totalTimeArr[1] * 60 + totalTimeArr[2];
    return Math.round((secsWorked / secsTotal) * 100) + '%';
}

const result = getCompleted('01:00:00', '03:00:00'); // 33%
console.log(result);

const result2 = getCompleted('02:00:00', '04:00:00'); // 50%
console.log(result2);

const result3 = getCompleted('01:00:00', '01:00:00'); // 100%
console.log(result3);

const result4 = getCompleted('00:10:00', '01:00:00'); // 17%
console.log(result4);

const result5 = getCompleted('01:10:10', '03:30:30'); // 33%
console.log(result5);

const result6 = getCompleted('03:30:30', '05:50:50'); // 60%
console.log(result6);
