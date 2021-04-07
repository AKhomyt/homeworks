"use strict"
/*
  5.1 Задан двумерный массив - объединить каждый внутренний массив с верхнем массивом - только по уникальным
   значениям. Например [1,2,4,[8,4,12,],[13,29,11],[0,5,3,11],5,6,7,[3,8,21],3],
   получаем в результате: [1,2,4,8,12,13,29,11,0,5,3,6,7,21].
*/

//---------------------------------------------------------------------------------------------------------

function topElements(array) {
    let result = [];

    for (let i of array) {
        if (!Array.isArray(i)) {
            result.push(i);
        }
    }
    return result;
}

function uniqueArrayElements(array) {
    let result = [];
    for (let i of array) {
        if (!Array.isArray(i)) {
            result.push(i);
        } else {
            let topElem = topElements(array),
                nestedElem = topElements(i);
            for (let j of nestedElem) {
                let keyElem = true;
                for (let k of topElem) {
                    if (j == k) {
                        keyElem = false;
                        break;
                    }
                }
                if (keyElem) {
                    result.push(j);
                }
            }
        }
    }
    return result;
}

//---------------------------------------------------------------------------------------------------------

let array = [1, 2, 4, [8, 4, 12], [13, 29, 11], [0, 5, 3, 11], 5, 6, 7, [3, 8, 21], 3]

console.log(uniqueArrayElements(array));
