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
  9.1 Написать ajax запрос получения данных по студентам из сервера (сервис будет предоставлен)
  9.2 Выводить данные полученные от сервера соответственно логике описанной в предыдущих занятиях предыдущих уроках
  9.3 Аналогично для удаления, добавления и изменения статуса студентов написать ajax-запросы
  9.4 Проверять если сервис доступный для работы со студентами работать с ним, если нет - то
  работать с localstorage как было реализовано ранее
Задание десятое
  10.1 Продумать как лучше реализовать всю цепочку задач со студентами, какие функции должны быть, как называться,
  что принимать по параметрам и что возвращать. Аргументировать свой ответ
  10.2Переписать работу со всей функциональностью студентов с помощью классов
*/

//---------------------------------------------------------------------------------------------------------
class Student {
    constructor(students, listContainer, statisticsContainer, url, online) {
        this.url = url || undefined;
        this.students = JSON.parse(localStorage.getItem('students')) || students || [];
        this.listContainer = listContainer || {};
        this.statisticsContainer = statisticsContainer || {};
        this.online = online || true;
        this.firstStart = true;
    }

    restart() {
        for (let i = 0; i < this.students.length; i++) {
            if (typeof this.students[i].email == "undefined") {
                this.students[i].email = '';
            }
        }
        let xhr = new XMLHttpRequest();
        xhr.open('GET', this.url, false);
        xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
        xhr.setRequestHeader("X-Authorization-Token", "177c9487-a2a8-11eb-b8cf-001b21474ee8");
        let status = document.getElementById('status');
        try {
            xhr.send(null);
            if (xhr.status == 200) {
                this.online = true;
                status.style.cssText = 'color: #0f0';
                status.innerText = 'online';
                if (this.firstStart) {
                    this.serverUpdate();
                } else {
                    this.createForm();
                    if (Array.isArray(this.students) && this.students.length >= 1) {
                        localStorage.setItem('students', JSON.stringify(this.students));
                    } else {
                        localStorage.setItem('students', '[]');
                    }
                    let restart = new Student(this.students, this.listContainer, this.statisticsContainer, this.url, this.online);
                    restart.listOfStudents();
                    restart.statistics();
                    restart.test();
                }
            }
            this.createForm();
        } catch (e) {
            this.online = false;
            status.style.cssText = 'color: #f99';
            status.innerText = 'offline';
            this.createForm();
            if (Array.isArray(this.students) && this.students.length >= 1) {
                localStorage.setItem('students', JSON.stringify(this.students));
            } else {
                localStorage.setItem('students', '[]');
            }
            let restart = new Student(this.students, this.listContainer, this.statisticsContainer, this.url, this.online);
            restart.listOfStudents();
            restart.statistics();
            restart.test();
            this.firstStart = true;
        }
    }

