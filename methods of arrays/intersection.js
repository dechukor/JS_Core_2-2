/**
 * Функция, которая принимает на вход два массива чисел и возвращает новый массив, содержащий только элементы, которые есть в обоих массивах.
 * @param {number[]} arr1 - первый входной массив чисел
 * @param {number[]} arr2 - второй входной массив чисел
 * @return {number[]} - массив, содержащий только элементы, которые есть в обоих массивах
 */
function intersect(arr1, arr2) {
    
    let arrResult = [];

    for (i = 0; i < arr1.length; i++){
        if (arr2.indexOf(arr1[i]) != -1) {
            arrResult.push(arr1[i]);
        }
    }
    
    return arrResult;

}

console.log(intersect([1, 2, 3, 4, 5, 6], [1, 6, 13, 4, 5, 5, 6]));

