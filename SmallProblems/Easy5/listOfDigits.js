function digitList(num) {
  let digits = num;
  let result = [];
  while (digits / 10 >= 1) {
    result.push(digits % 10);
    digits = Math.floor(digits / 10);
  }
  result.push(digits);
  return result.reverse();
}

//Further Exploration
function digitList2(num) {
  let digits = String(num).split("");
  return digits.map((element) => Number(element));
}

console.log(digitList2(12345));
console.log(digitList2(7));
console.log(digitList2(375290));
console.log(digitList2(444));