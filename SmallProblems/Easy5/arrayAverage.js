function average(arr) {
  let result = arr.reduce((accumulator, element) => accumulator + element);
  return Math.floor(result / arr.length);
}

//Further Exploration
function average2(arr) {
  let result = 0;
  arr.forEach((element) => {
    result += element;
  });
  return Math.floor(result / arr.length);
}

console.log(average2([1, 5, 87, 45, 8, 8]));
console.log(average2([9, 47, 23, 95, 16, 52]));
