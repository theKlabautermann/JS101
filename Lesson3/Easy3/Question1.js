function option1(arr) {
  while (arr.length !== 0) {
    arr.pop();
  }
}

function option2(arr) {
  arr.length = 0;
}

function option3(arr) {
  return arr.filter(element => element === undefined);
}

let numbers = [1, 2, 3, 4];
option1(numbers);
console.log(numbers);

numbers = [1, 2, 3, 4];
option2(numbers);
console.log(numbers);

numbers = [1, 2, 3, 4];
numbers = option3(numbers);
console.log(numbers);

numbers = [1, 2, 3, 4];
numbers = [];
console.log(numbers);