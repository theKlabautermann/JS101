function stringToInteger(str) {
  let exponent = 0;
  let result = 0;
  let digits = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };
  for (let character = str.length - 1; character >= 0; character--) {
    result += digits[str[character]] * Math.pow(10, exponent);
    exponent += 1;
  }
  return result;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true