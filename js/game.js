import { WORDS } from "./words.js";
var guessNumber = 1;
var id = function(id) { return document.getElementById(id); };
var word;
var yellow = "#B59F39";
var green = "#538D4E";

function StartGame(){
    word = WORDS[Math.floor(Math.random()*WORDS.length)];
    console.log(word);
    id("1").focus();

    id("keyboard").addEventListener("click", (e) => {
        console.log(target);
        if (!target.classList.contains("keyboard-button")) {
            return;
        }
        let key = target.textContent;
        guessLetter(key);
    });
    
    $(document).ready(function(){
        $('input').on('focusout',function(){ 
            var letter = $(this).val().toLowerCase();
            let index = word.lastIndexOf(letter)+1;
            
            if(word.includes(letter)){
                console.log(index==this.id);
                if(index==this.id)
                {
                    $(this).css('background',green);
                }
                else
                {
                    $(this).css('background',yellow);
                }
            }
            });
  });
}

function guessLetter(key){
$(25+guessNumber).value = key;
if(guessNumber<5)
    guessNumber++;
}
window.onload = StartGame;