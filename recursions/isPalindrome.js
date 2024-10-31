/**
 * Функция, которая принимает на вход строку и возвращает true, если она является палиндромом, и false в противном случае.
 * @param {string} str - входная строка
 * @return {boolean} - true, если строка является палиндромом, и false в противном случае
 */
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^А-Яа-яA-Za-z]/g, '');

    if (str.at(0).toLowerCase() != str.at(-1).toLowerCase()) {

        return false;

    }

    if (str.length < 2) {

        return true;

    }    

    return isPalindrome(str.slice(1, -1));    
}

// Примеры:
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
