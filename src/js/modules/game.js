/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores
let roundScore
let activePlayer
let gamePlaying
let dice = 0
let anotherDice = 0
let diceNumber
let winningScore = 100
let secondDice = document.getElementById('secondDice')

const game = document.querySelector('.wrapper')
const roll = document.querySelector('.btn-roll')
const hold = document.querySelector('.btn-hold')
const newGame = document.querySelector('.btn-new')
const player1Panel = document.querySelector('.player-1-panel')
const player2Panel = document.querySelector('.player-2-panel')
const currentPlayer1 = document.getElementById('current-1')
const currentPlayer2 = document.getElementById('current-2')
const diceImg = document.querySelector('.dice')
const gameSettings = document.querySelector('#gameSettings')

// Create starting parameters and game reset
const init = () => {
  const player1Name = document.getElementById('name-1')
  const player2Name = document.getElementById('name-2')
  const playerCurrentScore = document.querySelectorAll('.player-current-score')
  const playerScore = document.querySelectorAll('.player-score')

  scores = [0, 0]
  roundScore = 0
  activePlayer = 1
  gamePlaying = true
  diceNumber = 1
  player1Name.textContent = 'Player 1'
  player2Name.textContent = 'Player 2'
  playerCurrentScore.forEach((currentScore) => {
    currentScore.textContent = 0
  })
  playerScore.forEach((score) => {
    score.textContent = 0
  })
  player1Panel.classList.remove('winner', 'loser')
  player2Panel.classList.remove('winner', 'loser')
  if (!player1Panel.classList.contains('active')) {
    player1Panel.classList.add('active')
    player2Panel.classList.remove('active')
  }
  if (diceImg.style.display.includes('none')) {
    diceImg.style.display = 'block'
  }
  gameSettings.reset()
  diceImg.removeAttribute('id', 'firstDice')
  if (secondDice) {
    secondDice.remove()
  }

  if (process.env.NODE_ENV !== 'production') {
    console.log(gamePlaying)
    console.log(scores)
    console.log(scores[activePlayer - 1])
  }
}

init()

// Randomise the number on clicking the dice roll button.
const randomizeDice = () => {
  return Math.floor(Math.random() * 6) + 1
}

// Change current player
const nextPlayer = () => {
  // eslint-disable-next-line no-unused-expressions
  activePlayer === 1 ? (activePlayer = 2) : (activePlayer = 1)
  roundScore = 0
  if (process.env.NODE_ENV !== 'production') {
    console.log(`roundScore is: ${roundScore}`)
  }
  currentPlayer1.textContent = 0
  currentPlayer2.textContent = 0
  player1Panel.classList.toggle('active')
  player2Panel.classList.toggle('active')
}

// Create second dice and change winning score
gameSettings.addEventListener('submit', (e) => {
  e.preventDefault()
  diceNumber = gameSettings.diceNumber.checked ? 2 : 1
  if (gameSettings.winningScore.value) {
    winningScore = gameSettings.winningScore.value
  }
  if (gameSettings.diceNumber.checked && diceNumber !== 1) {
    if (!secondDice) {
      secondDice = document.createElement('img')
      secondDice.src = '/assets/images/dice-5.png'
      secondDice.setAttribute('alt', 'Dice')
      secondDice.setAttribute('id', 'secondDice')
      secondDice.classList.add('dice')
      diceImg.setAttribute('id', 'firstDice')
      game.append(secondDice)
    }
    if (!gameSettings.winningScore.value) {
      winningScore = 200
    }
    if (process.env.NODE_ENV !== 'production') {
      console.log(secondDice)
      console.log(winningScore)
    }
  } else {
    if (secondDice) {
      secondDice.remove()
    }
    diceImg.removeAttribute('id', 'firstDice')
  }
})

// Change the current score and image to the new randomised number.
roll.addEventListener('click', () => {
  // Check if the game is active
  if (gamePlaying) {
    dice = randomizeDice()

    // Display the current dice number and change dice image to match rolled number.
    const current = document.querySelector(`#current-${activePlayer}`)
    diceImg.src = `/assets/images/dice-${dice}.png`
    if (diceNumber === 2) {
      anotherDice = randomizeDice()
      const diceSecond = document.getElementById('secondDice')
      diceSecond.src = `/assets/images/dice-${anotherDice}.png`
    }

    // Lose score if user rolls a 6 in a row
    if (dice !== 1 && anotherDice !== 1) {
      // Update the round score IF the rolled number was NOT a 1
      // Add score
      roundScore += diceNumber === 2 ? dice + anotherDice : dice
      current.textContent = roundScore
    } else {
      // Change player and reset roundScore and active classes.
      nextPlayer()
    }

    if (process.env.NODE_ENV !== 'production') {
      console.log(`Dice number: ${dice}`)
      if (diceNumber === 2) {
        console.log(`Second Dice number: ${anotherDice}`)
      }
      console.log(`Active player is: player${activePlayer}`)
      console.log(`Held scores are: ${scores[activePlayer - 1]}`)
      console.log(`current scores are: ${roundScore}`)
      console.log(scores[0], scores[1])
    }
  }
})

// Save current score
hold.addEventListener('click', () => {
  if (gamePlaying) {
    // Add CURRENT score to GLOBAL score
    scores[activePlayer - 1] += roundScore
    if (process.env.NODE_ENV !== 'production') {
      console.log(`roundScore is: ${roundScore}`)
      console.log(`player${activePlayer} score is: ${scores[activePlayer - 1]}`)
    }

    // Update UI
    const playerScore = document.querySelector(`#score-${activePlayer}`)
    playerScore.textContent = scores[activePlayer - 1]

    // Check if player has won the game
    if (scores[activePlayer - 1] >= winningScore) {
      const player = document.querySelector(`.player-${activePlayer}-panel`)
      const playerName = document.querySelector(`#name-${activePlayer}`)
      player.classList.remove('active')
      player.classList.add('winner')
      if (player === player1Panel) {
        player2Panel.classList.add('loser')
      } else {
        player1Panel.classList.add('loser')
      }
      playerName.textContent = 'WINNER'
      diceImg.style.display = 'none'
      gamePlaying = false

      if (process.env.NODE_ENV !== 'production') {
        console.log(`player${activePlayer} has won!`)
      }
    } else {
      // Switch to the next player
      nextPlayer()
    }
  }
})

// Start new game
newGame.addEventListener('click', init)
