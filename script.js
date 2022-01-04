'use strict';
// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// Starting conditions
score0El.textContent = '0';
score1El.textContent = '0';
diceEl.classList.add('hidden');


// Rolling dice functionality
btnRoll.addEventListener('click', ()=>{
// 1. Wygenerowanie randomowego 'dice'
  const dice = Math.trunc(Math.random() * 6) + 1;
//  2. Pokazanie kostki
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`
//  3. jeśli wyszło 1, przejdź do kolejnego gracza
})