    ajax(method, url, callback, student) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        let offlineData = {
            student: {id: 0, first_name: "", estimate: 0, course: 2, is_active: false}
        };
        let data = student || false;
        xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
        xhr.setRequestHeader("X-Authorization-Token", "177c9487-a2a8-11eb-b8cf-001b21474ee8");
        if (data) {
            xhr.send(JSON.stringify(data));
        } else {
            xhr.send();
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) {
                return;
            }
            if (xhr.status == 200) {
                callback(JSON.parse(xhr.responseText));
            } else {
                callback();
            }
        }
    }

    serverUpdate() {
        let local = JSON.parse(localStorage.getItem('students'));
        let mainObject = this;
        if (local.length >= 1) {
            mainObject.ajax("GET", mainObject.url, (data) => {
                for (let i = 0; i < local.length; i++) {
                    if (local[i].id == '') {
                        mainObject.ajax('POST', mainObject.url, (elem) => {
                            mainObject.ajax("GET", mainObject.url, (data) => {
                                mainObject.students = data.students;
                                if (Array.isArray(mainObject.students) && mainObject.students.length >= 1) {
                                    localStorage.setItem('students', JSON.stringify(mainObject.students));
                                } else {
                                    localStorage.setItem('students', '[]');
                                }
                                let restart = new Student(mainObject.students, mainObject.listContainer, mainObject.statisticsContainer, mainObject.url, true);
                                restart.firstStart = false;
                                restart.listOfStudents();
                                restart.statistics();
                                restart.test();
                            });
                        }, local[i]);
                    } else {
                        mainObject.ajax("GET", mainObject.url, (data) => {
                            mainObject.students = data.students;

                            if (Array.isArray(mainObject.students) && mainObject.students.length >= 1) {
                                localStorage.setItem('students', JSON.stringify(mainObject.students));
                            } else {
                                localStorage.setItem('students', '[]');
                            }
                            let restart = new Student(mainObject.students, mainObject.listContainer, mainObject.statisticsContainer, mainObject.url, true);
                            restart.firstStart = false;
                            restart.listOfStudents();
                            restart.statistics();
                            restart.test();
                        });
                    }
                }
            });
        } else {
            mainObject.ajax("GET", mainObject.url, (data) => {
                mainObject.students = data.students;
                if (Array.isArray(mainObject.students) && mainObject.students.length >= 1) {
                    localStorage.setItem('students', JSON.stringify(mainObject.students));
                } else {
                    localStorage.setItem('students', '[]');
                }
                let restart = new Student(mainObject.students, mainObject.listContainer, mainObject.statisticsContainer, mainObject.url, true);
                restart.firstStart = false;
                restart.listOfStudents();
                restart.statistics();
                restart.test();
            });
        }
    }

    eventList(nodeList, element, nameProperty, size, regularExpressions) {
        let mainObject = this;
        nodeList.onclick = () => {
            nodeList.onclick = null;
            let input = document.createElement('input');
            input.size = size;
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
                    if (mainObject.online) {
                        mainObject.ajax('PUT', mainObject.url, () => {
                            mainObject.restart();
                        }, element);
                    } else {
                        mainObject.restart();
                    }
                } else {
                    element[nameProperty] = input.text;
                    this.restart();
                    alert('Некорректный ввод. ( ' + nameProperty + ' )');
                }
            }
        }
    }

    statistics() {
        let array = this.students.slice(0);
        let courses = [];
        for (let i = 0; i < array.length; i++) {
            courses.push(array[i].course);
            for (let j = i + 1; j < array.length; j++) {
                if (array[i].course == array[j].course) {
                    array.splice(j, 1);
                    j--;
                }
            }
        }
        for (let i = 0; i < courses.length - 1; i++) {
            for (let j = i + 1; j < courses.length; j++) {
                if (courses[i] > courses[j]) {
                    let temp = courses[i];
                    courses[i] = courses[j];
                    courses[j] = temp;
                }
            }
        }
        let arrayEstimates = [],//Средняя оценка. ["1курс", ...]
            arrayActive = [], //Неактивные студенты. ["первый курс", ...]
            arrayStud = this.students.slice(0);
        let noActiveAll = 0;
        for (let i = 0; i < courses.length; i++) {
            arrayEstimates[i] = 0;
            arrayActive[i] = 0;
            let count = 0;
            for (let j = 0; j < arrayStud.length; j++) {
                if (arrayStud[j].course == courses[i] && !arrayStud[j].is_active) {
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

    listOfStudents() {
        if (this.students.length == 0) {
            this.listContainer.innerHTML = "нет ниодного студента.";
            return;
        }
        let arrayID = [];
        for (let i of this.students) {
            arrayID.push(i.id);
        }
        let mainObject = this;
        this.listContainer.innerHTML = '';
        let result = [];
        for (let i = 0; i < this.students.length; i++) {
            result[i] = document.createElement('div');
            result[i].className = 'customClass';
            result[i].appendChild(document.createElement("input")).type = 'button';
            result[i].childNodes[0].value = 'X';
            result[i].childNodes[0].onclick = () => {
                if (this.online) {
                    mainObject.ajax("DELETE", this.url + this.students[i].id + '/', () => {
                        mainObject.students.splice(i, 1);
                        mainObject.listContainer.innerHTML = '';
                        mainObject.restart();
                    });
                } else {
                    mainObject.students.splice(i, 1);
                    mainObject.listContainer.innerHTML = '';
                    mainObject.restart();
                }
            }
            let surName = document.createElement('span');
            let course = document.createElement('span');
            let estimate = document.createElement('span');
            let active = document.createElement('input');
            let email = document.createElement('span');
            let id = document.createElement('span');

            active.type = 'checkbox';
            active.checked = this.students[i].is_active;

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
            surName.innerHTML = this.students[i].first_name;
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
                result[i].childNodes[11].innerHTML = 'email:';
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
            this.eventList(result[i].childNodes[2], this.students[i], 'first_name', 27, / *[А-ЯЁ][а-яё]+ +[А-ЯЁ][а-яё]+ */);
            this.eventList(result[i].childNodes[5], this.students[i], 'course', 1, /^\b[1-5]{1}\b$/);
            this.eventList(result[i].childNodes[7], this.students[i], 'estimate', 1, /^\b[1-5]{1}\b$/);
            this.eventList(result[i].childNodes[12], this.students[i], 'email', 27, /^[A-Za-zА-ЯЁа-яё0-9\.]+@[A-Za-z0-9]+\.[A-Za-z]+$/);
            active.onchange = () => {
                mainObject.students[i].is_active = active.checked;
                if (this.online) {
                    mainObject.ajax('PUT', mainObject.url, (a) => {
                        mainObject.restart();
                    }, mainObject.students[i]);
                } else {
                    mainObject.restart();
                }
            }
        }
        for (let i = 0; i < result.length; i++) {
            this.listContainer.appendChild(result[i]);
            let drTeg = document.createElement('br');
            this.listContainer.appendChild(drTeg);
        }
    }

    createForm() {
        let studentForm = document.getElementById('formOfStudent');
        let mainObject = this;

        studentForm.elements['add'].onclick = function () {
            let student = {};
            student.first_name = this.form.elements['surnameName'].value;
            student.estimate = this.form.elements['estimate'].value * 1;
            student.course = this.form.elements['course'].value * 1;
            student.is_active = this.form.elements['active'].checked;
            student.email = this.form.elements['email'].value;

            let regName = / *[А-ЯЁA-Z][а-яёa-z]+ +[А-ЯЁA-Z][а-яёa-z]+ */;
            let regEstimate = /^\b[1-5]{1}\b$/;
            let regCourse = /^\b[1-5]{1}\b$/;
            let regEmail = /^[A-Za-zА-ЯЁа-яё0-9\.]+@[A-Za-z0-9]+\.[A-Za-z]+$/;

            if (regName.test(student.first_name)) {
                if (regEmail.test(student.email)) {
                    if (regCourse.test(student.course)) {
                        if (regEstimate.test(student.estimate)) {
                            if (mainObject.online) {
                                mainObject.ajax('POST', mainObject.url, (elem) => {
                                    student.id = elem.student.id;
                                    mainObject.students.push(student);
                                    mainObject.restart();
                                }, student);
                            } else {
                                student.id = '';
                                mainObject.students.push(student);
                                mainObject.restart();
                            }
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

    test() {
        let stud = this;
        document.getElementById('clear').onclick = function () {
            let array = [];
            stud.ajax('GET', stud.url, (abc) => {
                array = abc.students;
                for (let i = 0; i < array.length; i++) {
                    stud.ajax('DELETE', stud.url + array[i].id + '/', (a) => {
                    });
                }
            });
        }
        document.getElementById('viewing').onclick = function () {
            stud.ajax('GET', stud.url, (abc) => {
                console.clear();
                console.log('\n\nSERVER\n');
                console.log(abc.students);
                console.log('\n\nObject\n');
                console.log(stud.students);
            });
        }
        document.getElementById('add').onclick = function () {
            let array = stud.students;
            for (let i of array) {
                stud.ajax('POST', stud.url, (a) => {
                    i.id = a.student.id;
                }, i);
            }
        }
    }
}


{
    let stat = document.getElementById('statistic');
    let container = document.querySelector('#listOfStudents');
    let stud = new Student([], container, stat, "https://evgeniychvertkov.com/api/student/");

    stud.restart();
}