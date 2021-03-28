"use strict"

function multidimensionalArayGeration(nElemArray) {
    //Создается N мерный массив
    let exitArray = [];
    for (let i = 0; i < nElemArray; i++) {
        let tempArr = [];
        exitArray[i] = tempArr;
    }
    return exitArray;
}

function generatingMatrixTable(col, row, inputID) {
    //Генерация HTML таблицы
    let textTableHTML = ''
    for (let i = 0; i < col; i++) {
        textTableHTML += '<tr>'
        for (let j = 0; j < row; j++) {
            textTableHTML += '<td><input id = \'' + inputID + '_' + i + '_' + j + '\' style="font-size: 16px; width: 45px;"></td>';
        }
        textTableHTML += '</tr>';
    }
    textTableHTML = '<table style="margin: auto; font-size: 24px;">' + textTableHTML + '</table>';
    return textTableHTML;
}

function autocomplete(xMatrix, yMatrix, arrayMatrix, inputID, key) {
    if (key) {
        //let count = 0 * 1;
        let min = -99, max = 99;
        for (let i = 0; i < xMatrix; i++) {
            for (let j = 0; j < yMatrix; j++) {
                arrayMatrix[i][j] = document.getElementById('' + inputID + '_' + i + '_' + j);
                arrayMatrix[i][j].value = Math.round(Math.random() * (max - min) + min);
                //count++;
            }
        }
    } else {
        for (let i = 0; i < xMatrix; i++) {
            for (let j = 0; j < yMatrix; j++) {
                arrayMatrix[i][j] = document.getElementById('' + inputID + '_' + i + '_' + j);
                arrayMatrix[i][j].value = '';
            }
        }
    }
    return arrayMatrix;
}
//---------------------------------------------------------------------------------------------------------
function createMatrix(x, y, exObject, idName, complete) {
    /*
        Создание матрицы X на Y в виде таблицы и ее вставка в exObject,
        Создание новых элементов input с id в формате elem_X_Y и их упаковка в массив elem[X][Y]
        Автозаполнение матрицы autocomplete true/false
    */

    x = x || 0, y = y || 0, complete = complete || false;
    let arrElem = multidimensionalArayGeration(x);

    exObject.innerHTML = generatingMatrixTable(x, y, idName);

    return autocomplete(x, y, arrElem, idName, complete);
}
//---------------------------------------------------------------------------------------------------------
/*

let x = document.getElementById("x"),
    y = document.getElementById("y"),
    matrixId = document.getElementById("matrix"),
    fill = document.getElementById('batt1'),
    clear = document.getElementById('batt2'),
    elamentsOfMatrix;

x.oninput = function () {
    createMatrix(this.value, y.value, matrixId, 'idName');
}
y.oninput = function () {
    createMatrix(x.value, this.value, matrixId, 'idName');
}
fill.onclick = function () {
    createMatrix(x.value, y.value, matrixId,'idName', true);
}
clear.onclick = function () {
    createMatrix(x.value, y.value, matrixId,'idName');
}

elamentsOfMatrix = createMatrix(x.value, y.value, matrixId, 'idName',);
*/

//---------------------------------------------------------------------------------------------------------
