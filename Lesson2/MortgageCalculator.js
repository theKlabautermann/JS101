//Import & Create helpful functions.
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

//get input from user, check for edge cases & return it for assignment
function receiveInput(variableName) {
  let input = readline.question();
  let emptpyCheck = input.trim() === '';
  let typeCheck = Number.isNaN(Number(input));

  while (emptpyCheck || typeCheck) {
    prompt(`Please enter the ${variableName} as a number.`);
    input = readline.question();
    emptpyCheck = input.trim() === '';
    typeCheck = Number.isNaN(Number(input));
  }
  return input;
}

prompt("Welcome to the Mortage Calculator.");

//Get necessary Input: the loan amount
prompt("Please enter the loan amount (in $).");
let loanAmount = receiveInput("loan amount");

//Get necessary Input: annual percentage rate (APR)
prompt("Please enter the annual percentage rate \n(Enter it in % so if your interest rate is 5% enter '5').");
let apr = receiveInput("annual percentage rate (APR)");

//Get necessary Input: Loan duration (both years and months)
prompt("Please enter how many years you intend to borrow money (just years, months in next question).");
let InputDurationYears = receiveInput("amount of years");

prompt("Please enter how many months (in addition to the previously mentioned years) you will burrow.");
let InputDurationMonths = receiveInput("amount of months");

//Check that the user didn't enter a non-positive duration
while (((Number(InputDurationYears) * 12) + Number(InputDurationMonths)) <= 0) {
  prompt("Please provide a positive loan term value.");

  prompt("Please enter how many years you intend to borrow money (just years, months in next question).");
  InputDurationYears = receiveInput("amount of years");

  prompt("Please enter how many months (in addition to the previously mentioned years) you will burrow.");
  InputDurationMonths = receiveInput("amount of months");
}

//Bring variables into right format
loanAmount = Number(loanAmount);
apr = Number(apr) / 100;
InputDurationYears = Number(InputDurationYears);
InputDurationMonths = Number(InputDurationMonths);

//Calculate needed variables: Total duration in months & monthly interest rate
let monthlyInterestRate = apr / 12;

let loanDuration = (InputDurationYears * 12) + InputDurationMonths;

//Calculate monthly payments
let monthlyPayment;
if (monthlyInterestRate === 0) {
  monthlyPayment = loanAmount / loanDuration;
} else {
  monthlyPayment = loanAmount * (monthlyInterestRate /
                    (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));
}

//Log results to the console
prompt(`At a monthly interest rate of ~${(100 * monthlyInterestRate).toFixed(2)}% you will make ${loanDuration} monthly payments of $${monthlyPayment.toFixed(2)} each.`);
prompt(`This will total to $${(loanDuration * monthlyPayment).toFixed(2)} ($${((loanDuration * monthlyPayment) - loanAmount).toFixed(2)} of which in interest).`);