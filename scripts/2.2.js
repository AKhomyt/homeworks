//2.2 Переменная содержит в себе число. Написать скрипт который посчитает факториал этого числа.

let ent = document.getElementById("ent");
let ex = document.getElementById("ex");

function factorialOfANumber(num) {
    let temp = 1;
    for (let i = 1; i < num; i++) {
        temp *= i;
    }
    return temp;
}

ent.oninput = function () {
    ex.value = factorialOfANumber(this.value);
}