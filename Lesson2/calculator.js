const readline = require('readline-sync');
const prompts = require('./calculator_messages.json');
let language;

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function getLanguage() {
  prompt("Choose Language/Sprache auswählen:\n0) Englisch 1) Deutsch");
  language = readline.question();

  while (!['1', '0'].includes(language)) {
    prompt("Please choose one of the offered languages/Bitte wähle eine angebotene Sprache");
    language = readline.question();
  }

  switch (language) {
    case '0':
      language = "Englisch";
      break;
    case '1':
      language = "Deutsch";
      break;
  }
}

function getNumberOne() {
  prompt(prompts[language]["firstNumber"]);
  let input = readline.question();

  while (invalidNumber(input)) {
    prompt(prompts[language]["numberError"]);
    input = readline.question();
  }
  return input;
}

function getNumberTwo() {
  prompt(prompts[language]["secondNumber"]);
  let input = readline.question();

  while (invalidNumber(input)) {
    prompt(prompts[language]["numberError"]);
    input = readline.question();
  }
  return input;
}

function getOperation() {
  prompt(prompts[language]["operator"]);
  let input = readline.question();

  while (!['1', '2', '3', '4'].includes(input)) {
    prompt(prompts[language]["operatorError"]);
    input = readline.question();
  }
  return input;
}

function askAnotherCalculation() {
  prompt(prompts[language]["closing"]);
  let input = readline.question().toLowerCase();
  while (!['y', 'n'].includes(input)) {
    prompt(prompts[language]["closingError"]);
    input = readline.question();
  }
  return input;
}

getLanguage();

prompt(prompts[language]["welcome"]);

while (true) {

  let number1 = getNumberOne();

  let number2 = getNumberTwo();

  let operation = getOperation();

  if (!((Number(number2) === 0) && (operation === '4'))) {
    let result;
    switch (operation) {
      case '1':
        result = Number(number1) + Number(number2);
        break;
      case '2':
        result = Number(number1) - Number(number2);
        break;
      case '3':
        result = Number(number1) * Number(number2);
        break;
      case '4':
        result = Number(number1) / Number(number2);
        break;
    }
    prompt(prompts[language]["result"] + `${result}`);
  } else {
    prompt(prompts[language]["divideError"]);
  }

  let openQuestion = askAnotherCalculation();
  if (openQuestion === "n") {
    break;
  }
}