function halvsies (arr) {
  let result = [];
  let first = [];
  let second = [];

  for (let index = 0; index < Math.ceil(arr.length / 2); index++) {
    first.push(arr[index]);
  }
  for (let index = Math.ceil(arr.length / 2); index < arr.length; index++) {
    second.push(arr[index]);
  }

  result.push(first);
  result.push(second);
  return result;
}

console.log(halvsies([1, 2, 3, 4]));
console.log(halvsies([1, 5, 2, 4, 3]));
console.log(halvsies([5]));
console.log(halvsies([]));