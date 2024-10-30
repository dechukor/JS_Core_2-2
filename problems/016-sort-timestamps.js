/**
 * Напишите функцию sortTimestamps(list) сортирующую список временных моментов.
 *
 * Пример:
 *
 * sortTimestamps(['23:02:59', '02:07:00']) === ['02:07:00', '23:02:59']
 *
 * @param {string[]} list массив временных моментов представленных в виде строк в формате 'HH:MM:SS'
 * @returns {string[]} отсортированный по возрастанию массив временных моментов
 */
function getTimeToSecond (stringTime) {
    let arrayTime = stringTime.split(':');

    let hours = Number(arrayTime[0]);
    let minutes = Number(arrayTime[1]);
    let seconds = Number(arrayTime[2])

    let secondsTime = hours * 3600 + minutes * 60 + seconds;

    return secondsTime;
} 

function sortTimestamps(list) {    
    
    for (let i = 0; i < list.length; i++) {        

        list[i] = {
            timeStr: list[i],
            timeSec: getTimeToSecond(list[i])
        }       
    }

    list.sort(function(a, b) {
        
        return a.timeSec - b.timeSec;
    })

    for (let i = 0; i < list.length; i++) {  

        list[i] = list[i].timeStr;             
    }

    return list;
}

module.exports = sortTimestamps;
