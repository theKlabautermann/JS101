function multisum(num) {
  let sum = 0;
  for (let currentNumber = 1; currentNumber <= num; currentNumber++) {
    if (currentNumber % 3 === 0 || currentNumber % 5 === 0) {
      sum += currentNumber;
    }
  }
  return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168