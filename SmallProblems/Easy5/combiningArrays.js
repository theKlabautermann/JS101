function union(arr1, arr2) {
  let result = [];
  for (let index = 0; index < arr1.length; index++) {
    if (result.includes(arr1[index])) continue;
    result.push(arr1[index]);
  }
  for (let index = 0; index < arr2.length; index++) {
    if (result.includes(arr2[index])) continue;
    result.push(arr2[index]);
  }
  return result;
}

console.log(union([1, 3, 5], [3, 6, 9]));