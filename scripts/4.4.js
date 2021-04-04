"use strict"
/*
  4.4 Задано предложение - подсчитать количество вхождений каждого слова в предложении.
  Вывести список уникальных слов и напротив каждого слова - сколько раз встретилось.
*/
//---------------------------------------------------------------------------------------------------------
let text = document.getElementById('text'),
    ex = document.getElementById('ex');

//---------------------------------------------------------------------------------------------------------
function percent(value, size) {
    let tempValue = 0;
    tempValue = (value * 100) / size;
    tempValue = Math.round(tempValue * 10000) / 10000;
    return tempValue;
}

function exitArray(arrayWords, arrayStatistics, lengthText) {
    let arrayPercent = [];
    for (let i = 0; i < arrayWords.length; i++) {
        arrayPercent.push([arrayWords[i], percent(arrayStatistics[i], lengthText)]);
    }
    return arrayPercent;
}

function statisticsOfText(text) {
    let textArray = text.split(/\s+/),
        lengthText = textArray.length,
        current = [];

    for (let index = 0; index < textArray.length; index++) {
        current[index] = 1;
        for (let i = index + 1; i < textArray.length; i++) {
            if (textArray[textArray.length - 1] == '') {
                textArray.splice(textArray.length - 1, 1);
                lengthText--;
            }
            if (textArray[index] == textArray[i]) {
                textArray.splice(i, 1);
                --i;
                ++current[index];
                //console.log(textArray + '\n' + current + '\n\n');
            }
        }
    }
    return exitArray(textArray, current, lengthText);
}

function textHTML(arrStat) {
    let tempText = '';
    for (let i of arrStat) {
        tempText += i[1] + ' %  - ' + i[0] + '<br>';
    }
    return tempText;
}

text.oninput = function () {
    ex.innerHTML = textHTML(statisticsOfText(text.value));
}