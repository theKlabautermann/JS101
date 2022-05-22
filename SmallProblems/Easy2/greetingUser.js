const readline = require("readline-sync");

console.log("What is your name?");
let name = readline.question();

if (name[name.length - 1] === "!") {
  console.log(`HELLO ${name.substring(0, name.length - 1).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}