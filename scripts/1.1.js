let elem = document.getElementsByTagName("input");


//способ первый
function convertOne(num) {
    if (num == 0) {
        return "НОЛЬ";
    } else if (num == 1) {
        return "ОДИН";
    } else if (num == 2) {
        return "ДВА";
    } else if (num == 3) {
        return "ТРИ";
    } else if (num == 4) {
        return "ЧЕТЫРЕ";
    } else if (num == 5) {
        return "ПЯТЬ";
    } else if (num == 6) {
        return "ШЕСТЬ";
    } else if (num == 7) {
        return "СЕМЬ";
    } else if (num == 8) {
        return "ВОСЕМЬ";
    } else if (num == 9) {
        return "ДЕВЯТЬ";
    } else return "Это не цифра!";
}
//способ второй
function convertTwo(num) {
    let numbers = ["НОЛЬ", "ОДИН", "ДВА", "ТРИ", "ЧЕТЫРЕ", "ПЯТЬ", "ШЕСТЬ", "СЕМЬ", "ВОСЕМЬ", "ДЕВЯТЬ"];
    if (num >= 0 && num <= 9) {
        return numbers[num];
    } else return "Это не цифра!";
}





elem[0].oninput = function(){
    elem[1].value = convertOne(this.value);
}


elem[2].oninput = function () {
    elem[3].value = convertTwo(this.value);
}