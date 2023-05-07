// Display a welcome note when the page loads
console.log("Welcome to Rock, Paper, Scissors! Let's play!");

// Function to generate the computer's choice of 'Rock', 'Paper', or 'Scissors' randomly
function computerPlay() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to get the player's choice from the user input
function playerPlay() {
  return prompt('Enter your choice: Rock, Paper, or Scissors');
}

// Function to play a single round of the game
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.trim().toLowerCase();

  const validChoices = ['rock', 'paper', 'scissors'];

  if (!validChoices.includes(playerSelection)) {
    return 'Invalid input! Please enter Rock, Paper, or Scissors.';
  }

  if (playerSelection === computerSelection.toLowerCase()) {
    return "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'paper' && computerSelection === 'Rock') ||
    (playerSelection === 'scissors' && computerSelection === 'Paper')
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

// Function to play a 5-round game
function game() {
  let playerScore = 0;
  let computerScore = 0;
  let round = 1;

  while (round <= 5) {
    const playerSelection = playerPlay();

    // Check if the prompt is closed (cancelled) by the user
    if (playerSelection === null) {
      console.log("Game Over. User closed the prompt.");
      break;
    }

    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    if (result.includes('Invalid input')) {
      console.log(result);
    } else {
      console.log(`Round ${round}: ${result}`);

      if (result.includes('Win')) {
        playerScore++;
      } else if (result.includes('Lose')) {
        computerScore++;
      }

      round++;
    }
  }

  // Only display the final score and game outcome if the game wasn't cancelled
  if (round > 5) {
    console.log(`Final Score - You: ${playerScore}, Computer: ${computerScore}`);

    if (playerScore > computerScore) {
      console.log("You are the winner!");
    } else if (playerScore < computerScore) {
      console.log("Computer wins!");
    } else {
      console.log("It's a tie!");
    }
  }
}

// Call the game function to start the game
game();
