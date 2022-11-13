import { WORDS } from "./words.js";
var guessNumber = 1;
var id = function(id) { return document.getElementById(id); };
var word;
var yellow = "#B59F39";
var green = "#538D4E";
var correctLetters = 0;
var score = 0;
var highScore = 0;
var row =1;
var guessedLetters = [];

function StartGame(){
    word = WORDS[Math.floor(Math.random()*WORDS.length)];
    console.log(word);
    id("1").focus();
    correctLetters=0;
    updateScore();
    id("keyboard").addEventListener("click", (e) => {
        const target = e.target
        if (!target.classList.contains("keyboard-button")) {
            return;
        }
        let key = target.textContent;
        id(guessNumber).value = key;
        guessNumber++;
        row=30 % guessNumber;
        id(guessNumber).focus();
        updateScore();
    });
    
    $(document).ready(function(){
        $('input').on('focusout',function(){ 
            var letter = $(this).val().toLowerCase();
            let index = word.lastIndexOf(letter)+1;
             
            if(word.includes(letter)){
                if(index==this.id)
                {
                    $(this).css('background',green);
                    correctLetters++;
                    guessedLetters.push(letter);
                    if(!guessedLetters.includes(letter))
                    score += (5-row) * 50;
                    if(correctLetters==5)
                    {
                        window.alert("YOU WON!!");
                    }
                }
                else
                {
                    $(this).css('background',yellow);
                    if(!guessedLetters.includes(letter))
                        score += (5-row) * 10;
                }
            }
            updateScore();
        });
  });
}
function updateScore(){
    id("score").textContent = "SCORE : "+score;
    id("highscore").textContent = "HIGH SCORE : "+highScore;
}

window.onload = StartGame;