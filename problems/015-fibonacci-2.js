/**
 * С числами Фибоначчи мы уже познакомились в прошлой задаче.
 *
 * Напишите функцию isFibonacci(value) которая определяет, является ли value числом Фибоначчи.
 *
 * Пример:
 *
 * isFibonacci(1) === 1
 * isFibonacci(2) === 3
 * isFibonacci(55) === 10
 * isFibonacci(52) === undefined
 *
 * @param {number} value
 * @returns {undefined|number}
 */
function isFibonacci(value) {

    let fibNum = 0;    
    let ak1 = 0;
    let ak = 1;

    if (value === 0) {
        return 0;
    }

    if (value === 1) {
        return 1;
    }

    let i = 1;
    while (fibNum < value) {
        fibNum = ak1 + ak;
        ak1 = ak;
        ak = fibNum;
        i++;
    }

    if (fibNum === value) {
        return i;
    }
    
}

module.exports = isFibonacci;
