let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

function reverse(input) {
  let arr = input.slice();
  arr.reverse();
  return arr;
}

function sort(input) {
  let arr = input.slice();
  arr.sort((num1, num2) => num2 - num1);
  return arr;
}

numbers = [1, 2, 3, 4, 5];
numbers = reverse(numbers);
console.log(numbers);

numbers = [1, 2, 3, 4, 5];
numbers = sort(numbers);
console.log(numbers);