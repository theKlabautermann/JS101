const numbers = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function wordToDigit(str) {
  let transformedStr = str;
  for (let word in numbers) {
    transformedStr = transformedStr.replaceAll(regex(word), numbers[word]);
  }
  return transformedStr;
}

function regex(word) {
  return new RegExp(`\\b${word}\\b`, "gi");
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."