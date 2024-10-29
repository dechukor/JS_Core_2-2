/**
 * Пароль называется криптостойким,
 * если он включает в себя хотя бы одну строчную английскую букву,
 * хотя бы одну заглавную английскую букву и хотя бы одну цифру,
 * при этом его длина должна быть не менее 7 символов.
 *
 * Напишите функцию validatePassword(password) определяющую,
 * является ли переданный пароль криптостойким.
 *
 * Пример:
 *
 * validatePassword('abc4DEFG') === true
 * validatePassword('abcdefg') === false
 * validatePassword('abcdefG') === false
 * validatePassword('abcdef7') === false
 *
 * @param {string} password
 * @returns {boolean}
 */
function validatePassword(password) {

    let arrayPassword = password.split('');    

    if ( password.length < 7) { 
        return false;
    }

    let passHasNum = arrayPassword.some((item) => !isNaN(item));

    if ( passHasNum === false) { 
        return false;
    }

    let passHasLowCase = arrayPassword.some((item) => (item.toLowerCase() != item.toUpperCase()) && (item.toLowerCase() === item));

    if ( passHasLowCase === false) { 
        return false;
    }
    
    let passHasUpCase = arrayPassword.some((item) => (item.toLowerCase() != item.toUpperCase()) && (item.toUpperCase() === item));

    if (passHasUpCase === false) { 
        return false;
    }

    return true;    
}

module.exports = validatePassword;
