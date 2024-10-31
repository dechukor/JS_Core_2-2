/**
 Задача "Shuffle". Напишите функцию shuffle(arr), которая принимает массив и перемешивает его элементы в случайном
 порядке. Функция должна изменять исходный массив, а не возвращать новый. Например, shuffle([1, 2, 3, 4, 5]) может
 вернуть [3, 1, 5, 4, 2].
 * */
function shuffle(arr) {
    
    quantityTransposition = 10;
    let i = 0;

    while (i < quantityTransposition) {
    
       let randomIndex1 =  Math.floor(Math.random() * arr.length);
       let randomIndex2 =  Math.floor(Math.random() * arr.length);

       let temp = arr[randomIndex1];
       arr[randomIndex1] = arr[randomIndex2];
       arr[randomIndex2] = temp;

       i++;
    }
    return arr;
}

console.log(shuffle([1, 2, 3, 4, 5]));
