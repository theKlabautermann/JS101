function rotateRightmostDigits(num, count) {
  let arr = String(num).split("");
  let length = arr.length;
  arr.splice(length - count, 1);
  arr.push(String(num)[length - count]);
  return Number(arr.join(""));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917