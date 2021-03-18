//2.5 Найти минимальное число которое больше 300 и нацело делиться на 17


let ex = document.getElementById("ex");

function numberFromTask() {
    for (let i = 301;; i++){
        if ((i/17)%1 == 0){
            return i;
        }
    }
}

(function () {
    ex.innerHTML = numberFromTask();
})()







