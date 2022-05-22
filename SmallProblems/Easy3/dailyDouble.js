function crunch(inputString) {
  let result = "";
  let lastCharacter = "";
  for (let index = 0; index < inputString.length; index++) {
    if (inputString[index] === lastCharacter) {
      continue;
    } else {
      lastCharacter = inputString[index];
      result += inputString[index];
    }
  }
  return result;
}

console.log(crunch("ddaaiillyy ddoouubbllee"));
console.log(crunch("4444abcabccba"));
console.log(crunch("ggggggggggggggg"));
console.log(crunch("a"));
console.log(crunch(""));
console.log("hello"[5]);
console.log("o" === "hello"[5]);