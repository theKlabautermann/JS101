function reverseSentence(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseSentence(""));
console.log(reverseSentence("Hello World"));
console.log(reverseSentence("Reverse these words"));
