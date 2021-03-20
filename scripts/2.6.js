/*
2.6 Заданы две переменные для двух целых чисел, найти
максимальное общее значение которое нацело делит два заданных числа.
*/

let ent = document.getElementById("ent"); //enter
let ent2 = document.getElementById("ent2"); //enter
let ex = document.getElementById("ex"); //exit

function integerDivisors(num) {
    let tempArr = []
    for (let i = 0; i <= num; i++) {
        if (num / i % 1 == 0) {
            tempArr.push(i);
        }
    }
    return tempArr; //Возвращает массив только с отобранными, целочисленными делителями
}

function commonMeanings(arr1, arr2) {
    let tempArr = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                let key = true;
                for (let e = 0; e < tempArr.length; e++) {
                    if (tempArr[e] == arr1[i]) {
                        key = false;
                        break
                    }
                }
                if (key) {
                    tempArr.push(arr1[i])
                    continue;
                }

            }
        }
    }
    return tempArr; //Возвращает массив с общими элементами исключая их повторение
}

function greatestNumber(arr) {
    let temp = 0;
    temp = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (temp * 1 < arr[i]) {
            temp = arr[i];
        }
        console.log(i);
    }
    return temp;//Наибольшое в массиве
}

function mainFunc(numb1, numb2) {
    let tempArr = commonMeanings(integerDivisors(numb1), integerDivisors(numb2));
    return greatestNumber(tempArr);
}


ent.oninput = function () {
    ex.value = mainFunc(ent.value, ent2.value);
}
ent2.oninput = function () {
    ex.value = mainFunc(ent.value, ent2.value);
}