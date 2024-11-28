/**
 * Функция, которая принимает на вход массив чисел и возвращает среднее значение всех элементов массива.
 * @param {number[]} arr - входной массив чисел
 * @return {number} - среднее значение всех элементов массива
 */
function average(arr) {
    
    let arrSumItem = arr.reduce(function(acc, item) {
        
        return acc + item;

    }, 0)

    return arrSumItem / arr.length;
    // return 1;
}

console.log(average([1, 2, 3, 2, 3, 1]));
