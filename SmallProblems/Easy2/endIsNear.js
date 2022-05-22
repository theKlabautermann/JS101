function penultimate(str) {
  let arr = str.split(" ");
  return arr[arr.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

//Further Exploration

function penultimate2(str) {
  let arr = str.split(" ");
  if (arr.length === 0) return "";
  if (arr.length === 1) return arr[0];
  return arr[Math.floor(arr.length / 2)];
}

console.log(penultimate2("last word")); //Should log word
console.log(penultimate2("Launch School is great!")); //Should log is
console.log(penultimate2("Launch School is really great!")); //Should log is