//2.2 Переменная содержит в себе число. Написать скрипт который посчитает факториал этого числа.


let ent = document.getElementById("ent");
let ex = document.getElementById("ex");



function factorialOfANumber(num) {
    let temp = 1;
   for (let i = 0;i < num; i++){
       temp *= i + 1;
       console.log(i + " " + temp);
   }
    return temp;
}

ent.onchange = function () {
    ex.value = factorialOfANumber(this.value);
}



