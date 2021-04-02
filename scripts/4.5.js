"use strict"
/*
  4.5 Написать рекурсивную функцию которая выводит абсолютно все элементы
  ассоциативного массива (объекта) - любого уровня вложенности.
*/

//---------------------------------------------------------------------------------------------------------
function fixText(text) {
    let textArray = text.split(','),
        fixText = '';
    for (let i in textArray) {
        if (textArray[i] == '') {
            textArray.splice(i, 1);
        } else {
            fixText += textArray[i] + ' ';
        }
    }
    return fixText;
}

function allContent(arrayOfObbjects) {
    let tempText = '';

    if (Array.isArray(arrayOfObbjects)) {
        {
            for (let val of arrayOfObbjects) {
                if (typeof val == 'object') {
                    tempText += allContent(val) + ',';
                } else {
                    tempText += val + ',';
                }
            }
        }
    } else {
        for (let val in arrayOfObbjects) {
            if (Array.isArray(arrayOfObbjects)) {
                tempText += allContent(val) + ',';
            } else {
                tempText += arrayOfObbjects[val] + ',';
            }
        }
    }
    return fixText(tempText);
}

//---------------------------------------------------------------------------------------------------------

let array = [
    {
        "as": 12,
        "zasx": ["zzz", "14zxc", [777, 7777, 77777]],
        "x1": 'hg'
    }, 1, {
        "a": "f",
        "b": "c"
    }, 9, [1, 5, 'vsdv', 'aaa']
]

console.log(allContent(array));
