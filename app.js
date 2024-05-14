const TEST_ITERATIONS = 5;
const VALID_MOVES = ["rock", "paper", "scissors"];

function writeMessage(message, type) {
  let style = "";

  switch (type) {
    case "welcome":
      style = "font-weight: bold; color: darkorange";
      break;
    case "bold":
      style = "font-weight: bold";
      break;
    case "italic":
      style = "font-style: italic";
      break;
  }

  console.log(`%c${message}`, style);
}

function getComputerChoice() {
  let index = Math.floor(Math.random() * VALID_MOVES.length);
  return VALID_MOVES[index];
}

function testComputerChoice() {
  console.groupCollapsed("Tests for `getComputerChoice()`");

  for (let i = 0; i < TEST_ITERATIONS; i++) {
    let result = getComputerChoice();
    writeMessage(`Computer choice: ${result}`);
  }

  console.groupEnd();
}

function getHumanChoice() {
  writeMessage("Waiting for user input...", "italic");

  for (;;) {
    let rawInput =
      prompt("Please enter one of 'rock', 'paper', or 'scissors'") ?? "";
    let input = rawInput.toLocaleLowerCase();

    if (VALID_MOVES.includes(input)) {
      return input;
    } else {
      console.error(
        "%cInvalid input!%c Please enter one of 'rock', 'paper', or 'scissors'.",
        "font-weight: bold",
        "font-weight: regular"
      );
    }
  }
}

function testHumanChoice() {
  for (let i = 0; i < 3; i++) {
    let result = getHumanChoice();
    writeMessage(`Human selected ${result}`);
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    writeMessage("It's a tie!", "bold");
    return;
  }

  let humanWins = false;
  switch (humanChoice) {
    case "rock":
      humanWins = computerChoice === "scissors";
      break;
    case "paper":
      humanWins = computerChoice === "rock";
      break;
    case "scissors":
      humanWins = computerChoice === "paper";
      break;
  }

  if (humanWins) {
    humanScore++;
    writeMessage(`You win! ${humanChoice} beats ${computerChoice}`, "bold");
  } else {
    computerScore++;
    writeMessage(`You lose! ${computerChoice} beats ${humanChoice}`, "bold");
  }
}

function clearScore() {
  humanScore = computerScore = 0;
}

function testPlayRound() {
  console.groupCollapsed("Tests for `testPlayRound()`");

  for (humanChoice of VALID_MOVES) {
    for (computerChoice of VALID_MOVES) {
      writeMessage(
        `Trying { human: ${humanChoice} ; computer: ${computerChoice} }`
      );
      playRound(humanChoice, computerChoice);
    }
  }

  // Put the score back; playRound will have mutated it
  clearScore();
  console.groupEnd();
}

function start() {
  // Let the games begin!
}

testComputerChoice();
testPlayRound();
// testHumanChoice(); // probably don't call me on the hot startup path

writeMessage("Welcome to Rock Paper Scissors!", "welcome");
writeMessage("Call start() to begin the game.", "italic");
