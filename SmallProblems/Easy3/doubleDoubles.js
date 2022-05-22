function doubleNumber(inputNumber) {
  let str = String(inputNumber);
  let length = str.length;
  if (length % 2 !== 0) return false;
  return str.substring(0, (length / 2)) === str.substring(length / 2, length);
}

function twice(inputNumber) {
  if (doubleNumber(inputNumber)) return inputNumber;
  return 2 * inputNumber;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676