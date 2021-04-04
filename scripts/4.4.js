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
function exitText(arrayWords, arrayStatistics, lengthText) {
    let tempText = '';
    for (let i in arrayWords) {
        if (arrayStatistics[i] != 1) {
            tempText += '<br><br>' + arrayWords[i] +
                '<br>(' + percent(arrayStatistics[i], lengthText) +
                '%, ' + arrayStatistics[i] + ' в тексте);<br><br>';
        } else {
            tempText += arrayWords[i] + ' ( УНИКАЛЬНОЕ );<br>';
        }
    }
    return tempText;
}

function textStatistics(text) {
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
    return exitText(textArray, current, lengthText);
}

text.oninput = function () {
    ex.innerHTML = textStatistics(text.value);
}