/**
 * Функция, которая принимает на вход объект и возвращает название свойства с наименьшим значением.
 * @param {object} obj - входной объект
 * @return {string} - название свойства с наименьшим значением 
 */

// [ [ 'a', 2 ], [ 'b', 5 ], [ 'c', 1 ] ]

function findMinProp(obj) {
    
    let arrayMin;

    arrayMin = Object.entries(obj).sort((a, b) => (a[1] - b[1]))[0];
       
    return (arrayMin[0])

}

// Примеры:
console.log(findMinProp({a: 2, b: 5, c: 1})); // 'c'
console.log(findMinProp({x: 10, y: -5, z: 0})); // 'y'
console.log(findMinProp({foo: 100, bar: 200, baz: 50})); // 'baz'
