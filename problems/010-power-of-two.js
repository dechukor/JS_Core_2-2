/**
 * Напишите функцию getPower(n) возвращающую целочисленное значение степени >= 0,
 * в которую нужно возвести двойку, чтобы получить n
 *
 * Пример:
 *
 * getPower(2) === 1            # 2^1 = 2
 * getPower(3) === undefined
 * getPower(256) === 8          # 2^8 = 256
 *
 * @param {number} n
 * @returns {number|undefined}
 */
function getPower(n) {

    let power = 0;

    while (n != 1) {

        if (n % 2 != 0) {
            return;
        }

        if (n === 0) {
            return 1;
        }
        
        n /= 2;
        power += 1;
    }
    
    return power;
}

module.exports = getPower;
