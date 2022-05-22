const vowels = ["a", "e", "i", "o", "u"];

function doubleConstants(str) {
  let arr = str.split("").map((element) => {
    if (vowels.includes(element) || !isLetter(element)) return element;
    return element + element;
  });
  return arr.join("");
}

function isLetter(char) {
  return char.toLowerCase() >= "a" && char.toLowerCase() <= "z";
}

console.log(doubleConstants("String"));
console.log(doubleConstants("Hello-world"));
console.log(doubleConstants("July 4th"));
console.log(doubleConstants(""));