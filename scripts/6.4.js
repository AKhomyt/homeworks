"use strict"
/*
6.4 Вывести статистику средних оценок в разрезе курса и статистику
 по количеству неактивных студентов в разрезе каждого курса и общее
 количество неактивных студентов.
*/

//---------------------------------------------------------------------------------------------------------
//Ср. оценка по курсам
function averageRate(students) {
    let resulr = [];
    for (let i = 1; i < 5; i++) {
        let count = 0, est = 0;
        for (let j = 0; j < students.length; j++) {
            if (students[j].course == i) {
                count++;
                est += students[j].estimate;
            }
        }
        resulr.push([i, ((est) / count).toFixed(2) * 1]);
    }
    return resulr;
}

function noActiveStudents(students) {
    let resulr = [];
    resulr[0] = 0;//[0] - общее к-во неактивных студентов. C [1] по посл. по курсам.
    for (let i = 1; i < 5; i++) {
        let count = 0;
        for (let j = 0; j < students.length; j++) {
            if (students[j].course == i && students[j].active == false) {
                resulr[0]++;
                count++;
            }
        }
        resulr.push(count);
    }
    return resulr;
}

function textStatHTML(averageRate, noActiveStudents) {
    let result = 'Средний результат по курсам:<br>';
    for (let i = 0; i < 4; i++) {
        if (averageRate[i][1].length == 0 || isNaN(averageRate[i][1])) {
            result += '<br>На&nbsp;этои&nbsp;курсе&nbsp;нет&nbsp;студентов.';
            continue;
        }
        result += '<br>Курс:&nbsp;' + averageRate[i][0] + ',&nbsp;средний балл:&nbsp;' +
            averageRate[i][1] + ',&nbsp;неактивных&nbsp;студентов:&nbsp;' +
            noActiveStudents[averageRate[i][0]] + '.';
    }
    result += '<br>Всего&nbsp;неактивных&nbsp;студентов:&nbsp;' + noActiveStudents[0];
    return result;
}

//---------------------------------------------------------------------------------------------------------

{
    let list = document.getElementById('listOfStudents'),
        stat = document.getElementById('statistic');

    stat.innerHTML = textStatHTML(averageRate(Students.student), noActiveStudents(Students.student));

    createList(Students.student, list);

    list.onclick = function () {
        stat.innerHTML = '';
        stat.innerHTML = textStatHTML(averageRate(createList(Students.student, list)), noActiveStudents(createList(Students.student, list)));
    }
}