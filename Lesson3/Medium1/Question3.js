function factors(number) {
  let divisor = number;
  let factors = [];
  if (number < 0) {
    return "Please enter a positive number.";
  } else if (number === 0) {
    return [];
  } else {
    while (divisor > 0) {
      if (number % divisor === 0) {
        factors.push(number / divisor);
      }
      divisor -= 1;
    }
  }
  return factors;
}

console.log(factors(4));
console.log(factors(0));
console.log(factors(-4));

/*
Bonus:
The Modulo operation on line 10 makes sure that we have a factor
by making sure that you can divide the entered number by the divisor
without having a rest. Only if can be divided without a fraction,
are we looking at a factor.

If we replace line 11 with factors.push(divisor)
the code still works but will add the factors backwards.
(You could still reverse/sort the array in the end, though.)
*/