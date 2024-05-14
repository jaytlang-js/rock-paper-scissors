const TEST_ITERATIONS = 5;

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
      style = "font-weight: italic";
      break;
  }

  console.log(`%c${message}`, style);
}

function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * options.length);

  return options[index];
}

function testComputerChoice() {
  console.groupCollapsed("Tests for `getComputerChoice()`");

  for (let i = 0; i < TEST_ITERATIONS; i++) {
    let result = getComputerChoice();
    writeMessage(`Computer choice: ${result}`);
  }

  console.groupEnd();
}

writeMessage("Welcome to Rock Paper Scissors!", "welcome");

testComputerChoice();
