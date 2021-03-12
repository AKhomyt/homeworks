let elem = document.getElementsByTagName("input");

elem[0].oninput = function () {
    if (elem[0].value == 0) {
        elem[1].value = "НОЛЬ";
    } else if (elem[0].value == 1) {
        elem[1].value = "ОДИН";
    } else if (elem[0].value == 2) {
        elem[1].value = "ДВА";
    } else if (elem[0].value == 3) {
        elem[1].value = "ТРИ";
    } else if (elem[0].value == 4) {
        elem[1].value = "ЧЕТЫРЕ";
    } else if (elem[0].value == 5) {
        elem[1].value = "ПЯТЬ";
    } else if (elem[0].value == 6) {
        elem[1].value = "ШЕСТЬ";
    } else if (elem[0].value == 7) {
        elem[1].value = "СЕМЬ";
    } else if (elem[0].value == 8) {
        elem[1].value = "ВОСЕМЬ";
    } else if (elem[0].value == 9) {
        elem[1].value = "ДЕВЯТЬ";
    } else elem[1].value = "Это не цифра!";
}


elem[2].oninput = function () {
    let numbers = ["НОЛЬ", "ОДИН", "ДВА", "ТРИ", "ЧЕТЫРЕ", "ПЯТЬ", "ШЕСТЬ", "СЕМЬ", "ВОСЕМЬ", "ДЕВЯТЬ"];
    if (elem[2].value >= 0 && elem[2].value <= 9) {
        elem[3].value = numbers[elem[2].value];
    } else elem[3].value = "Это не цифра!";
}