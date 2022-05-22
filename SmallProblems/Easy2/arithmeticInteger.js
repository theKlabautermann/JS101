const readline = require("readline-sync");

function prompt(str) {
  console.log(`==> ${str}`);
}

prompt("Enter the first number:");
let num1 = readline.question();

prompt("Enter the second number:");
let num2 = readline.question();

prompt(`${num1} + ${num2} = ${Number(num1) + Number(num2)}`);
prompt(`${num1} - ${num2} = ${Number(num1) - Number(num2)}`);
prompt(`${num1} * ${num2} = ${Number(num1) * Number(num2)}`);
prompt(`${num1} / ${num2} = ${(Number(num1) / Number(num2)).toFixed(0)}`);
prompt(`${num1} % ${num2} = ${Number(num1) % Number(num2)}`);
prompt(`${num1} ** ${num2} = ${Number(num1) ** Number(num2)}`);
