/*
Problem:
I need a function that takes a nested array as an argument,
calls itself until it reaches a level in which there are two arrays,
then merges the two arrays in a sorted fashion,
and returns the combined & sorted array.

Example:
[[[9], [5]], [[7], [1]]] -->
[[5, 9], [1, 7]] -->
[1, 5, 7, 9]

[[[3], [2]], [1]] -->
[[2, 3], [1]] -->
[1, 2, 3]

Data Structure:
Input: Array
Output: Array

Algorithm:
- Set function connect(arr)
  - If arr has two elements that both contain exclusively non-arrays
    - return merge(arr[0], arr[1]);
  - Else
    - merge(connect[0], connect[1])

*/

function merge(array1, array2) {
  let copy1 = array1.slice();
  let copy2 = array2.slice();
  let result = [];

  while (copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);
}

function connect(arr) {
  if (arr[0].every((subArr) => subArr.every((element) => !Array.isArray(element)))) {
    return merge(arr[0], arr[1]);
  } else {
    return merge(connect(arr[0]), connect(arr[1]));
  }
}

console.log(connect([[[9], [5]], [[7], [1]]]));

