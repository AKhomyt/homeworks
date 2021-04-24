
function Questions(questions, container){
    this.questions = questions || [];
    this.container = container;
    this.answerRight = 0;
    this.currentIndex = 0;
}

Questions.prototype.run = function(){
    if(this.currentIndex == this.questions.length){
        this.container.innerHTML = 'Правельных ответов: ' + this.answerRight;
        return;
    }

    this.container.innerHTML = '';
    let form = document.createElement('form');

    this.container.appendChild(document.createTextNode(this.questions[this.currentIndex].question));
    this.container.appendChild(document.createElement('br'));

    for (let i = 0; i < this.questions[this.currentIndex].ansvers.length;i++) {
        let elem = document.createElement("input");
        elem.type = 'checkbox';
        form.appendChild(document.createTextNode(this.questions[this.currentIndex].ansvers[i][0]));

        form.appendChild(elem);
    }

    form.appendChild(document.createElement('br'));
    let button = document.createElement('input');
    button.type = 'button';
    button.value = 'Ответить';
    form.appendChild(button);

    button.onclick = ()=>{
        for (let i = 0; i < form.elements.length - 1; i++){
            if (form.elements[i].checked){
                if(this.questions[this.currentIndex].ansvers[i][1]){
                    this.answerRight++;
                }
            }
        }

        this.currentIndex++;
        this.run();
    }
    this.container.appendChild(form);
}
//-------------------------------------------------------------------------------------------
{
    let questions = [
        {
            question: 'Вы знаете javascript?',
            ansvers: [['да', false], ['нет', true]]
        }, {
            question: 'Вы любите шоколад?',
            ansvers: [['да', true], ['нет', false]]
        }, {
            question: 'Вы любите деньги?',
            ansvers: [['да', false], ['нет', true], ['не знаю', true]]
        }
    ]

    let cont = document.getElementById('questions');


    let quest = new Questions(questions, cont);

    quest.run();

}