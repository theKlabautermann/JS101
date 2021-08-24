//Practice Problem 1
console.log([1, 2, 3].filter(num => 'hi'));
//Expected Output: [1, 2, 3]
//Filter adds all elements for which the callback returns a truthy value
// 'hi', which will be returned every time, is truthy,
//therefore all elements will be added & returned

//Practice Problem 2
let result2 = [1, 2, 3].map(num => {
  num * num;
});
console.log(result2);
//Expected Output: [undefined, undefined, undefined]
//Since the callback function is no one-liner, it lacks an implicit return
//Since we don't have a return statement either,
//the callback function will transform every element into undefined.

//Practice Problem 3
[1, 2, 3].map(num => num * num);
//Expected Result: [1, 4, 9]
//Since we have implicit returns now,
//the callback will return each element squared

//Practice Problem 4
['ant', 'bear', 'caterpillar'].pop().length;
//Expected Output: 11
//Pop will mutate the array and return the last element ('caterpillar')
//'caterpillar'.length will then evaluate to 11.

//Practice Problem 5
[1, 2, 3].every(num => {
  return num = num * 2;
});
//Expected Result Callback: 2, 4, 6?
//Although it's weird that we make the assignment in the return statement
//Expected Result every: True
//every returns true if the callback evaluated to a truthy value
//in all iterations, which it does in this case

//Practice Problem 6
let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);

//From MDN: The fill() method changes all elements in an array
//to a static value, from a start index (default 0) to an end
//index (default array.length). It returns the modified array.

//It is destructive.
//We can find out that it's destructive by checking MDN or
//by running the code and checking the value of arr after line 2

//Practice Problem 7
['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});
//Expected Result: [undefined, 'bear']
//Since we only return something if it's longer than 3 characters
//the first iteration will return undefined and the second 'bear'

//Practice Problem 8
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

function objectify(arr) {
  let obj = {};
  arr.forEach((element, index) => {
    obj[element] = index;
  });
  return obj;
}

console.log(objectify(flintstones));

//Practice Problem 9
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
let result = Object.values(ages).reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(result);

//Practice Problem 10
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
console.log(Object.values(ages).sort((firstEl, secondEl) => firstEl - secondEl)[0]);

//Practice Problem 11
let statement = "The Flintstones Rock";
function letterFrequency(str) {
  let obj = {};
  str.split('').filter(letter => letter !== ' ').forEach((letter) => {
    if (obj.hasOwnProperty(letter)) {
      obj[letter] += 1;
    } else {
      obj[letter] = 1;
    }
  });
  return obj;
}
console.log(letterFrequency(statement));
