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

function signedIntegerToString(num) {
  if (num < 0) {
    return "-" + integerToString(num * (-1));
  } else if (num === 0) {
    return "0";
  } else {
    return "+" + integerToString(num);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");