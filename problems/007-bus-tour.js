/**
 * На экскурсионном маршруте автобусу высотой 512 см встречаются несколько мостов.
 *
 * Напишите функцию checkBusTour(bridges) вычисляющую номер моста под которым не сможет проехать автобус.
 *
 * Пример:
 *
 * checkBusTour([600, 512]) === 2
 * checkBusTour([600, 1024]) === undefined  # Автобус успешно проедет по маршруту
 *
 * @param {number[]} bridges высоты мостов встречающихся на маршруте
 * @returns {undefined|number}
 */
function checkBusTour(bridges) {

    const numSmallBrige = bridges.findIndex(item => item <= 512) + 1;

    if (numSmallBrige > 0){
        return numSmallBrige;
    }
}

module.exports = checkBusTour;
