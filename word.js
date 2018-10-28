const Letter = require("./letter.js");

function Word(answer){
    this.answer = answer;
    this.answerArray = answer.split("");
    this.answerObjectArray = [];
    this.toString = function(){
        console.log(this.answerArray);
    };
    this.letterObjectify = function(){
        this.answerArray.forEach(element => {
            let x = new Letter(element);
            this.answerObjectArray.push(x);
        });
    };

    
}

const myWord = new Word("BUTTS");
myWord.letterObjectify();
console.log(myWord.answerObjectArray);
//array of new letter objects, representing letters of the word.

//function that takes character as argument and calls guess function on each letter.

 