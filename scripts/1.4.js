let elem = document.getElementsByTagName("input");
let butt = document.getElementsByTagName("button");
butt[0].onclick = function () {

    elem[3].value = elem[1].value*elem[0].value*elem[2].value/100;
    elem[4].value = elem[1].value*elem[0].value*12/100;
    elem[5].value = elem[1].value*elem[0].value*elem[2].value/100 + elem[1].value*1;
}


