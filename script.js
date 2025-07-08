function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('user-choice').innerText = `You: ${userChoice}`;
  document.getElementById('computer-choice').innerText = `Hari om: ${computerChoice}`;

  let result = "";

  if (userChoice === computerChoice) {
    result = "It's a Draw!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You Win!";
  } else {
    result = "You Lose!";
  }

  document.getElementById('winner').innerText = `Result: ${result}`;

  // Hide choices and show Play Again
  document.getElementById('choices').style.display = 'none';
  document.getElementById('play-again').style.display = 'inline-block';
}

function resetGame() {
  document.getElementById('user-choice').innerText = "You: -";
  document.getElementById('computer-choice').innerText = "Hari om: -";
  document.getElementById('winner').innerText = "Result: -";

  // Show choices and hide Play Again
  document.getElementById('choices').style.display = 'flex';
  document.getElementById('play-again').style.display = 'none';
}
