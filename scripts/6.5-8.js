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
  8.1 Так же организовать возможность изменения по аналогии с именем.
  8.2 Написать регулярное выражение проверки введенных данных email.
  8.3 Написать валидацию проверку ввода данных - курс это любое целое число от 1 до 5.
  8.4 Если при вводе в любую из форм введены невалидные данные - сообщать об этом в окне с ошибкой.
  8.5 Изменять данные физически тогда и только тогда, когда будут введены корректные.
  8.6 Все данные хранить в localStorage касательно студентов.
  8.7 При открытии страницы выбирать из localstorage и показывать список студентов и статистику соответственно.
  8.8 Если localstorage не имеет никаких данных в себе, показывать что ничего нет при добавлении из
  формы нового студента - данные должны попасть и сохраниться в localstorage, при следующем
  открытии страницы - уже подтянуться сохраненные данные.
*/

//---------------------------------------------------------------------------------------------------------
function Student(students, listContainer, statisticsContainer) {

    this.students = JSON.parse(localStorage.getItem('students')) || students || [];
    this.listContainer = listContainer || {};
    this.statisticsContainer = statisticsContainer || {};

    for (let i = 0; i < this.students.length; i++) {
        if (typeof this.students[i].email == "undefined") {
            this.students[i].email = '';
        }
    }
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Student.prototype.restart = function () {
    localStorage.setItem('students', JSON.stringify(this.students));

    let restart = new Student(this.students, this.listContainer, this.statisticsContainer);
    restart.listOfStudents();
    restart.statistics();
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Student.prototype.eventList = function (nodeList, element, nameProperty, size, regularExpressions) {
    nodeList.onclick = () => {
        nodeList.onclick = null;
        let input = document.createElement('input');
        input.size = size,
            input.text = nodeList.innerHTML;
        nodeList.innerHTML = '';
        nodeList.appendChild(input);
        input.focus();

        input.onkeypress = (event) => {
            if (event.which == 13) {
                let reg = /^\s*$/;
                if (reg.test(input.value)) {
                    element[nameProperty] = input.text;
                    this.restart();
                    return;
                }
                if (regularExpressions.test(input.value)) {
                    element[nameProperty] = input.value;
                    this.restart();
                    return;
                } else {
                    element[nameProperty] = input.text;
                    this.restart();
                }
            }
        }
        input.onblur = () => {
            let reg = /^\s*$/;
            if (reg.test(input.value)) {
                element[nameProperty] = input.text;
                this.restart();
                return;
            }
            if (regularExpressions.test(input.value)) {
                element[nameProperty] = input.value;
                this.restart();
                return;
            } else {
                element[nameProperty] = input.text;
                this.restart();
                alert('Некорректный ввод. ( ' + nameProperty + ' )');
            }
        }
    }
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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
                arrayEstimates[i] += arrayStud[j].estimate * 1;
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
            this.restart();
            return;
        }
//Данные студента и события формы ввода-------------------------------------------------------------------
        let surName = document.createElement('span'),
            course = document.createElement('span'),
            estimate = document.createElement('span'),
            active = document.createElement('input'),
            email = document.createElement('span');

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

        result[i].appendChild(document.createTextNode('Ф.И.: '));
        result[i].appendChild(surName);
        surName.innerHTML = this.students[i].name;
        result[i].appendChild(document.createElement('br'));

        result[i].appendChild(document.createTextNode('курс: '));
        result[i].appendChild(course);
        course.innerHTML = this.students[i].course;

        result[i].appendChild(document.createTextNode(', оценка: '));
        result[i].appendChild(estimate);
        estimate.innerHTML = this.students[i].estimate;

        result[i].appendChild(document.createTextNode(', активный'));
        result[i].appendChild(active);


        result[i].appendChild(document.createElement('br'));

        if (this.students[i].email != '') {
            result[i].appendChild(document.createElement('a'));
            result[i].childNodes[11].innerHTML = 'email:'
            result[i].childNodes[11].href = 'mailto:' + this.students[i].email;
            result[i].childNodes[11].style.cssText = 'color: #00f;';
            result[i].appendChild(email);
            email.innerHTML = this.students[i].email;
        } else {
            result[i].appendChild(document.createTextNode('email: '));
            result[i].appendChild(email);
            email.innerHTML = 'email не задан.';
        }

        result[i].appendChild(document.createElement('br'));
        result[i].appendChild(document.createElement('br'));

        // Events>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        this.eventList(result[i].childNodes[2], this.students[i], 'name', 27, / *[А-ЯЁ][а-яё]+ +[А-ЯЁ][а-яё]+ */);
        this.eventList(result[i].childNodes[5], this.students[i], 'course', 1, /^\b[1-5]{1}\b$/);
        this.eventList(result[i].childNodes[7], this.students[i], 'estimate', 1, /^\b[1-5]{1}\b$/);
        this.eventList(result[i].childNodes[12], this.students[i], 'email', 27, /^[A-Za-zА-ЯЁа-яё0-9\.]+@[A-Za-z0-9]+\.[A-Za-z]+$/);

        active.onchange = () => {
            this.students[i].active = active.checked;
            this.restart();
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
    //let students = [];
    let stat = document.getElementById('statistic');
    let container = document.querySelector('#listOfStudents');
    let stud = new Student([], container, stat);

    stud.restart();

    let studentForm = document.getElementById('formOfStudent');

    studentForm.elements['add'].onclick = function () {
        let student = {};

        student.name = this.form.elements['surnameName'].value,
            student.estimate = this.form.elements['estimate'].value * 1,
            student.course = this.form.elements['course'].value * 1,
            student.active = this.form.elements['active'].checked,
            student.email = this.form.elements['email'].value;

        let regName = / *[А-ЯЁ][а-яё]+ +[А-ЯЁ][а-яё]+ */,
            regEstimate = /^\b[1-5]{1}\b$/,
            regCourse = /^\b[1-5]{1}\b$/,
            regEmail = /^[A-Za-zА-ЯЁа-яё0-9\.]+@[A-Za-z0-9]+\.[A-Za-z]+$/;

        if (regName.test(student.name)) {
            if (regEmail.test(student.email)) {
                if (regCourse.test(student.course)) {
                    if (regEstimate.test(student.estimate)) {
                        stud.students.push(student);
                        stud.restart();
                    } else {
                        alert('Некорректно задана, или не задана, оценка.');
                    }
                } else {
                    alert('Некорректно задан, или не задан, курс.');
                }
            } else {
                alert('Некорректно задан, или не задан, email.');
            }
        } else {
            alert('Введите корректную фамилию, имя.');
        }
    }
}