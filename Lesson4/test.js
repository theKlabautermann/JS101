let produce = {
  apple: 'Fruit',
  carrot: "Vegetable",
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(obj) {
  let fruits = {};
  for (let item in obj) {
    if (obj[item] === 'Fruit') {
      fruits[item] = obj[item];
    }
  }
  return fruits;
}

console.log(selectFruit(produce)); //=> {apple: 'Fruit', pear: 'Fruit'}