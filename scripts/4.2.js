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

function negativeNumbers(array) {
    let tempArray = array,
        size = tempArray.length,
        temp = 0;

    if (array.length == 0) {
        return '';
    }
    for (let val of tempArray) {
        if (val < 0) {
            temp++;
        }
    }
    return percent(temp, size);
}

function positiveNumbers(array) {
    let tempArray = array,
        size = tempArray.length,
        temp = 0;

    if (array.length == 0) {
        return '';
    }
    for (let val of tempArray) {
        if (val > 0) {
            temp++;
        }
    }
    return percent(temp, size);
}

function zero(array) {
    let tempArray = array,
        size = tempArray.length,
        temp = 0;

    if (array.length == 0) {
        return '';
    }
    for (let val of tempArray) {
        if (val == 0) {
            temp++;
            break;
        }
    }
    return percent(temp, size);
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