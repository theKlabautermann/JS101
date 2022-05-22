function merge(arr1, arr2) {
  let mergedArr = [];
  let index1 = 0;
  let index2 = 0;
  for (let turns = 0; turns < (arr1.length + arr2.length); turns++) {
    if (arr1[index1] <= arr2[index2] || arr2[index2] === undefined) {
      mergedArr.push(arr1[index1]);
      index1 += 1;
    } else if (arr1[index1] > arr2[index2] || arr1[index1] === undefined) {
      mergedArr.push(arr2[index2]);
      index2 += 1;
    } else {
      break;
    }
  }
  return mergedArr;
}

// console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
// console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
// console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
// console.log(merge([1, 4, 5], []));             // [1, 4, 5]

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([1, 1, 3, undefined, undefined], [2, undefined, 2]));
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
console.log(merge(['Sue', 'Pete', 'Alice'], ['Tyler', 'Rachel', 'Kim', 'Bonnie']));