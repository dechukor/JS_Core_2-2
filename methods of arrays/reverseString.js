/**
 * Функция, которая принимает на вход строку и возвращает ее обратный порядок.
 * @param {string} str - входная строка
 * @return {string} - строка, обращенная задом наперед
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('А роза упала на лапу Азора'))