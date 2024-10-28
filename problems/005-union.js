/**
 * Напишите функцию union(a, b) возвращающую упорядоченный по возрастанию массив
 * состоящий из чисел встречающихся в обоих наборах.
 *
 * Пример:
 *
 * union([1, 1, 3, 2, 5], [5, 3, 7, 7]) === [3, 5]
 * union([2, 4, 6, 8, 10, 12, 10, 8, 6, 4, 2], [3, 6, 9, 12, 15, 18]) === [6, 12]
 * union([1, 2, 3], [11, 0, -1]) === []
 *
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
function deleteRepeatItem (array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length;) {
            if (array[i] === array[j]) {
                array.splice(j,1);                
            } else {
                j++;
            }            
        }
    }
    return array; 
}

function union(a, b) {
    let c = [];
    
    a = deleteRepeatItem(a);
    b = deleteRepeatItem(b);

    for (i = 0; i < a.length; i++) {
        for (j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                c.unshift(a[i]);
            }
        }
    }

    return c.sort((a, b) => a - b);
}

module.exports = union;
