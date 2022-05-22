function multiply(num1, num2) {
  return num1 * num2;
}

function square(num) {
  return multiply(num, num);
}

console.log(square(5) === 25);
console.log(square(-8) === 64);

//Further Exploration
function power(num, exponent) {
  let product = num;
  for (let i = 1; i < exponent; i++) {
    product = multiply(product, num);
  }
  return product;
}