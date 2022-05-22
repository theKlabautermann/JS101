function sum(num) {
  let arr = String(num).split("");
  return arr.reduce(((accumulator, currentValue) => {
    return accumulator + Number(currentValue);
  }), 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45