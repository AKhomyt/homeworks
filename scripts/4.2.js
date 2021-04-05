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

function negativeNumbers(array) {
    let workingArray = array,
        size = workingArray.length,
        val = 0;

    if (array.length == 0) {
        return '';
    }
    for (let i of workingArray) {
        if (i < 0) {
            val++;
        }
    }
    return CMath.prototype.percent(val, size);
}

function positiveNumbers(array) {
    let workingArray = array,
        size = workingArray.length,
        val = 0;

    if (array.length == 0) {
        return '';
    }
    for (let i of workingArray) {
        if (i > 0) {
            val++;
        }
    }
    return CMath.prototype.percent(val, size);
}

function zero(array) {
    let workingArray = array,
        size = workingArray.length,
        val = 0;

    if (array.length == 0) {
        return '';
    }
    for (let i of workingArray) {
        if (i == 0) {
            val++;
            break;
        }
    }
    return CMath.prototype.percent(val, size);
}

function textHTML(negativeNumbers, positiveNumbers, zero, array) {
    if (negativeNumbers == '' && positiveNumbers == '' && zero == '') {
        return '';
    }
    return array + '<br><br>Отрицательных ' + negativeNumbers + '%<br>' +
        'Положительных ' + positiveNumbers + '%<br>Ноль ' + zero + '%';
}

valStat_1.oninput = function () {
    let array = creatRandomArray(valStat_1.value, valStat_2.value, sizeStat.value);
    exStat.innerHTML = textHTML(negativeNumbers(array), positiveNumbers(array), zero(array), array);
}
valStat_2.oninput = function () {
    let array = creatRandomArray(valStat_1.value, valStat_2.value, sizeStat.value);
    exStat.innerHTML = textHTML(negativeNumbers(array), positiveNumbers(array), zero(array), array);
}
sizeStat.oninput = function () {
    let array = creatRandomArray(valStat_1.value, valStat_2.value, sizeStat.value);
    exStat.innerHTML = textHTML(negativeNumbers(array), positiveNumbers(array), zero(array), array);
}