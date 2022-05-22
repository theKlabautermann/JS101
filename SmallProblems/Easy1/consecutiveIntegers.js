const readline = require("readline-sync");

console.log("Please enter an integer greater than 0:");
let int = Number(readline.question());
while (!(int > 0) || Number.isNaN(int)) {
  console.log("Sorry, that's not a valid choice.");
  console.log("Please enter an integer greater than 0:");
  int = Number(readline.question());
}

console.log('Enter "s" to compute the sum. or "p" to compute the product.');
let operation = readline.question().trim().toLowerCase();
while (!(["s", "p"].includes(operation))) {
  console.log("Sorry, that's not a valid choice.");
  console.log('Enter "s" to compute the sum. or "p" to compute the product.');
  operation = readline.question().trim().toLowerCase();
}

let sum = int;
let product = int;

if (operation === "s") {
  for (let num = int - 1; num >= 1; num--) {
    sum += num;
  }
  console.log(`The sum of the integers between 1 and ${int} is ${sum}`);
}

if (operation === "p") {
  for (let num = int - 1; num >= 1; num--) {
    product *= num;
  }
  console.log(`The product of the integers between 1 and ${int} is ${product}`);
}

//Further Exploration
function computeSum(arr) {
  return arr.reduce((accumulator, num) => accumulator + num);
}

function computeProduct(arr) {
  return arr.reduce((accumulator, num) => accumulator * num);
}

console.log(computeSum([1, 2, 3, 4, 5]));
console.log(computeProduct([1, 2, 3, 4, 5, 6]));