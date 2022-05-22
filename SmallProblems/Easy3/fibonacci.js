function fibonacci(position) {
  if (position === 1n) {
    return 1n;
  } else if (position === 2n) {
    return 1n;
  } else {
    return fibonacci(position - 1n) + fibonacci(position - 2n);
  }
}

function findFibonacciIndexByLength(inputNum) {
  let fibonacciNum;
  let fibonacciIndex = 1n;
  while (true) {
    fibonacciNum = fibonacci(fibonacciIndex);
    if (String(fibonacciNum).length === inputNum) break;
    fibonacciIndex += 1n;
  }
  return fibonacciIndex;
}

//Alternative Solution:
function findFibonacciIndexByLength2(inputNum) {
  let firstNumber = 1n;
  let secondnumber = 1n;
  let position = 3n;
  let fibonacci;
  while (true) {
    fibonacci = firstNumber + secondnumber;
    if (String(fibonacci).length >= inputNum) break;
    secondnumber = firstNumber;
    firstNumber = fibonacci;
    position += 1n;
  }
  return position;
}

console.log(findFibonacciIndexByLength(2n) === 7n);
console.log(findFibonacciIndexByLength(3n) === 12n);
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);