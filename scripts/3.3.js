"use strict"
//3.3 Написать функцию, которая транспонирует матрицу
//---------------------------------------------------------------------------------------------------------

let xMatr = document.getElementById("x"),
    yMatr = document.getElementById("y"),
    matrix = document.getElementById("matrix"),
    fillMatr = document.getElementById('batt1'),
    clearMatr = document.getElementById('batt2'),
    transpon = document.getElementById('batt3'),
    arrMatrix;

xMatr.oninput = function () {
    arrMatrix = createMatrix(this.value, yMatr.value, matrix, 'id1');
}
yMatr.oninput = function () {
    arrMatrix = createMatrix(xMatr.value, this.value, matrix, 'id1');
}
fillMatr.onclick = function () {
    arrMatrix = createMatrix(xMatr.value, yMatr.value, matrix,'id1', true);
}
clearMatr.onclick = function () {
    createMatrix(xMatr.value, yMatr.value, matrix, 'id1');
}
transpon.onclick = function () {
    transponation();
}
//---------------------------------------------------------------------------------------------------------
//  function createMatrix в отдельном скрипте

let ex = document.getElementById('ex');

function transponation() {
    let arrTemp = createMatrix(yMatr.value, xMatr.value, ex, 'id2', true);
    for (let i = 0; i < xMatr.value; i++) {
        for (let j = 0; j < yMatr.value; j++) {
            arrTemp[j][i].value = arrMatrix[i][j].value;
        }
    }
}