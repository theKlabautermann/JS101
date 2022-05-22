/*
Problem
I need a function that takes a number
and returns the number as a string.

Examples
integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"

Data Structures
Number as input
Array for Converting
String as output

Algorithm
-Set function integerToString(int)
  -Set result = []
  -Set digits = ["0", 1", "2", "3", "4", "5", "6", "7", "8", "9"]
  -int.forEach(num => result.push(digits[num]))
  -return result.join()

*/
function integerToString(inputInteger) {
  let result = [];
  let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  if (inputInteger === 0) return "0";
  while (inputInteger > 0) {
    result.push(digits[inputInteger % 10]);
    inputInteger = Math.floor(inputInteger / 10);
  }
  return result.reverse().join("");
}

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"