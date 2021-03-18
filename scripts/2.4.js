//2.4 Найти сумму цифр числа которые кратны двум


let ent = document.getElementById("ent");
let ex = document.getElementById("ex");

function sumOfDigitsDivisibleByTwo(num) {
    let tempArray = num.split("");
    num = 0;
    for (let i = 0;i < tempArray.length;i++){
        if (tempArray[i] % 2 == 0) num += tempArray[i]*1;

       // console.log(i + " " + tempArray[i])
    }
    return num;
}

ent.oninput = function () {
    ex.value = sumOfDigitsDivisibleByTwo(ent.value);
}




