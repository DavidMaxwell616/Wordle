import { WORDS } from "./words.js";


function StartGame(){
    word = WORDS[Math.floor(Math.random()*WORDS.length)].toUpperCase();
    console.log(word);
    position = column = row = 1;
    guessedLetters = 0;
    id(position).focus();
    for (let index = 0; index < word.length; index++) {
        correctLetters[index]=false;
    }
    updateScore();
    id("keyboard-cont").addEventListener("click", (e) => {
        const target = e.target;
        if (!target.classList.contains("keyboard-button")) {
            return;
        }
        let key = target.textContent.toUpperCase();
        id(position).value = key;
        guessedLetters++;
        checkLetter(key,word[column-1]);
        column<5 ? column++ : column=1;
        position++;
        row = position % 30;
        id(position).focus();
        updateScore();
    });
}

function ResetGame(){
    id("resetButton").style.display = "none";
    for (let index = 1; index < position; index++) {
        id(index).value = "";
        $(id(position)).css('background',grey);
    }
}

function checkLetter(letter1,letter2){
    if(word.includes(letter1) && letter1!=letter2)
    {
        $(id(position)).css('background',yellow);
        score += (5-row) * 10;   
    }
    if(letter1==letter2)
    {
        $(id(position)).css('background',green);
        if(!correctLetters[column-1])
        {
            correctLetters[column-1] = true;
            score += (5-row) * 50;
            if(correctLetters.every(v => v === true))
            {
                id("message").innerHTML = "<H2>YOU WON!!</H2>";
                if (score>highScore)
                    highScore = score;
                id("resetButton").style.display = "block";
                return;
            }
        }   
    }
    if(guessedLetters==30)
    {
        id("message").innerHTML = "<H2>YOU RAN OUT OF GUESSES!!</H2>";
        if (score>highScore)
            highScore = score;
        id("resetButton").style.display = "block";
    }
}

$(document).ready(function(){
    $('input').on('keydown',function(e){ 
        e.preventDefault();
    });
    var button = id("resetButton");
    button.style.display = "none";
    button.addEventListener("click", ResetGame);
 });


function updateScore(){
    id("score").textContent = "SCORE : "+score;
    id("highscore").textContent = "HIGH SCORE : "+highScore;
}

window.onload = StartGame;