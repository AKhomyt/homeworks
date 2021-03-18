/*
1.3 Переменная хранит в себе единицу измерения одно из возможных
значений (Byte, KB, MB, GB), Вторая переменная хранит в себе целое число.В зависимости от
того какая единица измерения написать скрипт, который выводит
количество байт. Для вычисления принимает счет что в каждой последующей
единицы измерения хранится 1024 единиц более меньшего измерения.
*/


let elem = document.getElementById("inp");
let elem2 = document.getElementById("sel");
let val, previosInd;


function byteConverter(num, ind, Pind) {
    /*
        indices:
        0 - bit
        1 - byte
        2 - Kb
        3 - Mb
        4 - Gb
        5 - Tb
    */
    if (ind < Pind && Pind != 0 && ind != 0) {
        return num * Math.pow(1024, (Pind - ind));
    } else if (ind > Pind && Pind != 0 && ind != 0) {
        return num / Math.pow(1024, (ind - Pind));
    } else if (ind < Pind && Pind != 0 && ind == 0) {
        return num * 8 * Math.pow(1024, (Pind - ind - 1));
    } else if (ind > Pind && Pind == 0 && ind != 0) {
        return num / (8 * Math.pow(1024, (ind - Pind - 1)));
    }
}

elem.oninput = function () {
    val = elem.value;
    previosInd = elem2.options.selectedIndex;
}

elem2.onchange = function () {
    
    let selectInd = elem2.options.selectedIndex;

    elem.value = byteConverter(val, selectInd, previosInd);

    val = elem.value;
    previosInd = selectInd;
}