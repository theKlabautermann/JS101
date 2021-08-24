function doubleNumbers(numbers, factor) {
  for (let counter = 0; counter < numbers.length; counter += 1) {
    numbers[counter] *= factor;
  }
}

let myNumbers = [1, 4, 3, 7, 2, 6];
doubleNumbers(myNumbers, 2);
console.log(myNumbers); // => [2, 8, 6, 14, 4, 12]