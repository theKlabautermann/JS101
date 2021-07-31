const readline = require('readline-sync');
let prompts;

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt("Choose Language/Sprache auswählen:\n0) Englisch 1) Deutsch");
let language = readline.question();

while (!['1', '0'].includes(language)) {
  prompt("Please choose one of the offered languages/Bitte wähle eine angebotene Sprache");
  language = readline.question();
}

switch (language) {
  case '0':
    prompts = require("./calculator-languages/Englisch.js");
    break;
  case '1':
    prompts = require("./calculator-languages/Deutsch.js");
    break;
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(prompts.welcome);

let openQuestion = 1;
while (Number(openQuestion)) {

  prompt(prompts.firstNumber);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(prompts.numberError);
    number1 = readline.question();
  }

  prompt(prompts.secondNumber);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(prompts.numberError);
    number2 = readline.question();
  }

  prompt(prompts.operator);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(prompts.operatorError);
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(prompts.result + `${output}`);
  prompt(prompts.closing);

  openQuestion = readline.question();
  while (!['1', '0'].includes(openQuestion)) {
    prompt(prompts.closingError);
    openQuestion = readline.question();
  }

}