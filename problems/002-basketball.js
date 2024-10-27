/**
 * Известны результаты каждой из 4х четвертей баскетбольной встречи.
 * Нужно определить победителя матча. Побеждает команда,
 * набравшая больше очков в течение всего матча.
 *
 * Напишите функцию getWinner(points) возвращающую номер победившей команды,
 * либо undefined в случае ничьей.
 *
 * Пример:

 * getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
 * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
 * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
 *
 * @param {string[]} points
 * @returns {(number|undefined)}
 */

function getWinner(points) {
    let pointsFirstTeam = 0;
    let pointsSecondTeam = 0;

    for (let quarterPoints of points) {
        pointsFirstTeam += Number(quarterPoints.slice(0, quarterPoints.indexOf('-')));
        pointsSecondTeam += Number(quarterPoints.slice(quarterPoints.indexOf('-') + 1));        
    }

    if (pointsFirstTeam > pointsSecondTeam) {
        return 1;
    }

    if (pointsFirstTeam < pointsSecondTeam) {
        return 2;
    }
        
}

module.exports = getWinner;
