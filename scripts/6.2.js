"use strict"
/*
6.2 Посчитать количество тегов “p” на странице
которые имеют класс “phrase” - вывести их содержимое
*/

//---------------------------------------------------------------------------------------------------------
function arrayElem(elements, classP) {
    let result = [];
    result.class = classP;
    for (let i of elements) {
        if (i.className == classP) {
            result.push(i.innerHTML);
        }
    }
    return result;
}

function textDisplay(array) {
    let result = '';
    if (array.length == 0) {
        return 'Параграфов&nbsp;с&nbsp;таким&nbsp;классом&nbsp;нет.';
    }
    result = '<div style="width: 400px; text-align: justify;">';
    for (let i of array) {
        result += i + '<br><br>';
    }
    result += '</div>';
    return 'Всего&nbsp;параграфов:&nbsp;' + array.length +
        '<br>с&nbsp;классом:&nbsp;' + array.class +
        '<br><br><br>Их&nbsp;содержимое:<br><br>' + result;
}

function display() {
    let result = document.getElementById('result'),
        textInput = document.getElementById('textClass').value,
        elements = document.querySelectorAll('p');

    result.innerHTML = textDisplay(arrayElem(elements, textInput));
}

//---------------------------------------------------------------------------------------------------------

setInterval(display, 1000);