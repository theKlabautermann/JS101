const readline = require("readline-sync");

console.log("What is the bill?");
let bill = Number(readline.question());

console.log("What is the tip percentage?");
let percentage = Number(readline.question()) / 100;

let tip = (bill * percentage).toFixed(2);
let total = (bill + Number(tip)).toFixed(2);

console.log(`The tip is $${tip}`);
console.log(`The total is $${total}`);