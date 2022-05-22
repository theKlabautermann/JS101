function sumSquareDifference(num) {
  return squareOfSum(num) - sumOfSquares(num);
}

function squareOfSum(num) {
  let sum = 0;
  for (let step = 1; step <= num; step++) {
    sum += step;
  }
  return sum ** 2;
}

function sumOfSquares(num) {
  let sum = 0;
  for (let square = 1; square <= num; square++) {
    sum += square ** 2;
  }
  return sum;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150