"use strict"
/*
 5.2 Написать функцию которая возвращает true/false в зависимости
 от того - все ли уникальные значения в массиве или есть не уникальные
*/

//---------------------------------------------------------------------------------------------------------
function checkForUniquenessOfElements(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] == array[j]) {
                return false;
            }
        }
    }
    return true;
}

//---------------------------------------------------------------------------------------------------------

let array = [1, 2, 4, 5, 9, 7];

console.log(checkForUniquenessOfElements(array));
