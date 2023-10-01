'use strict';

//selectors
const btnRollEl = document.querySelector('.btn--roll');
const btnNewEl = document.querySelector('.btn--new');
const btnHoldEl = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

let score = [0,0];
let currentScore ;
let activeplayer ;
let playing ;

//initialisation
const init = function(){
    score = [0,0];
    currentScore = 0;
    activeplayer = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');
    activeplayer = 0;
    playing = true;
}
init();


const switchPlayer = function(){
    currentScore = 0;
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    activeplayer = activeplayer==0?1:0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}
btnRollEl.addEventListener('click',function(){
    if(playing){
        const dice = Math.trunc(Math.random()*6+1);
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        if(dice != 1){
            currentScore +=dice;
            document.getElementById(`current--${activeplayer}`).textContent = currentScore;
        }else{
            switchPlayer();
        }
    }
});

btnHoldEl.addEventListener('click',function(){
    if(playing){
        score[activeplayer] += currentScore;
        document.getElementById(`score--${activeplayer}`).textContent = score[activeplayer];
        if(score[activeplayer]>=20){
            document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');
            playing = false;
        }
        else{
            switchPlayer();
        }
    }
});

btnNewEl.addEventListener('click',function(){
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');
    init();
}); 
