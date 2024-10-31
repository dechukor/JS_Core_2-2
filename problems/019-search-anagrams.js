/**
 * Со словами-анаграммами мы познакомились в прошлой задаче.
 *
 * Напишите функцию searchAnagrams(value) возвращающую слова-анаграммы из предложения,
 * сохраняя их порядок и регистр букв
 *
 * Пример:
 *
 * searchAnagrams('Вижу апельсин значит живу. Спаниель') === 'Вижу апельсин живу Спаниель'
 *
 * @param {string} value
 * @returns {string}
 */

function sortLetterinWord(word){

    return word.toLowerCase().split('').sort().join('');

}

function searchAnagrams(value) {

    let reg = /[^А-Яа-я\s]/g;

    let onlyWords = value.replace(reg, '');
    let arrayWords = onlyWords.split(' ');
    let arrayWordsSort = [];

    arrayWords.forEach(function(item, ind, arr){
        
        arrayWordsSort[ind] = sortLetterinWord(item);

    })

    let result = arrayWordsSort.reduce(function(acc, item, ind, arr) {

        if (arr.indexOf(item) != arr.lastIndexOf(item)) {

            return acc + arrayWords[ind] + ' ';  
                      
        }

        return acc;

    }, '') 

    result = result.trimEnd();

    return result;
}

module.exports = searchAnagrams;
