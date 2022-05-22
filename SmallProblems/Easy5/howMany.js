function countOccurrences(arr) {
  let count = {};
  arr.forEach((element) => {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  });
  for (let element in count) {
    console.log(`${element} => ${count[element]}`);
  }
}

//Further Exploration
function countOccurrences2(arr) {
  let count = {};
  arr.forEach((element) => {
    if (count[element.toLowerCase()]) {
      count[element.toLowerCase()] += 1;
    } else {
      count[element.toLowerCase()] = 1;
    }
  });
  for (let element in count) {
    console.log(`${element} => ${count[element]}`);
  }
}

let vehicles = ['Car', 'car', 'truck', 'Car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'Car', 'truck'];

countOccurrences(vehicles);
countOccurrences2(vehicles);