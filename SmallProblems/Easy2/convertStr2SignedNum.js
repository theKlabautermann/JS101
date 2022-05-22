function stringToSignedInteger(str) {
  let exponent = 0;
  let result = 0;
  let negative = false;
  let digits = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };
  if (str[0] === "-" || str[0] === "+") {
    if (str[0] === "-") negative = true;
    str = str.substring(1);
  }
  for (let character = str.length - 1; character >= 0; character--) {
    result += digits[str[character]] * Math.pow(10, exponent);
    exponent += 1;
  }
  if (negative) result *= -1;
  return result;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true