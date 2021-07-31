let output; //only declared so that it doesn't throw an error.

console.log("Calculator set to English.");

exports.welcome = "Welcome to Calculator!";

exports.firstNumber = "What's the first number?";

exports.secondNumber = "What's the second number?";

exports.operator = "What operation would you like to perform\n1) Add 2) Substract 3) Multiply 4) Divide";

exports.numberError = "Hmm... that doesn't look like a valid number.";

exports.operatorError = "Must choose 1, 2, 3 or 4";

exports.closing = "Do you want to perform another calculation?\n0) No 1) Yes";

exports.closingError = "Must choose 0 or 1";

exports.result = "The result is: ";