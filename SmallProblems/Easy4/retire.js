const readline = require("readline-sync");

let age = readline.question("What is your age? ");
let retirement = readline.question("At what age would you like to retire? ");

let currentYear = (new Date()).getFullYear();
let retirementYear = currentYear + (retirement - age);

console.log(`It's ${currentYear} You will retire in ${retirementYear}`);
console.log(`You have only ${retirement - age} years of work to go!`);