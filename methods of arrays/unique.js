/**
 * Функция, которая принимает на вход массив строк и возвращает массив строк, содержащих только уникальные значения.
 * @param {string[]} arr - входной массив строк
 * @return {string[]} - массив строк, содержащий только уникальные значения
 */
function uniqueStrings(arr) {    
    
    let arrResult = [];

    for (let i = 0; i < arr.length; i++) {
        
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            arrResult.push(arr[i]);
        }

    }

    return arrResult;

}

console.log(uniqueStrings(['f', 'wert', '', 'f', 'a', 'a', 'ert', 'A', 'ze', 'f']));