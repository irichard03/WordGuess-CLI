//todo constructor called letter
function Letter (pick){
    this.character = pick;
    this.guessed = false;
    this.placHolder = "_";
    
    this.toString = function(){
        console.log(this.character);
    };
//Function takes in argument and returns character if it matches a character in the word?
    this.checkLetter = function(guess){
        if(guess === this.character){
            this.guessed = true;
            return this.character;
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