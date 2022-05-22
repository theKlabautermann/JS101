function sequence(count, number) {
  let result = [];
  for (let step = 0; step < count; step++) {
    result.push(number * (step + 1));
  }
  return result;
}

console.log(sequence(5, 1));
console.log(sequence(4, -7));
console.log(sequence(3, 0));
console.log(sequence(0, 1000000));