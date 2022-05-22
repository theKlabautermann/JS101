function swap(str) {
  if (str.length === 1) return str;
  let arr = str.split(" ");
  arr = arr.map((element) => {
    let firstLetter = element[0];
    let lastLetter = element[element.length - 1];
    return lastLetter + element.substring(1, element.length - 1) + firstLetter;
  });
  return arr.join(" ");
}

console.log(swap("Oh what a wonderful day it is"));
console.log(swap("Abcde"));
console.log(swap("a"));
console.log(swap("ab"));
