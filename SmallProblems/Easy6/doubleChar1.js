function repeater(str) {
  let result = [];
  let arr = str.split('');
  arr.forEach((element) => {
    for (let turn = 1; turn < 3; turn++) {
      result.push(element);
    }
  });
  return result.join('');
}

console.log(repeater('Hello'));
console.log(repeater('Good job!'));
console.log(repeater(''));