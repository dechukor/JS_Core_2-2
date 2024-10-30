/**
 * В доме решили провести перепись всех жильцов и составили список,
 * в котором указали возраст и пол каждого жильца.
 *
 * Напишите функцию census(list) возвращающую номер в списке самого старшего жителя мужского пола.
 *
 * Пример:
 *
 * census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]) === 2
 * census([{ age: 40, gender: 'Female' }]) === undefined
 *
 * @param {{age: number, gender: string}[]} list
 * @returns {undefined|number}
 */
function census(list) {
   
    let oldestManIndex;

    let oldestMan = list.reduce(function(acc, item, ind) {
        if ((item.gender === 'Male') && (item.age > acc)) {
            
            oldestManIndex = ind + 1;
            return acc = item.age;

        } else {
            return acc;            
        }
      }, 0);

    return oldestManIndex;
}

module.exports = census;
