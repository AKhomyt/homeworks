let elem = document.getElementsByTagName("input");

elem[0].oninput = function () {
    if (elem[0].value < 0) {
        elem[1].value = "Менше нуля";
    } else if (elem[0].value == 0) {
        elem[1].value = "Число ноль";
    } else if (elem[0].value > 0) {
        elem[1].value = "Больше нуля";
    } else elem[1].value = "Это не число";
}
