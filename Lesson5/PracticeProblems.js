//Practice Problem 1
let arr = ['10', '11', '9', '7', '8'];
arr.sort((a, b) => Number(b) - Number(a));
console.log(arr);


//Practice Problem 2
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a, b) => Number(a['published']) - Number(b['published']));
console.log(books);


//Practice Problem 3
let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};

console.log(arr1[2][1][3]);
console.log(arr2[1]['third'][0]);
console.log(arr3[2]['third'][0][0]);
console.log(obj1['b'][1]);
console.log(Object.keys(obj2['third'])[0]);


//Practice Problems 4
let arr1 = [1, [2, 3], 4];

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

let obj1 = { first: [1, 2, [3]] };

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

arr1[1][1] = 4;
arr2[2] = 4;
obj1['first'][2][0] = 4;
obj2['a']['a'][2] = 4;

console.log(arr1);
console.log(arr2);
console.log(obj1);
console.log(obj2);


//Practice Problem 5
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

console.log(Object.entries(munsters).reduce((accumulator, currentValue) => {
  if (currentValue[1]['gender'] === 'male') {
    return accumulator + currentValue[1]['age'];
  } else {
    return accumulator + 0;
  }
}, 0));


//Practice Problem 6
let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

Object.entries(munsters).forEach((person) => {
  console.log(`${person[0]} is a ${person[1]['age']}-year-old ${person[1]['gender']}`);
});


//Practice Problem 7
let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;
console.log(a);
console.log(b);
console.log(arr);

//Expected Result: a = 2, b = [3, 8], arr = [4, [3, 8]]


//Practice Problem 8
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach((arr) => {
  arr.forEach((str) => {
    str.split("").forEach((letter) => {
      switch (letter) { //intended fall-through for any vowel
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
          console.log(letter);
          break;
      }
    });
  });
});


//Practice Problem 9
let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

console.log(arr.map((subArr) => {
  if (typeof subArr[0] === "number") {
    return subArr.slice().sort((a, b) => a - b);
  } else {
    return subArr.slice().sort();
  }
}));


//PracticeProblem 10
let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

console.log(arr.map((subArr) => {
  if (typeof subArr[0] === "number") {
    return subArr.slice().sort((a, b) => b - a);
  } else {
    return subArr.slice().sort().reverse();
  }
}));

//Option B: After acknowledging that I kind of cheated with my answer above
console.log(arr.map((subArr) => {
  if (typeof subArr[0] === "number") {
    return subArr.slice().sort((a, b) => b - a);
  } else {
    return subArr.slice().sort((a, b) => {
      if (a > b) {
        return -1;
      } else if (a < b) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}));

//Practice Problem 11
let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
let newArr = arr.map((obj) => {
  let newObj = {};
  for (let prop in obj) {
    newObj[prop] = obj[prop] + 1;
  }
  return newObj;
});
console.log(newArr);


//Practice Problem 12
let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
let newArr = arr.map((subArr) => {
  return subArr.filter((num) => (num % 3) === 0);
});
console.log(newArr);


//Practice Problem 13
let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) => {
  a = a.filter((num) => num % 2 !== 0)
    .reduce((aSum, aCurrent) => aSum + aCurrent);
  b = b.filter((num) => num % 2 !== 0)
    .reduce((bSum, bCurrent) => bSum + bCurrent);
  return a - b;
});

console.log(arr);


//Practice Problem 14
let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let arr = [];
Object.values(obj).forEach((produce) => {
  if (produce['type'] === 'fruit') {
    arr.push(produce['colors'].map((color) => {
      return color[0].toUpperCase() + color.slice(1);
    }));
  } else {
    arr.push(produce['size'].toUpperCase());
  }
});
console.log(arr);


//Practice Problem 15
let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];
let result = arr.filter((obj) => {
  let nums = [];
  Object.values(obj).forEach((subArr) => {
    nums = [...nums, ...subArr];
  });
  return nums.every((num) => num % 2 === 0);
});
console.log(result);


//Practice Problem 16
let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
let obj = {};
arr.forEach((element) => {
  obj[element[0]] = element[1];
});
console.log(obj);


//Practice Problem 17
function createUUID() {
  let result = "";
  let chars = "0123456789abcdef";
  for (let i = 0; i < 8; i += 1) {
    result += (chars[Math.floor(Math.random() * (chars.length))]);
  }
  result += "-";
  for (let i = 0; i < 3; i += 1) {
    for (let ii = 0; ii < 4; ii += 1) {
      result += (chars[Math.floor(Math.random() * (chars.length))]);
    }
    result += "-";
  }
  for (let i = 0; i < 12; i += 1) {
    result += (chars[Math.floor(Math.random() * (chars.length))]);
  }
  result += "-";
  return result;
}
let solution = createUUID();
console.log(solution);