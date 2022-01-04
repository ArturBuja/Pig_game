'use strict';
// selecting elements

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = '0';
score1El.textContent = '0';
diceEl.classList.add('hidden');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = () => {
  document.getElementById(`current--${ activePlayer }`).textContent = '0';
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', () => {
  if (playing) {


// 1. Wygenerowanie losowej wartości kostki
    const dice = Math.trunc(Math.random() * 6) + 1;

//  2. Pokazanie kostki
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${ dice }.png`;

//  3. Dodaj wartość kostki do aktualnych punktów
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${ activePlayer }`).textContent = currentScore;
    } else {

      //  4. jeśli wyszło 1, przejdź do kolejnego gracza
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {


//Dodanie aktywnemu graczy punktów
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${ activePlayer }`).textContent = String(scores[activePlayer]);
//  sprawdź, czy ma 100 pkt
    if (scores[activePlayer] >= 100) {
      playing = false;

      // jeśli tak koniec gry
      document.querySelector(`.player--${ activePlayer }`).classList.add('player--winner');
      document.querySelector(`.player--${ activePlayer }`).classList.remove('player--active');
      diceEl.classList.add('hidden');


    } else {

      // jeśli nie to zmień gracza z 0-1 / 1-0
      switchPlayer();

    }
  }
});

btnNew.addEventListener('click',()=>{
  document.querySelector('.current-score').textContent = `0`
  score0El.textContent = `0`
  score1El.textContent = `0`
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active')
  playing = true;
})
