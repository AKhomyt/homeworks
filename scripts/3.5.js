"use strict"
//  3.5 Найти номер столбца двумерного массива сумма которого является максимальной (аналогично для строки)
//---------------------------------------------------------------------------------------------------------
let xMatr = document.getElementById("x"),
    yMatr = document.getElementById("y"),
    matrix = document.getElementById("matrix"),
    fillMatr = document.getElementById('batt1'),
    clearMatr1 = document.getElementById('batt2'),
    exit = document.getElementById('ex'),
    submit = document.getElementById('submit'),
    arrMatrix;

xMatr.oninput = function () {
    arrMatrix = createMatrix(this.value, yMatr.value, matrix, 'id1');
}
yMatr.oninput = function () {
    arrMatrix = createMatrix(xMatr.value, this.value, matrix, 'id1');
}
fillMatr.onclick = function () {
    arrMatrix = createMatrix(xMatr.value, yMatr.value, matrix, 'id1', true);
}
clearMatr1.onclick = function () {
    createMatrix(xMatr.value, yMatr.value, matrix, 'id1');
}
submit.onclick = function () {
    matSum(arrMatrix, exit);
}
//---------------------------------------------------------------------------------------------------------
//  function createMatrix в отдельном скрипте
function maxIndex(arr) {
    let temp = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (temp < arr[i]) {
            temp = arr[i];
        }
    }
    return arr.indexOf(temp) + 1;
}

function matSum(arrMatr, ex) {
    let row = [arrMatr.length], col = [];

    for (let i = 0; i < arrMatr.length; i++) {
        row[i] = 0;
        for (let j = 0; j < arrMatr[0].length; j++) {
            row[i] += arrMatr[i][j].value * 1;
        }
    }
    for (let i = 0; i < arrMatr[0].length; i++) {
        col[i] = 0;
        for (let j = 0; j < arrMatr.length; j++) {
            col[i] += arrMatr[j][i].value * 1;
        }
    }
    ex.innerHTML = 'Максимальная сумма элементов: ' + maxIndex(row) + ' Строка, ' + maxIndex(col) + ' Столбец';
}
