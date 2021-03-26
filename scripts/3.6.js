"use strict"
/*
 3.6 Удалить из массива все столбцы которые не имеют ни одного нулевого
 элемента и сумма которых положительна - оформить в виде функции.
*/

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

function matSum(arrMatr, ex) {
    //let tableTextHTML = '<table>';
    let arrEx = createMatrix(arrMatr.length, arrMatr[0].length, ex, 'id2');

    for (let i = 0; i < arrMatr[0].length; i++) {
        let col = [], nullEllem = true;
        col[i] = 0; //tableTextHTML += '<tr>';

        for (let j = 0; j < arrMatr.length; j++) {
            col[i] += arrMatr[j][i].value * 1;
            if (arrMatr[j][i].value == 0) {
                nullEllem = false;
                break;
            }
        }
        if (col[i] > 0 && nullEllem) {
            for (let j = 0; j < arrMatr.length; j++) {
                //arrMatr[j][i].value = 'X';
               // tableTextHTML += '<td>X</td>';
                arrEx[j][i].disabled = true;
                arrEx[j][i].value = 'X';
            }
        } else {
            for (let j = 0; j < arrMatr.length; j++) {
                //arrMatr[j][i].value = 'X ';
                //tableTextHTML += '<td>' + arrMatr[j][i].value + '</td>';
                arrEx[j][i].disabled = true;
                arrEx[j][i].value = arrMatr[j][i].value;
            }
        }
        //tableTextHTML += '</tr>';
        nullEllem = true
    }
    //tableTextHTML += '</table>';
}
