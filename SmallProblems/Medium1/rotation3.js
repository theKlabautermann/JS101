function maxRotation(num) {
  let arr = String(num).split("");
  let length = arr.length;

  for (let index = 0; index < length; index++) {
    let rotatingNumber = arr[index];
    arr.splice(index, 1);
    arr.push(rotatingNumber);
  }
  return Number(arr.join(""));
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845