//2.3 Дано число - вывести первые N делителей этого числа нацело.

let ent = document.getElementById("ent");
let ent2 = document.getElementById("ent2");
let ex = document.getElementById("ex");

function integerDivisionOfANumber(num, numOfDivis) {
    let ext = [];
    for (let i = 1, j = 0; numOfDivis > 0; i++) {
        if (num / i % 1 === 0) {
            ext[j] = i;
            j++;
            numOfDivis--;
        }
        if (i > num) return []
    }
    return ext;
}

ent.oninput = function () {
    ex.value = integerDivisionOfANumber(this.value, ent2.value);
}
ent2.oninput = function () {
    ex.value = integerDivisionOfANumber(ent.value, this.value);
}



