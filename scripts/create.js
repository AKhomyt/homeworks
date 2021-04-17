"use strict"

//createMatrix---------------------------------------------------------

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

//createMatrix---------------------------------------------------------
//createFormOfStudent--------------------------------------------------

function formOfStudents(student) {
    /*
    Создает и возвращает форму для
    редактированния массива студентов.
    student = {name: '', estimate: '', course: '', active: false}
    */
    let form = document.createElement('form'),
        tableNode = CcreateHTML.prototype.table(2, 2);
    form.appendChild(tableNode);

    student = student || {name: '', estimate: '', course: 1, active: false};

    tableNode.tr[0].td[0].innerHTML = '<input type="text" value="' + student.name + '" size="35" placeholder="Фамилия Имя Отчество" name="surnameName">'

    tableNode.tr[0].td[1].innerHTML = '<input type="text" value="' + student.estimate + '" size="10" placeholder="Оценка" name="score">'

    tableNode.tr[1].td[0].innerHTML = '<select placeholder="Курс" name="course">' +
        '<option>Курс 1</option>' +
        '<option>Курс 2</option>' +
        '<option>Курс 3</option>' +
        '<option>Курс 4</option>' +
        '</select>'

    form.elements.course[student.course - 1].selected = true;

    tableNode.tr[1].td[1].innerHTML = 'Активный: ' +
        '<input type="checkbox" name="active" checked>'

    form.elements.active.checked = student.active
    form.style.cssText = 'left: 35%; top: 40%; background: #c6c6ff; width: min-content; position: absolute;';
    form.innerHTML += '<input type="button" name="clearForm" value="Закрыть">';

    form.elements.clearForm.onclick = function () {
        form.remove();
    }

    return form;
}

//createFormOfStudent--------------------------------------------------