/*
1.2 Переменная хранит в себе значение, напишите скрипт которое
выводит информацию о том, что число является нулевым либо
положительным либо отрицательным.
*/

let elem = document.getElementsByTagName("input");

function negativePositiveOrZero(num){
    if(num == 0){
        return "Ноль";
    } else return (num<0) ? "Меньше нуля" : "Больше нуля"
}


elem[0].oninput = function () {
    elem[1].value = negativePositiveOrZero(this.value);
}
