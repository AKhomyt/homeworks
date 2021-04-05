"use strict"
/*
  4.1 Написать функцию которая генерирует массив случайных значений, таким образом
   что все элементы результирующего массива являются уникальными. Генерациями происходит
   в рамках чисел от N до M, где N,M - могут быть как положительныетак и отрицательными, и еще одни
   параметром количество значений которые нужно сгенерировать. Если количество генерируемых значений
   больше чем чисел в диапазоне - отдавать пустой массив.
*/
//---------------------------------------------------------------------------------------------------------
let val_1 = document.getElementById('val_1'),
    val_2 = document.getElementById('val_2'),
    size = document.getElementById('size'),
    ex = document.getElementById('ex');

//---------------------------------------------------------------------------------------------------------

function createArray(from, to) {
    let resultArray = [];
    for (let i = 0; i <= (to - from); i++) {
        resultArray[i] = Number(from) + i;
    }
    return resultArray;
}

function randomNumber(from, to) {
    return Math.floor(Math.random() * (to - from) + from);
}

function creatRandomArray(from, to, size) {
    let inputArray = createArray(from, to),
        resultArray = [];
    if (inputArray.length < size) {
        return resultArray;
    }
    for (let i = 0; inputArray.length > 0 && i < size; i++) {
        let randonIndex = randomNumber(0, inputArray.length);
        resultArray[i] = inputArray[randonIndex];
        inputArray.splice(randonIndex, 1);
    }
    return resultArray;
}

val_1.oninput = function () {
    ex.innerHTML = creatRandomArray(val_1.value, val_2.value, size.value);
}
val_2.oninput = function () {
    ex.innerHTML = creatRandomArray(val_1.value, val_2.value, size.value);
}
size.oninput = function () {
    ex.innerHTML = creatRandomArray(val_1.value, val_2.value, size.value);
}