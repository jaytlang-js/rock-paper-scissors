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

testComputerChoice();
// testHumanChoice();

writeMessage("Welcome to Rock Paper Scissors!", "welcome");
writeMessage("Call start() to begin the game.", "italic");
