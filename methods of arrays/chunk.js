/**
 Задача "Chunk". Напишите функцию chunk(arr, size), которая принимает массив и число size, и возвращает новый массив,
 состоящий из подмассивов длиной не более size. Например, chunk([1, 2, 3, 4, 5], 2) должна вернуть [[1, 2], [3, 4], [5]].
 * */
function chunk(arr, size) {
    
    arrResult = [];
    for (let i = 0; i < arr.length; i += size) {

        arrResult.push(arr.slice(i, i + size));

    }
    
    return arrResult;    
}

console.log(chunk([1, 2, 3, 4, 5], 2));