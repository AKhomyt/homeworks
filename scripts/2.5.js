//2.5 Найти минимальное число которое больше 300 и нацело делиться на 17

let entA = document.getElementById("entA"),
    entB = document.getElementById("entB"),
    ex = document.getElementById("ex"),
    count = document.getElementById("count");

function numberFromTask(numbOne, numbTwo) {
    numbOne *= 1;
    numbTwo *= 1;
    for (let i = numbOne + 1; !isNaN(numbOne) && !isNaN(numbTwo); i++) {
        if ((i / numbTwo) % 1 == 0 ) {
            return i;
        }console.log(i);
    }
}

count.onclick = function () {
    ex.value = numberFromTask(entA.value, entB.value);
}







