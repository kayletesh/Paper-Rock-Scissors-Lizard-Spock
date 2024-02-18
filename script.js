// get the computer's choice.
function getComputerSelection() {
  // create an array for the choices.
  const selection = ["paper", "rock", "scissors", "lizard", "spock"];
  // set randomizer for the choices.
  const randomSelection = Math.floor(Math.random() * 5);
  // return the choice.
  return selection[randomSelection];
}

// get player choice
function getPlayerSelection(currentRound) {
  // define player's selection
  let playerSelection;
  // create a prompt to grab the player's choice and begin the game.
  playerSelection = prompt(
    `Round ${currentRound} FIGHT! Pick one: Paper, Rock, Scissors, Lizard, or Spock!`
  );
  // set player's choice to lowercase.
  playerSelection = playerSelection.toLowerCase();

  //return choice.
  return playerSelection;
}

// create the function that will run the game, and house all results.

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

// function should return the result of each matchup.

//create a function to trigger after final round, called Game Over.
function gameOver(finalPlayerScore, finalComputerScore) {
  if (playerScore > computerScore) {
    return "YOU WIN!!!!";
  } else if (playerScore < computerScore) {
    return "YOU LOSE...";
  }
}

//set the loop for 10 rounds.
//this function will also hold the method to modify the score each round.
//define values to set player score and computer score to 0 at the start of game.
let playerScore = 0;
let computerScore = 0;
//create a for loop.
// define current round, up to-round, and increment value in the for loop.
for (currentRound = 1; currentRound <= 10; currentRound++) {
  //define computer choice and the player choice(set this one's () to current round)
  const playerSelection = getPlayerSelection(currentRound);
  const computerSelection = getComputerSelection();
  // define result as the function that plays the game.
  const result = playGame(playerSelection, computerSelection);
  // console.log the result, as well as a message to show each round.
  //   console.log(result);
  // create an if statement inside the for loop to collect score data. set result.includes to gather the data desired. method in this function should be the incrementation of the score.
  if (result.includes("WIN")) {
    playerScore++;
    console.log(`Round ${currentRound}... ${result}`);
  } else if (result.includes("Lose")) {
    computerScore++;
    console.log(`Round ${currentRound}... ${result}`);
  } else if (result.includes("ERROR")) {
    currentRound--;
    console.log(
      `ERROR!! Resetting Round... Please Choose Either Paper, Rock, Scissors, Lizard, or Spock!`
    );
  } else if (result.includes("Borg")) {
    currentRound = 99;
  }
  // console.log current comp and player scores.
  console.log(
    `Computer Score = ${computerScore}, Player Score = ${playerScore}`
  );
  // alert the results.

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

//set parameters to final player score, and final comp score.
//function should be an if statement.
//set final win/lose condition.
//alert final result.
//dont forget to add how to play again.
