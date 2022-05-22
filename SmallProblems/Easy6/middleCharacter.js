function centerOf(str) {
  let arr = str.split("");
  let length = arr.length;
  if (length % 2 === 1) {
    return arr[Math.floor(length / 2)];
  } else {
    return arr[(length / 2) - 1] + arr[length / 2];
  }
}

console.log(centerOf("I love JavaScript"));
console.log(centerOf("Launch School"));
console.log(centerOf("Launch"));
console.log(centerOf("Launchschool"));
console.log(centerOf("x"));
