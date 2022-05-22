function featured(startNum) {
  for (let number = startNum + 1; number <= 9876543201; number++) {
    if (number % 7 === 0 && number % 2 !== 0 && uniqueDigits(number)) {
      return number;
    }
  }
  return "There is no possible number that fulfills those requirements.";
}

function uniqueDigits(num) {
  let count = {};
  let str = String(num);
  for (let digit = 0; digit < str.length; digit++) {
    if (count[str[digit]]) {
      count[str[digit]] += 1;
    } else {
      count[str[digit]] = 1;
    }
  }
  return Object.values(count).every((element) => element === 1);
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."