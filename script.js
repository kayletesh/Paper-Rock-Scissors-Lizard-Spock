// get the computer's choice.
function getComputerSelection() {
  const selection = ["paper", "rock", "scissors", "lizard", "spock"];
  const randomSelection = Math.floor(Math.random() * selection.length);
  return selection[randomSelection];
}

// get player choice
function getPlayerSelection(currentRound) {
  const playerSelection = prompt(
    `Round ${currentRound} FIGHT! Pick one: Paper, Rock, Scissors, Lizard, or Spock!`
  ).toLowerCase();

  return playerSelection;
}

function playGame(playerSelection, computerSelection) {
  // tie statement
  if (playerSelection === computerSelection) {
    return `Computer Chose: ${computerSelection}, IT'S A TIE!`;
    // player selects paper:
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `Computer Chose: ${computerSelection}, Paper Covers Rock... YOU WIN!!!`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return `Computer Chose: ${computerSelection}, Scissors Cuts Paper... You Lose...`;
  } else if (playerSelection === "paper" && computerSelection === "lizard") {
    return `Computer Chose ${computerSelection}, Lizard Eats Paper... You Lose...`;
  } else if (playerSelection === "paper" && computerSelection === "spock") {
    return `Computer Chose ${computerSelection}, Papers Disprove Spock... YOU WIN!!!`;
  }
  //player selects rock
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `Computer Chose: ${computerSelection}, Rock Breaks Scissors... YOU WIN!!!`;
  } else if (playerSelection === "rock" && computerSelection === "lizard") {
    return `Computer Chose: ${computerSelection}, Rock Crushes Lizard... YOU WIN!!!`;
  } else if (playerSelection === "rock" && computerSelection === "spock") {
    return `Computer Chose ${computerSelection}, Spock Vaporizes Rock... You Lose...`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return `Computer Chose ${computerSelection}, Paper Covers Rock... You Lose...`;
  }
  //player selects scissors
  else if (playerSelection === "scissors" && computerSelection === "lizard") {
    return `Computer Chose: ${computerSelection}, Scissors Decapitate Lizard... YOU WIN!!!`;
  } else if (playerSelection === "scissors" && computerSelection === "spock") {
    return `Computer Chose: ${computerSelection}, Spock Smashes Scissors... You Lose...`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `Computer Chose: ${computerSelection}, Scissors Cut Paper... YOU WIN!!!`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return `Computer Chose: ${computerSelection}, Rock Breaks Scissors... You Lose...`;
  }
  //player selects lizard
  else if (playerSelection === "lizard" && computerSelection === "spock") {
    return `Computer Chose: ${computerSelection}, Lizard Poisons Spock... YOU WIN!!!`;
  } else if (playerSelection === "lizard" && computerSelection === "paper") {
    return `Computer Chose: ${computerSelection}, Lizard Eats Paper... YOU WIN!!!`;
  } else if (playerSelection === "lizard" && computerSelection === "rock") {
    return `Computer Chose: ${computerSelection}, Rock Crushes Lizard... You Lose...`;
  } else if (playerSelection === "lizard" && computerSelection === "scissors") {
    return `Computer Chose: ${computerSelection}, Scissors Decapitate Lizard... You Lose...`;
  }
  //player selects spock
  else if (playerSelection === "spock" && computerSelection === "paper") {
    return `Computer Chose: ${computerSelection}, Papers Disprove Spock... You Lose...`;
  } else if (playerSelection === "spock" && computerSelection === "rock") {
    return `Computer Chose: ${computerSelection}, Spock Vaporizes Rock... YOU WIN!!!`;
  } else if (playerSelection === "spock" && computerSelection === "scissors") {
    return `Computer Chose: ${computerSelection}, Spock Smashes Scissors... YOU WIN!!!`;
  } else if (playerSelection === "spock" && computerSelection === "lizard") {
    return `Computer Chose: ${computerSelection}, Lizard Poisons Spock... You Lose...`;
  } else if (playerSelection === "borg") {
    // secret ending
    return "Borg";
  } else {
    //error result
    return "ERROR: Please select either Paper, Rock, Scissors, Lizard, or Spock.";
  }
}

function gameOver(finalPlayerScore, finalComputerScore) {
  if (finalPlayerScore > finalComputerScore) {
    return "YOU WIN!!!!";
  } else if (finalPlayerScore < finalComputerScore) {
    return "YOU LOSE...";
  }
}

let playerScore = 0;
let computerScore = 0;
const updateScore = (result) => {
  if (result.includes("WIN")) {
    playerScore++;
    console.log(`Round ${currentRound}... ${result}`);
    return;
  } else if (result.includes("Lose")) {
    computerScore++;
    console.log(`Round ${currentRound}... ${result}`);
    return;
  } else if (result.includes("ERROR")) {
    console.log(
      `ERROR!! Resetting Round... Please Choose Either Paper, Rock, Scissors, Lizard, or Spock!`
    );
    return "error";
  } else if (result.includes("Borg")) {
    return "Borg";
  }
};

for (currentRound = 1; currentRound <= 10; currentRound++) {
  const playerSelection = getPlayerSelection(currentRound);
  const computerSelection = getComputerSelection();
  const result = playGame(playerSelection, computerSelection);
  const updatedScore = updateScore(result);
  if (updatedScore === "error") {
    currentRound--;
  } else if (updatedScore === "Borg") {
    currentRound = 99;
  }

  console.log(
    `Computer Score = ${computerScore}, Player Score = ${playerScore}`
  );

  if (currentRound === 99) {
    alert(
      "The Borg Defeats all! GAME OVER!!! You Have Been Absorbed Into The Hive Mind!"
    );
  } else if (currentRound === 10) {
    alert(
      `GAME OVER!! You scored ${playerScore}, computer scored ${computerScore}... ${gameOver(
        playerScore,
        computerScore
      )}! Refresh the page to play again!`
    );
  } else {
    alert(result);
  }
}
