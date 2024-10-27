/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
    let arrayNumerals = String(number).split('');
    arrayNumerals = arrayNumerals.map(Number);

    let firstSum = arrayNumerals[0] + arrayNumerals[1] + arrayNumerals[2];
    let secondSum = arrayNumerals[3] + arrayNumerals[4] + arrayNumerals[5];
    
    return (firstSum === secondSum);        
}

module.exports = checkTicket;
