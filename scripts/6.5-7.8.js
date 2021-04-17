"use strict"
/*
  6.5Добавить текстовое поле ввода - ввод имени студента, поле ввода для курса,
  оценки и checkbox для активности студента, по нажатии на
  кнопку “Добавить” - студент новый добавляется в список студентов.
  7.1 При каждом действии удаления или добавления студентов нужно пересчитывать
  статистику средней оценки в разрезе каждого курса и подсчета количества неактивных
  студентов и изменять соответствующее содержимое.
  7.2 В ряде предыдущих заданий - выделять красным цветом тех студентов которые имеют
  оценку 3 и менее. которые от 3 до 4  - желтым и которые 4 и выше - зеленым.
  7.3 Аналогично как в предыдущем задании этого урока отмечать фоновым цветом вывод
  статистики в разрезе каждого курса касательно средней оценки
  7.4 Добавить для каждого студента иконку по нажатию на которую студент переводится в
  статус неактивный из активного и наоборот - при этом для двух состояний иконки тоже
  должны быть разными и изменять
  7.5 По нажатие на имя студента - удалять имя, вместо имени показывать форму ввода - по нажатию
  на ENTER сохранять новое имя для этого студента, удалять форму ввода и выводить в списке новое
  имя студента
  7.6 По аналогии предыдущего пункта сделать тоже самое с номером курса и с оценкой студента.
  Не забыть что при изменении оценки статистика также должна быть пересчитана и выведена новая статистика.
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
    for (let i = 0; i < array.length; i++) {
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
        arrayActive = [], //Неактивные студенты. ["первый курс", ...]
        arrayStud = this.students.slice(0);
    let noActiveAll = 0;
    for (let i = 0; i < courses.length; i++) {
        arrayEstimates[i] = 0,
            arrayActive[i] = 0;
        let count = 0;
        for (let j = 0; j < arrayStud.length; j++) {
            if (arrayStud[j].course == courses[i] && !arrayStud[j].active) {
                arrayActive[i]++;
                noActiveAll++;
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
        element[i] = document.createElement('div');
        this.statisticsContainer.appendChild(element[i]);
        element[i].innerHTML = '&nbsp;&nbsp;Курс:&nbsp;' + courses[i] + ',&nbsp;средний балл:&nbsp;&nbsp;' +
            arrayEstimates[i] + ',&nbsp;неактивных студентов:&nbsp;' + arrayActive[i] + '.&nbsp;';

        if (arrayEstimates[i] <= 3) {
            element[i].style.cssText = 'background-color: #700; color: #fff;';
        } else if (arrayEstimates[i] <= 4) {
            element[i].style.cssText = 'background-color: #770; color: #fff;';
        } else if (arrayEstimates[i] > 4) {
            element[i].style.cssText = 'background-color: #070; color: #fff;';
        }
    }
    let all = document.createElement('div');
    this.statisticsContainer.appendChild(all);
    all.innerHTML = "&nbsp;&nbsp;Всего неактивных студентов:" + noActiveAll + '&nbsp;&nbsp;';
    all.style.cssText = 'background-color: #fff; color: #000;';
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Student.prototype.listOfStudents = function () {
    if (this.students.length == 0) {
        this.listContainer.innerHTML = "нет ниодного студента.";
        return;
    }
    this.listContainer.innerHTML = '';
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
//Данные студента и события формы ввода-------------------------------------------------------------------
        let surName = document.createElement('span'),
            course = document.createElement('span'),
            estimate = document.createElement('span'),
            active = document.createElement('input');

        active.type = 'checkbox';
        active.checked = this.students[i].active;

        if (this.students[i].estimate <= 3) {
            surName.style.cssText = 'color: #f00';
            course.style.cssText = 'color: #f00';
            estimate.style.cssText = 'color: #f00';
        } else if (this.students[i].estimate <= 4) {
            surName.style.cssText = 'color: #880';
            course.style.cssText = 'color: #880';
            estimate.style.cssText = 'color: #880';
        } else if (this.students[i].estimate > 4) {
            surName.style.cssText = 'color: #090';
            course.style.cssText = 'color: #090';
            estimate.style.cssText = 'color: #090';
        }
        result[i].appendChild(document.createTextNode('Студент: '));
        result[i].appendChild(surName);
        surName.innerHTML = this.students[i].name;

        result[i].appendChild(document.createTextNode(', курс: '));
        result[i].appendChild(course);
        course.innerHTML = this.students[i].course;

        result[i].appendChild(document.createTextNode(', оценка: '));
        result[i].appendChild(estimate);
        estimate.innerHTML = this.students[i].estimate;

        result[i].appendChild(document.createTextNode(', '));
        result[i].appendChild(active);

        // Events>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        result[i].childNodes[2].onclick = () => {
            result[i].childNodes[2].onclick = null;
            let input = document.createElement('input');
            input.size = 27,
                input.text = result[i].childNodes[2].innerHTML;
            result[i].childNodes[2].innerHTML = '';
            result[i].childNodes[2].appendChild(input);
            input.focus();
            input.onkeypress = (event) => {
                if (event.which == 13) {
                    if (input.value == '') {
                        this.students[i].name = input.text;
                        (new Student(this.students, this.listContainer, this.statisticsContainer)).restart();
                        return;
                    }
                    this.students[i].name = input.value;
                    (new Student(this.students, this.listContainer, this.statisticsContainer)).restart();
                }
            }
            input.onblur = () => {
                if (input.value == '') {
                    this.students[i].name = input.text;
                    (new Student(this.students, this.listContainer, this.statisticsContainer)).restart();
                    return;
                }
                this.students[i].name = input.value;
                (new Student(this.students, this.listContainer, this.statisticsContainer)).restart();
            }
        }
        result[i].childNodes[4].onclick = (event) => {
            result[i].childNodes[4].onclick = null;
            let input = document.createElement('input');
            input.size = 1,
                input.text = result[i].childNodes[4].innerHTML;
            result[i].childNodes[4].innerHTML = '';
            result[i].childNodes[4].appendChild(input);
            input.focus();
            input.onkeypress = (event) => {
                if (event.which == 13) {
                    if (input.value == '') {
                        this.students[i].course = input.text;
                        (new Student(this.students, this.listContainer, this.statisticsContainer)).restart();
                        return;
                    }
                    this.students[i].course = input.value * 1;
                    (new Student(this.students, this.listContainer, this.statisticsContainer)).restart();
                }
            }
            input.onblur = () => {
                if (input.value == '') {
                    this.students[i].course = input.text;
                    (new Student(this.students, this.listContainer, this.statisticsContainer)).restart();
                    return;
                }
                this.students[i].course = input.value * 1;
                (new Student(this.students, this.listContainer, this.statisticsContainer)).restart();
            }
        }
        result[i].childNodes[6].onclick = () => {
            result[i].childNodes[6].onclick = null;
            let input = document.createElement('input');
            input.size = 1,
                input.text = result[i].childNodes[6].innerHTML;

            result[i].childNodes[6].innerHTML = '';
            result[i].childNodes[6].appendChild(input);
            input.focus();
            input.onkeypress = (event) => {
                if (event.which == 13) {
                    if (input.value == '') {
                        this.students[i].estimate = input.text;
                        (new Student(this.students, this.listContainer, this.statisticsContainer)).restart();
                        return;
                    }
                    this.students[i].estimate = input.value * 1;
                    (new Student(this.students, this.listContainer, this.statisticsContainer)).restart();
                }
            }
            input.onblur = () => {
                if (input.value == '') {
                    this.students[i].estimate = input.text;
                    (new Student(this.students, this.listContainer, this.statisticsContainer)).restart();
                    return;
                }
                this.students[i].estimate = input.value * 1;
                (new Student(this.students, this.listContainer, this.statisticsContainer)).restart();
            }
        }
        active.onchange = () => {
            this.students[i].active = active.checked;
            (new Student(this.students, this.listContainer, this.statisticsContainer)).restart();
        }
        // Events<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    }
    for (let i = 0; i < result.length; i++) {
        this.listContainer.appendChild(result[i]);
        let drTeg = document.createElement('br');
        this.listContainer.appendChild(drTeg);
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

    let studentForm = document.getElementById('formOfStudent');

    studentForm.elements['add'].onclick = function () {
        let student = {};

        student.name = this.form.elements['surnameName'].value,
            student.estimate = this.form.elements['estimate'].value * 1,
            student.course = this.form.elements['course'].value * 1,
            student.active = this.form.elements['active'].checked;

        stud.students.push(student);
        stud.restart();
    }

    let b = document.getElementById('r');

    r.onclick = () => {
        console.clear();
        console.log(stud.students);
    }
}