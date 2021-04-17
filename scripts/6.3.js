"use strict"
/*
6.3 В задании из пятого урока, взять массив со студентами и
 вывести их на страницу согласно сверстанной HTML-структуре,
 рядом с каждым студентом вывести крестик - по нажатию на который
 студент будет удален (удаляется как со страницы, так и с объекта),
 если был удален последний студент написать текстовое сообщение (“Студенты не найдены”)
*/

//---------------------------------------------------------------------------------------------------------
function Students() {
    this.student = [];
}

let list = document.getElementById('listOfStudents');

function createList(students, list) {
    if (students.length == 0) {
        list.innerHTML = 'Студенты не найдены';
        return;
    }
    list.innerHTML = '';

    for (let i = 0; i < students.length; i++) {
        let tegP = document.createElement("div"),
            del = document.createElement('input');

        del.type = 'button';
        del.id = 'delele_teg' + i;
        del.value = 'X';

        list.appendChild(del);
        tegP.id = 'teg_' + i;

        tegP.className = 'customClass';
        tegP.innerHTML += '&nbsp;' + students[i].name + ',&nbsp;' +
            students[i].course + '&nbsp;курс,&nbsp;' +
            students[i].estimate + '&nbsp;б.&nbsp;';

        if (students[i].active) {
            tegP.innerHTML += 'активный.';
        } else {
            tegP.innerHTML += 'не&nbsp;активный.';
        }
        list.appendChild(tegP);
        let tegBR = document.createElement('br');
        list.appendChild(tegBR);

        del.onclick = function () {
            students.splice(i, 1);
            students = createList(students, list);
        }

    }
    return students;
}

//---------------------------------------------------------------------------------------------------------

{

    let students = [
        {name: 'student1', estimate: 3, course: 2, active: false},
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

    Students.student = students;

    createList(Students.student, list);
}