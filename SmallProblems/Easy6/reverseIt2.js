function reverseWords(str) {
  return str.split(" ").map((element) => {
    if (element.length > 5) return element.split("").reverse().join("");
    return element;
  }).join(" ");
}

console.log(reverseWords("Professional"));
console.log(reverseWords("Walk around the block"));
console.log(reverseWords("Launch School"));