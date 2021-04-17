"use strict"
/*
6.3 В задании из пятого урока, взять массив со студентами и
 вывести их на страницу согласно сверстанной HTML-структуре,
 рядом с каждым студентом вывести крестик - по нажатию на который
 студент будет удален (удаляется как со страницы, так и с объекта),
 если был удален последний студент написать текстовое сообщение (“Студенты не найдены”)
*/

//---------------------------------------------------------------------------------------------------------

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
    ], studentForm = document.getElementById('stud'),
    studentNode = document.getElementById('result');

let stud = formOfStudents(students[9]);

function addStudents(studentsArray, studentNode, studentForm) {
    studentNode.innerHTML = '';
    for (let i = 0; i < studentsArray.length; i++) {
        let elem = document.createElement("p");

        elem.name = studentsArray[i].name,
            elem.estimate = studentsArray[i].estimate,
            elem.course = studentsArray[i].course,
            elem.active = studentsArray[i].active;

        elem.innerHTML = studentsArray[i].name + '&nbsp;&nbsp;курс:&nbsp;' +
            studentsArray[i].course + '&nbsp;&nbsp;оценка:&nbsp;' + studentsArray[i].estimate;
        elem.classList.add('customClass');

        studentNode.appendChild(elem);

        elem.onclick = function () {
            let res = document.querySelector('#formStud');
            let formS = formOfStudents(studentsArray[i]),
                el = document.getElementById('formStud');

            studentForm.appendChild(formS);


            formS.oninput = function () {
                studentsArray[i].name = formS.elements.surnameName.value;

            }
        }
    }
    return studentsArray;
}

addStudents(students, studentNode, studentForm);

studentNode.onclick = function () {
    addStudents(students, studentNode, studentForm);
}