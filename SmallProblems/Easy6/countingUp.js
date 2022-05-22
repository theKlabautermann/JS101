function sequence(limit) {
  let result = [];
  for (let element = 1; element <= limit; element++) {
    result.push(element);
  }
  return result;
}

console.log(sequence(5));
console.log(sequence(3));
console.log(sequence(1));