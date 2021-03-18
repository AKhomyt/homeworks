/*
1.4 Переменная хранит процент кредита, вторая переменная хранит
объем тела кредита, третья переменная хранит длительность
кредитного договора в годах.
    Написать скрипт который вычислит:
      Сколько процентов заплатит клиент за все время
      Сколько процентов заплатит клиент за один календарный год
      Какое общее количество денежных средств клиента банка выплатит за все года
*/

let elem = document.getElementsByTagName("input");
let butt = document.getElementsByTagName("button");

function ecountLoan(percent, size, duration){
    /*
    return arr[переплата, за год, В сумме]
    */
    let arr = [];
    arr[0] = (size*percent*duration)/100;
    arr[1] = (size*percent*12)/100;
    arr[2] = (size*percent*duration)/100 + size*1;
    return arr;
}
function percentsForAllTime(percent, size, duration){
    return (size*percent*duration)/100;
}
function percentsPerYear(percent, size){
    return (size*percent*12)/100;
}
function totalAmount(percent, size, duration){
    return (size*percent*duration)/100 + size*1;
}


butt[0].onclick = function () {
    elem[3].value = ecountLoan(elem[0].value, elem[1].value, elem[2].value)[0];
    elem[4].value = ecountLoan(elem[0].value, elem[1].value, elem[2].value)[1];
    elem[5].value = ecountLoan(elem[0].value, elem[1].value, elem[2].value)[2];
}
butt[0].onclick = function () {
    elem[3].value = percentsForAllTime(elem[0].value, elem[1].value, elem[2].value);
    elem[4].value = percentsPerYear(elem[0].value, elem[1].value);
    elem[5].value = totalAmount(elem[0].value, elem[1].value, elem[2].value);
}


