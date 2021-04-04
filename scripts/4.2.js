"use strict"
/*
  4.2 Использовать функцию из предыдущего задания чтобы получить массив из нужного количества значений.
  Найти процентное соотношение отрицательных, положительных и нулевых элементов массива.
*/
//---------------------------------------------------------------------------------------------------------
let valStat_1 = document.getElementById('val_1'),
    valStat_2 = document.getElementById('val_2'),
    sizeStat = document.getElementById('size'),
    exStat = document.getElementById('ex');

//---------------------------------------------------------------------------------------------------------
function percent(value, size) {
    let tempValue;
    tempValue = (value * 100) / size;
    tempValue = Math.round(tempValue * 1000) / 1000;
    return tempValue;
}

function arrayStatistics(array) {
    let tempArray = array,
        size = tempArray.length,
        negativeNumbers = 0,
        positiveNumbers = 0,
        zero = 0;

    if (array.length == 0) {
        return undefined;
    }
    for (let val of tempArray) {
        if (val < 0) {
            negativeNumbers++;
        } else if (val > 0) {
            positiveNumbers++;
        } else {
            zero++;
        }
    }
    return [percent(negativeNumbers, size), percent(positiveNumbers, size), percent(zero, size)];
}

function textHTML(arrayStat, array){
    if(typeof arrayStat === 'undefined') {
        return '';
    }
    return array + '<br><br>Отрицательных ' + arrayStat[0] + '%<br>' +
        'Положительных ' + arrayStat[1] + '%<br>Ноль ' + arrayStat[2] + '%';
}

valStat_1.oninput = function () {
    let array = creatRandomArray(valStat_1.value, valStat_2.value, sizeStat.value);
    exStat.innerHTML = textHTML(arrayStatistics(array), array);
}
valStat_2.oninput = function () {
    let array = creatRandomArray(valStat_1.value, valStat_2.value, sizeStat.value);
    exStat.innerHTML = textHTML(arrayStatistics(array), array);
}
sizeStat.oninput = function () {
    let array = creatRandomArray(valStat_1.value, valStat_2.value, sizeStat.value);
    exStat.innerHTML = textHTML(arrayStatistics(array), array);
}