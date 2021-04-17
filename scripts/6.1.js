"use strict"
/*
6.1 Посчитать количество ссылок на странице, вывести их содержимое.
*/

//---------------------------------------------------------------------------------------------------------
function arrayHTML_URL(elements) {
    let result = [];
    for (let i of elements) {
        result.push([i.innerHTML, i.href]);
    }
    return result;
}

function textDisplay(array) {
    let result = '';
    if (array.length == 0) {
        return 'Нет&nbsp;ни&nbsp;одной&nbsp;ссылки';
    }
    for (let i of array) {
        result += i[0] + ' (' + i[1] + ')<br><br>';
    }
    return 'Всего ссылок: ' + array.length +
        '<br><br><br>Их&nbsp;содержимое:<br><br>' + result;
}

function display() {
    let result = document.getElementById('result'),
        elements = document.querySelectorAll('.cont a');

    result.innerHTML = textDisplay(arrayHTML_URL(elements));
}

//---------------------------------------------------------------------------------------------------------

setInterval(display, 1000);