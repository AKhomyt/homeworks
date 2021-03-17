let elem = document.getElementsByTagName("input");


function func(num){
    if(num == 0){
        return "Ноль";
    } else return (num<0) ? "Меньше нуля" : "Больше нуля"
}


elem[0].oninput = function () {
    elem[1].value = func(this.value);
}
