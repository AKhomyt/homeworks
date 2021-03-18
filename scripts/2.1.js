//2.1 Переменная содержит в себе строку. Вывести строку в обратном порядке.

let ent = document.getElementById("ent");
let ex = document.getElementById("ex");

function invertString(string) {
    let arr = string.split("");
    string = "";
    for (let i = 0; i < arr.length; i++) {
        string += arr[arr.length - i - 1];
    }
    return string;
}

ent.oninput = function () {
    ex.value = invertString(this.value);
}




