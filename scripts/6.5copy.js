"use strict"
/*
  6.5Добавить текстовое поле ввода - ввод имени студента, поле ввода для курса,
  оценки и checkbox для активности студента, по нажатии на
  кнопку “Добавить” - студент новый добавляется в список студентов
*/

//---------------------------------------------------------------------------------------------------------
function Student(students, listContainer, statisticsContainer) {
    this.students = students || [];
    this.listContainer = listContainer || {};
    this.statisticsContainer = statisticsContainer || {};
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Student.prototype.restart = function () {
    let restart = new Student(this.students, this.listContainer, this.statisticsContainer);
    restart.listOfStudents();
    restart.statistics();
}


Student.prototype.statistics = function () {
    let array = this.students.slice(0),
        courses = [];
    //Выделить все имеющиеся курсы----------------------
    for (let i = 0; i < array.length - 1; i++) {
        courses.push(array[i].course);
        for (let j = i + 1; j < array.length; j++) {
            if (array[i].course == array[j].course) {
                array.splice(j, 1);
                j--;
            }
        }
    }
    //Отсортировать------------------------------------
    for (let i = 0; i < courses.length - 1; i++) {
        for (let j = i + 1; j < courses.length; j++) {
            if (courses[i] > courses[j]) {
                let temp = courses[i];
                courses[i] = courses[j];
                courses[j] = temp;
            }
        }
    }
    //массив студентов по курсам-----------------------
    let arrayEstimates = [],//Средняя оценка. ["1курс", ...]
        arrayActive = [], //Неактивные студенты. ["по всем курсам", "первый курс", ...]
        arrayStud = this.students.slice(0);

    let activeAll = 0;

    for (let i = 0; i < courses.length; i++) {
        arrayEstimates[i] = 0,
            arrayActive[i] = 0;
        let count = 0;

        for (let j = 0; j < arrayStud.length; j++) {
            if (arrayStud[j].course == courses[i] && !arrayStud[j].active) {
                arrayActive[i]++;
                activeAll++;
            }
            if (arrayStud[j].course == courses[i]) {
                arrayEstimates[i] += arrayStud[j].estimate;
                count++;
            }
        }
        arrayEstimates[i] = (arrayEstimates[i] / count).toFixed(3) * 1;
    }

    let element = [];
    this.statisticsContainer.innerHTML = '';

    for (let i = 0; i < courses.length; i++) {
        this.statisticsContainer.appendChild(document.createElement('br'));
        element[i] = document.createElement('span');
        this.statisticsContainer.appendChild(element[i]);
        element[i].innerHTML = 'Курс:&nbsp;' + courses[i] + ',&nbsp;средний балл:&nbsp;' +
            arrayEstimates[i] + ',&nbsp;неактивных студентов:&nbsp;' + arrayActive[i] + '.';

        if (arrayEstimates[i] < 4) {
            element[i].style.cssText = 'background-color: #700; color: #fff;';
        } else if (arrayEstimates[i] < 5) {
            element[i].style.cssText = 'background-color: #770; color: #fff;';
        } else if (arrayEstimates[i] = 5) {
            element[i].style.cssText = 'background-color: #070; color: #fff;';
        }
    }
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Student.prototype.listOfStudents = function () {
    if (this.students.length == 0) {
        this.listContainer.innerHTML = "нет ниодного студента.";
        return;
    }
    let result = [];
    for (let i = 0; i < this.students.length; i++) {
        result[i] = document.createElement('div');
        result[i].className = 'customClass';

//Кнопка---------------------------------------------------------------------------------------------------
        result[i].appendChild(document.createElement("input")).type = 'button';
        result[i].childNodes[0].value = 'X';

        result[i].childNodes[0].onclick = () => {
            this.students.splice(i, 1);

            this.listContainer.innerHTML = '';
            (new Student(this.students, this.listContainer, this.statisticsContainer)).restart();
            return;
        }
//Данные студента------------------------------------------------------------------------------------------

        result[i].appendChild(document.createElement("span"));
        result[i].childNodes[1].innerHTML = 'Студент:&nbsp;' + this.students[i].name + ',&nbsp;курс:&nbsp;' + this.students[i].course +
            ',&nbsp;оценка:&nbsp;' + this.students[i].estimate + ',&nbsp';


        if (this.students[i].active) {
            result[i].childNodes[1].innerHTML += 'активный;';
        } else {
            result[i].childNodes[1].innerHTML += 'неактивный;';
        }

        result[i].onclick = function () {


        }
//---------------------------------------------------------------------------------------------------------
    }

    for (let i = 0; i < result.length; i++) {
        this.listContainer.appendChild(result[i]);
        let drTeg = document.createElement('br');
        this.listContainer.appendChild(drTeg);

        if (this.students[i].estimate < 4) {
            result[i].childNodes[1].style.cssText = 'color: #f00';
        } else if (this.students[i].estimate < 5) {
            result[i].childNodes[1].style.cssText = 'color: #880';
        } else if (this.students[i].estimate = 5) {
            result[i].childNodes[1].style.cssText = 'color: #090';
        }
    }
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


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


    let stat = document.getElementById('statistic');
    let container = document.querySelector('#listOfStudents');
    let stud = new Student(students, container, stat);


    stud.restart();
}