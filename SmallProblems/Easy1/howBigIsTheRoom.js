/*
const readline = require("readline-sync");
const CONVERSION_FACTOR = 10.7639;

console.log("Enter the length of the room in meters:");
let length = Number(readline.question());

console.log("Enter the width of the room in meters");
let width = Number(readline.question());

let areaSQM = (length * width).toFixed(2);
let areaSQF = (areaSQM * CONVERSION_FACTOR).toFixed(2);

console.log(`The area of the room is ${areaSQM} square meters (${areaSQF} square feet).`);
*/
//Alternate Version

const readline = require("readline-sync");
const CONVERSION_FACTOR = 10.7639;
let areaConverted;

console.log("Which input type do you want to use: meters (m) or feet (f)?");
let system = readline.question();

console.log("Enter the length of the room in meters:");
let length = Number(readline.question());

console.log("Enter the width of the room in meters");
let width = Number(readline.question());

let area = (length * width).toFixed(2);
if (system === "m") areaConverted = (area * CONVERSION_FACTOR).toFixed(2);
if (system === "f") areaConverted = (area / CONVERSION_FACTOR).toFixed(2);

if (system === "m") console.log(`The area of the room is ${area} square meters (${areaConverted} square feet).`);
if (system === "f") console.log(`The area of the room is ${area} square feet (${areaConverted} square meters).`);
