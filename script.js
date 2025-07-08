// Game variables
let playerName = '';
let playerScore = 0;
let computerScore = 0;

// Choice emojis mapping
const choiceEmojis = {
  rock: '🪨',
  paper: '📄',
  scissors: '✂️'
};

// Start the game
function startGame() {
  const nameInput = document.getElementById('player-name');
  const name = nameInput.value.trim();
  
  if (name === '') {
    alert('Please enter your name to start playing!');
    nameInput.focus();
    return;
  }
  
  playerName = name;
  document.getElementById('player-display').textContent = `Player: ${playerName}`;
  document.getElementById('player-score-label').textContent = playerName;
  
  // Hide welcome screen and show game screen
  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('game-screen').style.display = 'block';
  
  // Reset game state
  resetGame();
}

// Main game logic
function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  // Update choice display
  document.getElementById('user-choice').textContent = `${playerName}: ${userChoice}`;
  document.getElementById('computer-choice').textContent = `Hari Om: ${computerChoice}`;
  
  // Update emoji display
  document.getElementById('user-emoji').textContent = choiceEmojis[userChoice];
  document.getElementById('computer-emoji').textContent = choiceEmojis[computerChoice];

  let result = "";
  let resultClass = "";

  // Determine winner
  if (userChoice === computerChoice) {
    result = "It's a Draw! 🤝";
    resultClass = "draw";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = `${playerName} Wins! 🎉`;
    resultClass = "win";
    playerScore++;
    updateScore();
  } else {
    result = `${playerName} Loses! 😔`;
    resultClass = "lose";
    computerScore++;
    updateScore();
  }

  // Display result with animation
  const winnerElement = document.getElementById('winner');
  winnerElement.textContent = result;
  winnerElement.className = `winner-animation ${resultClass}`;

  // Hide choices and show Play Again button
  document.getElementById('choices').style.display = 'none';
  document.getElementById('play-again').style.display = 'inline-block';
  
  // Add some delay for dramatic effect
  setTimeout(() => {
    winnerElement.className = resultClass;
  }, 600);
}

// Update scoreboard
function updateScore() {
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
}

// Reset game for next round
function resetGame() {
  document.getElementById('user-choice').textContent = `${playerName}: -`;
  document.getElementById('computer-choice').textContent = "Hari Om: -";
  document.getElementById('winner').textContent = "Choose your weapon!";
  
  // Reset emoji display
  document.getElementById('user-emoji').textContent = "❔";
  document.getElementById('computer-emoji').textContent = "❔";

  // Show choices and hide Play Again button
  document.getElementById('choices').style.display = 'flex';
  document.getElementById('play-again').style.display = 'none';
  
  // Remove any winner classes
  document.getElementById('winner').className = '';
}

// Reset entire game (including scores)
function resetCompleteGame() {
  playerScore = 0;
  computerScore = 0;
  updateScore();
  resetGame();
}

// Add Enter key support for name input
document.addEventListener('DOMContentLoaded', function() {
  const nameInput = document.getElementById('player-name');
  if (nameInput) {
    nameInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        startGame();
      }
    });
    
    // Focus on name input when page loads
    nameInput.focus();
  }
});

// Add keyboard shortcuts for game choices
document.addEventListener('keydown', function(e) {
  // Only work if game screen is visible
  if (document.getElementById('game-screen').style.display === 'none') {
    return;
  }
  
  // Only work if choices are visible (not during result display)
  if (document.getElementById('choices').style.display === 'none') {
    return;
  }
  
  switch(e.key.toLowerCase()) {
    case 'r':
      play('rock');
      break;
    case 'p':
      play('paper');
      break;
    case 's':
      play('scissors');
      break;
  }
});

// Add some fun sound effects (optional - you can remove if not needed)
function playSound(type) {
  // This is a placeholder for sound effects
  // You can add actual sound files and play them here
  console.log(`Playing ${type} sound`);
}