//todo constructor called letter
function Letter (letterObj){
    this.letter = letterObj;
    this.guessed = false;
    this.placHolder = "_";
    
    this.toString = function(){
        console.log(this.letter);
    };
//Function takes in argument and returns character if it matches a character in the word?
    this.checkLetter = function(guess){
        if(guess === this.letter){
            this.guessed = true;
            return this.letter;
        }else return this.guessed;
    };
    
}

module.exports = Letter;

    
    //todo method display blank placeholder

    //todo string storing letter.

    //todo boolean whether letter has been guessed.

    //todo method returns leetter if guessed/underscore if not guesed? Huh

    //todo function takes character as argument checks against this character, updating stored boolean

    //toString for display, javascript auto calls when casting object to string.