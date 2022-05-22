function interleave(arr1, arr2) {
  let result = [];
  let index = 0;
  while (!(arr1.length === 0) || !(arr2.length === 0)) {
    if (index % 2 === 0) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
    index += 1;
  }
  return result;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));

//Further Exploration
function interleave2(arr1, arr2) {
  let result = [];
  let index1 = 0;
  let index2 = 1;
  arr1.forEach((element) => {
    result[index1] = element;
    index1 += 2;
  });
  arr2.forEach((element) => {
    result[index2] = element;
    index2 += 2;
  });

  return result;
}

console.log(interleave2([1, 2, 3], ['a', 'b', 'c']));
