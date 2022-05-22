const readline = require("readline-sync");

let number1 = readline.question("Enter the 1st number:");
let number2 = readline.question("Enter the 2nd number:");
let number3 = readline.question("Enter the 3rd number:");
let number4 = readline.question("Enter the 4th number:");
let number5 = readline.question("Enter the 5th number:");
let number6 = readline.question("Enter the last number:");

let numbers = [number1, number2, number3, number4, number5];
if (numbers.includes(number6)) {
  console.log(`The number ${number6} appears in ${numbers.join(", ")}`);
} else {
  console.log(`The number ${number6} does not appears in ${numbers.join(", ")}`);
}


//Further Exploration
function isIncluded(arr, val) {
  return arr.some((element) => element > val);
}