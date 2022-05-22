function leadingSubstrings(str) {
  let result = [];
  for (let indexEnd = 1; indexEnd <= str.length; indexEnd++) {
    result.push(str.substring(0, indexEnd));
  }
  return result;
}

function substrings(str) {
  let result = [];
  let subStrArr = [];
  for (let indexStart = 0; indexStart < str.length; indexStart++) {
    subStrArr.push(leadingSubstrings(str.substring(indexStart)));
  }
  for (let index = 0; index < subStrArr.length; index++) {
    result = [...result, ...subStrArr[index]];
  }
  return result;
}

console.log(substrings("abcde"));

//Further Exploration
function substrings2(str) {
  let subStrArr = str.split("")
    .map((element) => str)
    .map((element, index) => element.substring(index));
  return subStrArr.reduce((accumulator, element) => {
    return accumulator.concat(leadingSubstrings(element));
  }, []);
}

console.log(substrings2("abcde"));
