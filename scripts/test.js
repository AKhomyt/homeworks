"use strict"
/*
  4.4 Задано предложение - подсчитать количество вхождений каждого слова в предложении.
  Вывести список уникальных слов и напротив каждого слова - сколько раз встретилось.
*/
//---------------------------------------------------------------------------------------------------------
let text = document.getElementById('text'),
    ex = document.getElementById('ex');

//---------------------------------------------------------------------------------------------------------
function textStatistics(text) {
    let textArray = text.split(/\s+/);
//---------------------------------------------------------------------------------------------------------

    function Words(word){
        this.word = word;
        this.toRepeat = 0;
        this.previous = this;
        this.current = this;
        this.following = this;
        this.index = -1;
    }
    let word = new Words(textArray[0]);
//---------------------------------------------------------------------------------------------------------
    for (let i = 0; i < textArray.length; i++){
        word = word.current;
        // Поиск похожых слов
        for (let j = i + 1; j < textArray.length; j++){
            if(word.word == textArray[j]){
                word.toRepeat++;
                textArray.splice(j, 1);
                j--;
            }
        }
        // Инициализация следующего объекта following
        if (i < textArray.length - 1){
            word.following = new Words('');
            word.following.previous = word.current;
            word.current = word.following;
        } else {
            word.word = textArray[textArray.length - 1];
            return word;
        }
    }
}


text.oninput = function () {
    ex.innerHTML = textStatistics(text.value);
}
