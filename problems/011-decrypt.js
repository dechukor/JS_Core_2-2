/**
 * Самый простой способ зашифровать строку – сдвиг букв.
 * Под сдвигом понимается замена буквы на предыдущую в алфавите.
 * Если предыдущей буквы нет, она заменяется на последнюю букву алфавита (в этой задаче мы имеем дело с английским алфавитом).
 *
 * Вам прислали секретное сообщение, зашифрованное способом, описанным выше и состоящее из строчных английских букв.
 *
 * Напишите функцию decrypt(secret) которая расшифрует и вернет его.
 *
 * Пример:
 *
 * decrypt('bnqqdbs') === 'correct'
 * decrypt('zmc vd hfmnqd rozbdr') === 'and we ignore spaces'
 *
 * @param {string} secret
 * @returns {string}
 */
function decrypt(secret) {
    
    let arraySecret = secret.split('');

    arraySecret.forEach((item, index) => {

        if (item === 'z') {
            arraySecret[index] = 'a';
        } else if (item === ' '){
        }
        else {
            arraySecret[index] = String.fromCharCode(item.charCodeAt() + 1);
        }
        
    })

    arraySecret = arraySecret.join('');
    return arraySecret;
}

module.exports = decrypt;
