"use strict"

function createMatrix(x, y, exObject, idName, autocomplete) {
    /*
        Создание матрицы X на Y в виде таблицы и ее вставка в exObject,
        Создание новых элементов input с id в формате elem_X_Y и их упаковка в массив elem[X][Y]
        Автозаполнение матрицы autocomplete true/false
    */
    x = x || 0, y = y || 0, autocomplete = autocomplete || false;
    let textTableHTML = '', arrElem = [];

    //Создается N мерный массив
    for (let i = 0; i < x; i++) {
        let tempArr = [];
        arrElem[i] = tempArr;
    }

    for (let i = 0; i < x; i++) {
        textTableHTML += '<tr>'
        for (let j = 0; j < y; j++) {
            textTableHTML += '<td><input id = \'' + idName + '_' + i + '_' + j + '\' style="font-size: 16px; width: 45px;"></td>';
        }
        textTableHTML += '</tr>';
    }
    textTableHTML = '<table style="margin: auto; font-size: 24px;">' + textTableHTML + '</table>';
    exObject.innerHTML = textTableHTML;

    if (autocomplete) {
        //let count = 0 * 1;
        let min = -99, max = 99;
        for (let i = 0; i < x; i++) {
            for (let j = 0; j < y; j++) {
                arrElem[i][j] = document.getElementById('' + idName + '_' + i + '_' + j);
                arrElem[i][j].value = Math.round(Math.random() * (max - min) + min);
                //count++;
            }
        }
    } else {
        for (let i = 0; i < x; i++) {
            for (let j = 0; j < y; j++) {
                arrElem[i][j] = document.getElementById('' + idName + '_' + i + '_' + j);
                arrElem[i][j].value = '';
            }
        }
    }
    return arrElem;
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
