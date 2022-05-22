function stringy(int) {
  let result = "";
  while (result.length < int) {
    if (result[result.length - 1] === "1") {
      result += "0";
    } else {
      result += "1";
    }
  }
  return result;
}

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(7));