const readline = require('readline-sync');
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];

let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === "rock" && ["scissors", "lizard"].includes(computerChoice)) ||
      (choice === "paper" && ["rock", "spock"].includes(computerChoice)) ||
      (choice === "scissors" && ["paper", "lizard"].includes(computerChoice)) ||
      (choice === "lizard" && ["paper", "spock"].includes(computerChoice))) {
    prompt("You win!");
  } else if (choice === computerChoice) {
    prompt("It's a tie");
  } else {
    prompt("Computer wins!");
  }
}

function updateScores(choice, computerChoice) {
  if ((choice === "rock" && ["scissors", "lizard"].includes(computerChoice)) ||
      (choice === "paper" && ["rock", "spock"].includes(computerChoice)) ||
      (choice === "scissors" && ["paper", "lizard"].includes(computerChoice)) ||
      (choice === "lizard" && ["paper", "spock"].includes(computerChoice))) {
    playerScore += 1;
  } else if (choice === computerChoice) {
    playerScore += 0;
  } else {
    computerScore += 1;
  }
}

function returnUserChoice() {
  let input = readline.question();
  let shorts = ["r", "p", "s", "l", "S"];
  if (shorts.includes(input)) {
    input = VALID_CHOICES[shorts.indexOf(input)];
  }
  return input;
}

function displayGrandWinner() {
  if (playerScore === 3) {
    prompt("You are the grand winner!");
  } else if (computerScore === 3) {
    prompt("The computer is the grand winner!");
  }
}

while (playerScore < 3 && computerScore < 3) {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let choice = returnUserChoice();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = returnUserChoice();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);
  updateScores(choice, computerChoice);
  roundsPlayed += 1;

  displayGrandWinner();

  if (roundsPlayed === 1) {
    prompt("Do you want to go for best out of five (y/n)?");
    let answer = readline.question().toLowerCase();
    while (answer[0] !== "n" && answer[0] !== "y") {
      prompt("Please enter 'y' or 'n'. ");
      answer = readline.question();
    }

    if (answer[0] !== 'y') break;
  }
}