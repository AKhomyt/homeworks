//2.4 Найти сумму цифр числа которые кратны двум

let ent = document.getElementById("ent");
let ex = document.getElementById("ex");

function sumOfDigitsDivisibleByTwo(num) {
    let tempArray = [];
    for (let i = 0; num > 10; i++) {
        let val = 10;
        tempArray[i] = (num - ((num / val) - (num / val) % 1) * 10);
        num = ((num / val) - (num / val) % 1);
    }
    num = 0;
    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i] % 2 == 0) num += tempArray[i] * 1;
    }
    return num;
}

ent.oninput = function () {
    ex.value = sumOfDigitsDivisibleByTwo(ent.value);
}




