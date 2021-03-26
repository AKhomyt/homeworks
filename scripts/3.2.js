"use strict"
//  2.1 Переменная содержит в себе строку. Вывести строку в обратном порядке.

let ent_2_1 = document.getElementById("ent_2_1");
let ex_2_1 = document.getElementById("ex_2_1");

function invertStringRec(arrString, tempArr) {
    tempArr = tempArr || arrString.slice(0);

    if (arrString.length != 0) {
        tempArr[arrString.length - 1] = arrString[0];
        arrString.shift();
        invertStringRec(arrString, tempArr);
    }
    return tempArr.toString();
}
function arrayToString(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != ',') {
            str += arr[i];
        }
    }
    return str;
}

ent_2_1.oninput = function () {
    ex_2_1.value = arrayToString(invertStringRec(ent_2_1.value.split('')));
}

//  2.2 Переменная содержит в себе число. Написать скрипт который посчитает факториал этого числа.

let ent_2_2 = document.getElementById("ent_2_2");
let ex_2_2 = document.getElementById("ex_2_2");

function factorialRec(num, ext) {
    let arrNum = []
    for (let i = 0; i < num; i++) {
        arrNum[i] = i + 1;
    }
    ext = ext || arrNum[arrNum.length - 1];
    if (arrNum.length != 1 && num > 0 && num != isNaN()) {
        ext *= arrNum[arrNum.length - 2];
        ext = factorialRec((num - 1), ext);
    }
    return ext;
}

ent_2_2.oninput = function () {
    ex_2_2.value = factorialRec(this.value);
}
//  2.3 Дано число - вывести первые N делителей этого числа нацело.

let ent_2_3_1 = document.getElementById("ent_2_3_1"),
    ent_2_3_2 = document.getElementById("ent_2_3_2"),
    ex_2_3 = document.getElementById("ex_2_3");

function integerDivisionOfANumberRec(num, numOfDivis, score, arrNum) {
    score = score || 0, arrNum = arrNum || [];
    let temp;
    if (score <= num && arrNum.length <= numOfDivis) {

        if (num / score % 1 == 0) {
            arrNum.push(score);
            integerDivisionOfANumberRec(num, numOfDivis, (score + 1), arrNum);
        } else {
            integerDivisionOfANumberRec(num, numOfDivis, (score + 1), arrNum);
        }
    }
    return arrNum;
}

ent_2_3_1.oninput = function () {
    ex_2_3.value = integerDivisionOfANumberRec(this.value, ent_2_3_2.value);
}
ent_2_3_2.oninput = function () {
    ex_2_3.value = integerDivisionOfANumberRec(ent_2_3_1.value, this.value);
}

//  2.4 Найти сумму цифр числа которые кратны двум

let ent_2_4 = document.getElementById("ent_2_4");
let ex_2_4 = document.getElementById("ex_2_4");

function sumOfDigitsDivisibleByTwoRec(num, counter) {
    counter = counter || 0;
    let arrTemp = num.split(''), temp = 0 * 1;

    if (arrTemp[counter] % 2 == 0 && counter < arrTemp.length) {
        temp += arrTemp[counter] * 1;
        temp += sumOfDigitsDivisibleByTwoRec(num, counter + 1);
    } else if (counter < arrTemp.length) {
        temp += sumOfDigitsDivisibleByTwoRec(num, counter + 1);
        sumOfDigitsDivisibleByTwoRec(num, counter + 1);
    }
    return temp;
}

ent_2_4.oninput = function () {
    ex_2_4.value = sumOfDigitsDivisibleByTwoRec(this.value);
}

//  2.5 Найти минимальное число которое больше A и нацело делиться на B

let ent_2_5_1 = document.getElementById("ent_2_5_1"),
    ent_2_5_2 = document.getElementById("ent_2_5_2"),
    ex_2_5 = document.getElementById("ex_2_5");

function numberFromTaskRec(numbA, numbB, numEx) {
    numEx = numEx * 1 || numbA * 1 + 1, numbA = numbA * 1 || 0, numbB = numbB * 1 || 1;
    if ((numEx / numbB) % 1 != 0) {
        numEx = numberFromTaskRec(numbA, numbB, numEx + 1);
    }
    return numEx;
}

ent_2_5_1.oninput = function () {
    ex_2_5.value = numberFromTaskRec(this.value, ent_2_5_2.value);
}
ent_2_5_2.oninput = function () {
    ex_2_5.value = numberFromTaskRec(ent_2_5_1.value, this.value);
}

/*  2.6 Заданы две переменные для двух целых чисел, найти
максимальное общее значение которое нацело делит два заданных числа.
*/

let ent_2_6_1 = document.getElementById("ent_2_6_1"),
    ent_2_6_2 = document.getElementById("ent_2_6_2"),
    ex_2_6 = document.getElementById("ex_2_6"); //exit

function integerDivisorsRec(num, counter) {
    counter = counter || 0;
    let tempArr = [];

    if (num / counter % 1 == 0 && counter <= num) {
        tempArr = integerDivisorsRec(num, counter + 1);
        tempArr.push(counter);
    } else if (counter <= num) {
        tempArr = integerDivisorsRec(num, counter + 1);
    }
    return tempArr; //Возвращает массив только с отобранными, целочисленными делителями
}


function commonMeaningsRec(arr1, arr2, count_1, count_2) {
    count_1 = count_1 || 0, count_2 = count_2 || 0;
    let tempArr = [];
    if (count_1 < arr1.length && count_2 < arr2.length) {

        if (arr1[count_1] == arr2[count_2]) {

            tempArr = commonMeaningsRec(arr1, arr2, count_1, count_2 + 1);
            tempArr.push(arr1[count_1]);
        } else {
            tempArr = commonMeaningsRec(arr1, arr2, count_1, count_2 + 1);
        }
    } else if (count_2 == arr2.length && count_1 < arr1.length - 1) {
        count_1++;
        count_2 = 0;

        if (arr1[count_1] == arr2[count_2]) {
            tempArr = commonMeaningsRec(arr1, arr2, count_1, count_2 + 1);
            tempArr.push(arr1[count_1]);
        } else {
            tempArr = commonMeaningsRec(arr1, arr2, count_1, count_2 + 1);
        }
    }
    return tempArr;   //Возвращает массив с общими элементами исключая их повторение
}

function greatestNumber(arr, count) {
    count = count || 0;
    let temp = arr[0];

    if (count < arr.length) {
        temp = greatestNumber(arr, count + 1);
        if (temp < arr[count]) {
            temp = arr[count];
        }
    }
    return temp;//Наибольшое в массиве
}

function mainFunc(numb1, numb2) {
    let tempArr = commonMeaningsRec(integerDivisorsRec(numb1), integerDivisorsRec(numb2));
    return greatestNumber(tempArr);
}


ent_2_6_1.oninput = function () {
    ex_2_6.value = mainFunc(this.value, ent_2_6_2.value);
}
ent_2_6_2.oninput = function () {
    ex_2_6.value = mainFunc(ent_2_6_1.value, this.value);
}
