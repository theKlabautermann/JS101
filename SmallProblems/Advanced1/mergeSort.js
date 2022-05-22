/*
Problem:
I need a function that takes an array as argument and
returns a new array by sorting the passed array using
merge sort.

Rules:
- Elements of the passed array will be either all numbers or all strings.

Example:
mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
mergeSort([5, 3]);                 // [3, 5]
mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

Data Structure:
Input: Array
Output: Array

Algorithm:
- Set function mergeSort(inputArr)
  1 Break down the array into nested subarrays.
  2 Merge the nested subarrays back together in proper order.

[9, 5, 7, 1] -->
[[9, 5], [7, 1]] -->
[[[9], [5]], [[7], [1]]]

- Set function breakDown(inputArr)
  - If inputArr only has one element that isn't an array
    - return it
  - Else
    - breakDown(inputArr.slice(first half), inputArr.slice(second half))
*/

function breakDown(inputArr) {
  if (inputArr.length < 2) {
    return inputArr;
  } else {
    let center = Math.floor(inputArr.length / 2);
    return [breakDown(inputArr.slice(0, center)), breakDown(inputArr.slice(center))];
  }
}

console.log(breakDown([9, 5, 7, 1]));