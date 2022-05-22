function sumOfSums(arr) {
  let sumsArr = sums(arr);
  return sumsArr.reduce((accumulator, element) => accumulator + element);
}

function sums(arr) {
  let result = [];
  for (let endIndex = 0; endIndex < arr.length; endIndex++) {
    let sum = 0;
    for (let index = 0; index <= endIndex; index++) {
      sum += arr[index];
    }
    result.push(sum);
  }
  return result;
}

console.log(sumOfSums([3, 5, 2]));
console.log(sumOfSums([1, 5, 7, 3]));
console.log(sumOfSums([4]));
console.log(sumOfSums([1, 2, 3, 4, 5]));