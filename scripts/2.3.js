//2.3 Дано число - вывести первые N делителей этого числа нацело.


let ent = document.getElementById("ent");
let ent2 = document.getElementById("ent2");
let ex = document.getElementById("ex");



function integerDivisionOfANumber(num, N) {
    let ext = [];
    for (let i =1, j=0; N > 0; i++){
        if (num/i % 1 === 0) {
            ext[j] = i;
            j++;
            N--;
        }
        if(i > num) return []
    }
    return ext;
}

ent.onchange = function () {
    ex.value = integerDivisionOfANumber(this.value, ent2.value);
}
ent2.onchange = function () {
    ex.value = integerDivisionOfANumber(ent.value, this.value);
}



