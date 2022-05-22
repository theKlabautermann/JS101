function negative(num) {
  return Math.abs(num) * (-1);
}

console.log(negative(5));
console.log(negative(-3));
console.log(negative(0));

//Further Exploration
function negative2(num) {
  return num < 0 ? num : num * (-1);
}

console.log(negative2(5));
console.log(negative2(-3));
console.log(negative2(0));
