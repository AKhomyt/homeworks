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
function exitText(negativeNumbers, positiveNumbers, zero, size) {
    negativeNumbers = (negativeNumbers * 100) / size;
    negativeNumbers = Math.round(negativeNumbers * 1000) / 1000;

    positiveNumbers = (positiveNumbers * 100) / size;
    positiveNumbers = Math.round(positiveNumbers * 1000) / 1000;

    zero = (zero * 100) / size;
    zero = Math.round(zero * 1000) / 1000;

    return negativeNumbers + ' % Отрицательные числа;<br> ' + positiveNumbers + ' % Положительные числа;<br> Ноль занимает ' + zero + ' %';

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
    return tempArray + '<br><br><br><br><br>' + exitText(negativeNumbers, positiveNumbers, zero, size);
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