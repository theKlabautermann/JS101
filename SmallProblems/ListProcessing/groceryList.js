function buyFruit(nestedArr) {
  let result = [];
  nestedArr.forEach((element) => {
    for (let index = 0; index < element[1]; index++) {
      result.push(element[0]);
    }
  });
  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));