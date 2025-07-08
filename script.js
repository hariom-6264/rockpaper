let playerName = "You";

function startGame() {
  const nameInput = document.getElementById("playerName").value.trim();
  if (nameInput) {
    playerName = nameInput;
  }
  document.getElementById("user-input").style.display = "none";
  document.querySelector(".game-container").style.display = "block";
}

function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('user-choice').innerText = `${playerName}: ${userChoice}`;
  document.getElementById('computer-choice').innerText = `Hari Om: ${computerChoice}`;

  let result = "";

 if (userChoice === computerChoice) {
  result = "It's a Draw!";
} else if (
  (userChoice === 'rock' && computerChoice === 'scissors') ||
  (userChoice === 'paper' && computerChoice === 'rock') ||
  (userChoice === 'scissors' && computerChoice === 'paper')
) {
  result = `${playerName} Wins!`;
} else {
  result = `${playerName} Loses!`;
}


  document.getElementById('winner').innerText = `Result: ${result}`;
  document.getElementById('choices').style.display = 'none';
  document.getElementById('play-again').style.display = 'inline-block';
}

function resetGame() {
  document.getElementById('user-choice').innerText = `${playerName}: -`;
  document.getElementById('computer-choice').innerText = "Hari Om: -";
  document.getElementById('winner').innerText = "Result: -";

  document.getElementById('choices').style.display = 'flex';
  document.getElementById('play-again').style.display = 'none';
}
