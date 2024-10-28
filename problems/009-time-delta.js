/**
 * Напишите функцию getTimeDelta(x, y) определяющую,
 * сколько секунд прошло между двумя моментами времени x и y.
 *
 * Время передается в формате 'HH:MM:SS'. Минимальное значение – '00:00:00', максимальное – '23:59:59'.
 *
 * По условию x всегда меньше y.
 *
 * Пример:
 *
 * getTimeDelta('00:00:00', '00:00:01') === 1
 * getTimeDelta('01:01:01', '02:02:02') === 3661
 * getTimeDelta('01:19:30', '01:20:20') === 50
 *
 * @param {string} x
 * @param {string} y
 * @returns {number} разница между x и y в секундах
 */
function getTimeToSecond (stringTime) {
    let arrayTime = stringTime.split(':');

    let hours = Number(arrayTime[0]);
    let minutes = Number(arrayTime[1]);
    let seconds = Number(arrayTime[2])

    let secondsTime = hours * 3600 + minutes * 60 + seconds;

    return secondsTime;
} 

function getTimeDelta(x, y) {

    return getTimeToSecond(y) - getTimeToSecond(x);
}

module.exports = getTimeDelta;
