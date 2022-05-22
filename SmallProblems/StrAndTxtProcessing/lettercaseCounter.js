function letterCaseCount(str) {
  let result = { lowercase: 0, uppercase: 0, neither: 0};
  let characters = str.split("");
  characters.forEach((character) => {
    if (character >= "a" && character <= "z") {
      result["lowercase"] += 1;
    } else if (character >= "A" && character <= "z") {
      result["uppercase"] += 1;
    } else {
      result["neither"] += 1;
    }
  });
  return result;
}

console.log(letterCaseCount('abCdef 123'));
console.log(letterCaseCount('AbCd +Ef'));
console.log(letterCaseCount('123'));
console.log(letterCaseCount(''));