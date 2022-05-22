function multiplyAllPairs(arr1, arr2) {
  let result = [];
  for (let index1 = 0; index1 < arr1.length; index1++) {
    for (let index2 = 0; index2 < arr2.length; index2++) {
      result.push(arr1[index1] * arr2[index2]);
    }
  }
  return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));