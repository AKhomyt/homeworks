"use strict"
/*
5.3 Задан массив объектов студентов вида
[{name: “Ivan”, estimate: 4, course: 1, active: true},
{name: “Ivan”, estimate: 3, course: 1, active: true},
{name: “Ivan”, estimate: 2, course: 4, active: false},
{name: “Ivan”, estimate: 5, course: 2, active: true}] - заполнить его более большим
количеством студентов. Написать функцию которая возвращает: среднюю оценку студентов
в разрезе каждого курса: {1: 3.2, 2: 3.5, 3: 4.5, 4: 3, 5: 4.5} с учетом только тех
студентов которые активны. Посчитать количество неактивных студентов в разрезе каждого
курса и общее количество неактивных студентов.
*/

//---------------------------------------------------------------------------------------------------------

function averageAssessments(assessments) {
    let sum = 0;
    for (let i = 0; i < assessments.length; i++) {
        sum += assessments[i];
    }
    return sum / assessments.length;
}

function activeStudentsByYearOfStudy(students, year){
    let result = [];
    for (let stud of students){
        if (stud.course == year && stud.active == true){
            result.push(stud);
        }
    }
    return result;
}

function inactiveStudentsByYearOfStudy(students, year){
    let result = [];
    for (let stud of students){
        if (stud.course == year && stud.active == false){
            result.push(stud);
        }
    }
    return result;
}

function distributionByCourse(students){
    let course  = [];

    for (let i = 1; i <= 4; i++){
        course.push(activeStudentsByYearOfStudy(students, i));
    }
    return course;
}

function assessments(distributionByCourse){
    let result = [];
    for (let course of distributionByCourse){
        let arr = [];
        for (let stud of course){
            arr.push(stud.estimate)
        }
        result.push(arr);
    }
    return result;
}

function calculateAverageAssessments(assessments){
    let result = [];
    for (let i of assessments){
        result.push(averageAssessments(i));
    }
    return result;
}

function resultAverageAssessments(calculateAverageAssessments, students){
    let result = 'Средние оценки по курсам:',
        inactiveStudentsAll = 0;
    for (let i = 0; i < calculateAverageAssessments.length; i++){
        inactiveStudentsAll += inactiveStudentsByYearOfStudy(students, (i + 1)).length;
        console.log(inactiveStudentsAll);
        result += '\n\nКурс_' + (i + 1) + ', средняя оценка: ' +
            calculateAverageAssessments[i] + '\nНеактивных студентов: ' +
            inactiveStudentsByYearOfStudy(students, (i + 1)).length;
    }
    return result + '\n\nВсего неактивных студентов: ' + inactiveStudentsAll;
}
//---------------------------------------------------------------------------------------------------------
let students = [
    {name: 'student1', estimate: 3, course: 2, active: true},
    {name: 'student2', estimate: 3, course: 1, active: false},
    {name: 'student3', estimate: 1, course: 4, active: true},
    {name: 'student4', estimate: 5, course: 2, active: true},
    {name: 'student5', estimate: 4, course: 3, active: false},
    {name: 'student6', estimate: 3, course: 1, active: true},
    {name: 'student7', estimate: 2, course: 4, active: false},
    {name: 'student8', estimate: 4, course: 2, active: true},
    {name: 'student9', estimate: 5, course: 1, active: true},
    {name: 'student10', estimate: 2, course: 2, active: false},
    {name: 'student11', estimate: 5, course: 4, active: true},
    {name: 'student12', estimate: 5, course: 3, active: true},
    {name: 'student13', estimate: 2, course: 4, active: false}
    ];
let array = [7, 8, 8, 9, 9, 7];
let  text = resultAverageAssessments(calculateAverageAssessments(assessments(distributionByCourse(students))), students);
console.log(text);

//console.log(inactiveStudentsByYearOfStudy(students, 4).length);