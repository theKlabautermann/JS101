function fibonacci(num) {
  if (num <= 2) return 1;
  let num1 = 1;
  let num2 = 1;
  let fibonacci = 1;
  for (let steps = 3; steps <= num; steps++) {
    fibonacci = num1 + num2;
    num2 = num1;
    num1 = fibonacci;
  }
  return fibonacci;
}

console.log(fibonacci(20));
console.log(fibonacci(50));
console.log(fibonacci(75));