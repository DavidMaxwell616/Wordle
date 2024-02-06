import { WORDS } from "./words.js";


function StartGame(){
    word = WORDS[Math.floor(Math.random()*WORDS.length)].toUpperCase();
    console.log(word);
    id("1").focus();
    correctLetters=0;
    updateScore();
    id("keyboard-cont").addEventListener("click", (e) => {
        const target = e.target;
        if (!target.classList.contains("keyboard-button")) {
            return;
        }
        let key = target.textContent.toUpperCase();
        id(column).value = key;
        checkLetter(key,word[column-1]);
        column++;
        row=30 % column;
        id(column).focus();
        updateScore();
    });
    }

    function ClearBoard(){
        console.log('clearing board');
    }

function checkLetter(letter1,letter2){
    if(word.includes(letter1) && letter1!=letter2)
    {
        $(id(column)).css('background',yellow);
        score += (5-row) * 10;   
    }
    if(letter1==letter2)
    {
        $(id(column)).css('background',green);
        correctLetters++;
        score += (5-row) * 50;
        if(correctLetters==5)
            {
                window.alert("YOU WON!!");
                if (score>highScore)
                    highScore = score;
                ClearBoard();
                StartGame();
            }   
    }
}

    $(document).ready(function(){
        $('input').on('focusout',function(){ 
        //     var letter = $(this).val().toLowerCase();
        //     let index = word.lastIndexOf(letter)+1;
        //     console.log(letter);
        //     if(word.includes(letter)){
        //          if(index==this.id % 5)
        //         {
        //             $(this).css('background',green);
        //             correctLetters++;
        //             guessedLetters.push(letter);
        //             if(!guessedLetters.includes(letter))
        //             score += (5-row) * 50;
        //             if(correctLetters==5)
        //             {
        //                 window.alert("YOU WON!!");
        //                 if (score>highScore)
        //                     highScore = score;
        //                 ClearBoard();
        //                 StartGame();
        //             }
        //         }
        //         else
        //         {
        //             $(this).css('background',yellow);
        //             if(!guessedLetters.includes(letter))
        //                 score += (5-row) * 10;
        //         }
        //     }
        //     updateScore();
         });
  });


function updateScore(){
    id("score").textContent = "SCORE : "+score;
    id("highscore").textContent = "HIGH SCORE : "+highScore;
}

window.onload = StartGame;