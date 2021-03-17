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

butt[0].onclick = function () {
    elem[3].value = ecountLoan(elem[0].value, elem[1].value, elem[2].value)[0];
    elem[4].value = ecountLoan(elem[0].value, elem[1].value, elem[2].value)[1];
    elem[5].value = ecountLoan(elem[0].value, elem[1].value, elem[2].value)[2];
}


