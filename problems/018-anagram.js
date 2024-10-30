/**
 * Слова-анаграммы — это слова, записанные одними и теми же буквами в разном порядке,
 * регистр букв при этом игнорируется.
 * Анаграммами, например, являются слова «Волос» и «СЛОВО».
 *
 * Напишите функцию anagram(x, y) проверяющую, являются ли x и y словами-анаграммами.
 *
 * Пример:
 *
 * anagram('Волос', 'Слово') === true
 * anagram('Живу', 'Вижу') === true
 *
 * @param {string} x
 * @param {string} y
 * @returns {boolean}
 */
function sortLetterinWord(word){

    return word.toLowerCase().split('').sort().join('');

}

function anagram(x, y) {

    if (x.length != y.length || x.length === 0 || y.length === 0) {

        return false;
        
    }

    return sortLetterinWord(x) === sortLetterinWord(y);

}

module.exports = anagram;
