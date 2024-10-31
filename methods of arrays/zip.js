/**
 Задача "Zip". Напишите функцию zip(arr1, arr2), которая принимает два массива и возвращает новый массив, состоящий из
 пар элементов из arr1 и arr2, где элементы с одинаковыми индексами объединены в пары. Если длины массивов не
 совпадают, функция должна вернуть массив, длина которого равна длине более короткого из двух массивов. Например,
 zip([1, 2, 3], ['a', 'b', 'c']) должна вернуть [[1, 'a'], [2, 'b'], [3, 'c']].
 * */
function zip(arr1, arr2) {
   
    let arrResult = [];
    let lengthArrResult;

    if (arr1.length < arr2.length) {
        lengthArrResult = arr1.length;
    } else {
        lengthArrResult = arr2.length;
    }
    
    for (let i = 0; i < lengthArrResult; i++){
        arrResult[i] = [arr1[i], arr2[i]];
    }
    
    return arrResult;
}

console.log(zip([1, 2, 3, 4, 5, 6], ['a', 'b', 'c', 'd']));
