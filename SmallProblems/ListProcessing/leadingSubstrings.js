function leadingSubstrings(str) {
  let result = [];
  for (let indexEnd = 1; indexEnd <= str.length; indexEnd++) {
    result.push(str.substring(0, indexEnd));
  }
  return result;
}

console.log(leadingSubstrings('abc'));
console.log(leadingSubstrings('a'));
console.log(leadingSubstrings('xyzzy'));

//Further Exploration
function leadingSubstrings2(str) {
  let result = {};
  let substr = "";
  let arr = str.split("");
  arr.reduce((accumulator, element) => {
    substr = accumulator + element;
    if (result[substr]) {
      return substr;
    } else {
      result[substr] = 1;
      return substr;
    }
  }, "");
  return Object.keys(result);
}

console.log(leadingSubstrings2('abc'));
console.log(leadingSubstrings2('a'));
console.log(leadingSubstrings2('xyzzy'));