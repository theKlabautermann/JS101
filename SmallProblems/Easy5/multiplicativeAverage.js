function multiplicativeAverage(arr) {
  let product = arr.reduce((element, accumulator) => accumulator * element);
  let result = product / arr.length;
  return result.toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));