function oddities(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) result.push(arr[i]);
  }
  return result;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

//Further Exploration
function oddities2(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) continue;
    result.push(arr[i]);
  }
  return result;
}