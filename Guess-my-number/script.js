'use strict';
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random()*20)+1;
const display = function(className,value){
    document.querySelector(className).textContent = value;
}
document.querySelector('.check').addEventListener('click',function(){
    let guess = Number(document.querySelector('.guess').value);
    if(!guess){
        display('.message','Not a number');
    }else if(guess===secretNumber){
        if(score>highscore){
            highscore = score;
        }
        display('.number',secretNumber);
        display('.message',"You guessed it right 🙌🙌 ");
        display('.highscore',highscore);
        document.querySelector('body').style.backgroundColor = '#8ff53c';
        document.querySelector('.number').style.width = '30rem';
    }else if(guess !== secretNumber){
        if(score>1){
            score--;
            display('.score',score);
            display('.message',guess > secretNumber ?'too high...🙈🦧📈':'too low...📉');
        }else{
            display('.message','☹You lost the game! Try Again');
            display('.score',0);
            document.querySelector('body').style.backgroundColor = '#f80404';
        }
    }    
});
document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('body').style.backgroundColor = '#48404d';
    document.querySelector('.number').style.width = '15rem';
    display('.number','?');
    document.querySelector('.guess').value = ' ';
    secretNumber = Math.trunc(Math.random()*20)+1;
    score = 20;
    display('.score',score);
    display('.message','Start guessing...');
});
