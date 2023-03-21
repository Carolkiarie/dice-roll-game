const score0El = document.getElementById('score--0')
const score1El= document.getElementById('score--1')
const diceEl = document.querySelector('.dice')
const diceRoll = document.querySelector('.btn--roll')
const newGame = document.querySelector('.btn--new')
const holdGame = document.querySelector('.btn--hold')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const player0EL= document.querySelector('.player--0')
const player1EL= document.querySelector('.player--1')
let currentScore = 0
let activePlayer = 0
let scores = [0, 0]
let playing = true
score0El.textContent= 0
score1El.textContent= 0
const switchPlayer = ()=>{
    document.getElementById(`current--${activePlayer}`).textContent= 0
    activePlayer= activePlayer ===0 ? 1: 0
    currentScore= 0
    
 player0EL.classList.toggle('player--active')
 player1EL.classList.toggle('player--active')
}
diceRoll.addEventListener('click', ()=>{
    if(playing){
        let number = Math.trunc(Math.random() *6) +1;
    diceEl.style.display= ('block')
    diceEl.src= `/assets/dice-${number}.png`
    if(number !== 1){
        currentScore= currentScore + number
       document.getElementById(`current--${activePlayer}`).textContent= currentScore
    }else{
        switchPlayer()
    }
    }
   
})
holdGame.addEventListener('click', function() {
    if(playing)
    {
        scores[activePlayer]= currentScore + scores[activePlayer]
        document.getElementById(`score--${activePlayer}`).textContent= scores[activePlayer]
        if(scores[activePlayer] >= 100){
            playing= false
            diceEl.style.display= ('none')
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
            
        }else{
            switchPlayer()
        }}

    
})
newGame.addEventListener('click', function(){
    score0El.textContent=0 
 score1El.textContent= 0
 current0El.textContent= 0
 current1El.textContent= 0
 currentScore= 0
 scores= [0,0]
 activePlayer= 0
    playing= true
    player0EL.classList.remove('player--winner')
    player1EL.classList.remove('player--winner')
 document.querySelector(`.player--${activePlayer}`).classList.add('player--active')
 
})