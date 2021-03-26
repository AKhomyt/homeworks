"use strict"
//3.4 Написать функцию, которая умножает две матрицы
//---------------------------------------------------------------------------------------------------------
let xMatr1 = document.getElementById("x1"),
    yMatr1 = document.getElementById("y1"),
    xMatr2 = document.getElementById("x2"),
    yMatr2 = document.getElementById("y2"),
    matrix1 = document.getElementById("matrix1"),
    matrix2 = document.getElementById("matrix2"),
    fillMatr1 = document.getElementById('batt1_1'),
    clearMatr1 = document.getElementById('batt2_1'),
    fillMatr2 = document.getElementById('batt1_2'),
    clearMatr2 = document.getElementById('batt2_2'),
    exit = document.getElementById('ex'),
    submit = document.getElementById('submit'),
    arrMatrix_1, arrMatrix_2;

xMatr1.oninput = function () {
    arrMatrix_1 = createMatrix(this.value, yMatr1.value, matrix1, 'id1');
}
yMatr1.oninput = function () {
    arrMatrix_1 = createMatrix(xMatr1.value, this.value, matrix1, 'id1');
    xMatr2.value = this.value;
}
fillMatr1.onclick = function () {
    arrMatrix_1 = createMatrix(xMatr1.value, yMatr1.value, matrix1, 'id1', true);
}
clearMatr1.onclick = function () {
    createMatrix(xMatr1.value, yMatr1.value, matrix1, 'id1');
}
xMatr2.oninput = function () {
    arrMatrix_2 = createMatrix(this.value, yMatr2.value, matrix2, 'id2');
    yMatr1.value = this.value;
}
yMatr2.oninput = function () {
    arrMatrix_2 = createMatrix(xMatr2.value, this.value, matrix2, 'id2');
}
fillMatr2.onclick = function () {
    arrMatrix_2 = createMatrix(xMatr2.value, yMatr2.value, matrix2, 'id2', true);
}
clearMatr2.onclick = function () {
    createMatrix(xMatr2.value, yMatr2.value, matrix2, 'id2');
}
submit.onclick = function () {
    matrixMultiplication(arrMatrix_1, arrMatrix_2, exit);
}
//---------------------------------------------------------------------------------------------------------
//  function createMatrix в отдельном скрипте

function matrixMultiplication(arrM1, arrM2, ex) {
    //arrM1, arrM2 и arrMulti элементы матриц.
    arrM1 = arrM1 || [''], arrM2 = arrM2 || [''];
    let arrMulti = createMatrix(arrM1.length, arrM2[0].length, exit, 'id3');

    if (arrM1[0].length != arrM2.length) {
        ex.innerHTML = "Матрицы не могут быть перемножены т.к. количество строк первой матрицы должно совпадать с количеством столбцов второй матрицы."
        return;
    }
    let temp = 0, text = '';
    for (let i = 0; i < arrM1.length; i++) {
        for (let j = 0; j < arrM2[0].length; j++) {
            temp = 0;
            for (let e = 0; e < arrM1[0].length; e++) {
                temp += arrM1[i][e].value * 1 * arrM2[e][j].value * 1;
            }
            arrMulti[i][j].value = temp;
            temp++;
            text += 'i:' + i + ', j:' + j + ' / ';
        }
        text += '\n';
    }
    console.log(text + '\n i:' + arrMulti.length + ', j:' + arrMulti[0].length);
}