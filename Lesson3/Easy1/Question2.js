let str1 = "Come over here!"; //true
let str2 = "What's up, Doc?"; //false

function isString(expression) {
  return (expression[expression.length - 1] === "!");
}

console.log(isString(str1));
console.log(isString(str2));