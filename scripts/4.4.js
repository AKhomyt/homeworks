"use strict"
/*
  4.4 Задано предложение - подсчитать количество вхождений каждого слова в предложении.
  Вывести список уникальных слов и напротив каждого слова - сколько раз встретилось.
*/
//---------------------------------------------------------------------------------------------------------
let text = document.getElementById('text'),
    ex = document.getElementById('ex');

//---------------------------------------------------------------------------------------------------------

function resultArray(arrayWords, arrayStatistics) {
    let result = [];
    for (let i = 0; i < arrayWords.length; i++) {
        result.push([arrayWords[i], arrayStatistics[i]]);
    }
    return result;
}

function statisticsOfText(text) {
    let textArray = text.split(/\s+/),
        current = [];

    for (let index = 0; index < textArray.length; index++) {
        current[index] = 1;
        for (let i = index + 1; i < textArray.length; i++) {
            if (textArray[textArray.length - 1] == '') {
                textArray.splice(textArray.length - 1, 1);
            }
            if (textArray[index] == textArray[i]) {
                textArray.splice(i, 1);
                --i;
                ++current[index];
            }
        }
    }
    return resultArray(textArray, current);
}

function textHTML(arrStat) {
    let result = '';
    function checkingNumbers(numb) {
        if (numb == 2 || numb == 3 || numb == 4) {
            return true;
        }
        return false;
    }

    for (let i of arrStat) {
        let lastNumeral = Math.round(((i[1] / 10) % 1) * 10);
        if (checkingNumbers(lastNumeral) && i[1] < 12 || checkingNumbers(lastNumeral) && i[1] > 21) {
            result += i[0] + '<br>Встретилось ' + i[1] + ' раза<br><br>';
        } else if (i[1] > 1) {
            result += i[0] + '<br>Встретилось ' + i[1] + ' раз<br><br>';
        } else {
            result += i[0] + '<br>уникальное<br><br>'
        }
    }
    return result;
}

text.oninput = function () {
    ex.innerHTML = textHTML(statisticsOfText(text.value));
}