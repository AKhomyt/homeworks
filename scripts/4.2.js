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
    let tempValue = 0;
    tempValue = (value * 100) / size;
    tempValue = Math.round(tempValue * 1000) / 1000;
    return tempValue;
}

function exitText(negativeNumbers, positiveNumbers, zero, size) {
    return percent(negativeNumbers, size) + ' % Отрицательные числа;<br> ' +
        percent(positiveNumbers, size) + ' % Положительные числа;<br> Ноль занимает ' + percent(zero, size) + ' %';
}

function arrayStatistics(from, to, size) {
    let tempArray = creatRandomArray(from, to, size), negativeNumbers = 0, positiveNumbers = 0, zero = 0;
    if (from == '' || to == '' || size == '') {
        return '';
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
    return tempArray + '<br>' + exitText(negativeNumbers, positiveNumbers, zero, size);
}

valStat_1.oninput = function () {
    exStat.innerHTML = arrayStatistics(valStat_1.value, valStat_2.value, sizeStat.value);
}
valStat_2.oninput = function () {
    exStat.innerHTML = arrayStatistics(valStat_1.value, valStat_2.value, sizeStat.value);
}
sizeStat.oninput = function () {
    exStat.innerHTML = arrayStatistics(valStat_1.value, valStat_2.value, sizeStat.value);
}