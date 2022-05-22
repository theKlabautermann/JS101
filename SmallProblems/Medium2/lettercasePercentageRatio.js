function letterPercentages(str) {
  let result = {};
  let lowercaseCount = 0;
  let uppercaseCount = 0;
  let neitherCount = 0;
  let characters = str.split("");
  characters.forEach(character => {
    if (character >= "a" && character <= "z") {
      lowercaseCount += 1;
    } else if (character >= "A" && character <= "Z") {
      uppercaseCount += 1;
    } else {
      neitherCount += 1;
    }
  });
  result["lowercase"] = ((lowercaseCount / characters.length) * 100).toFixed(2);
  result["uppercase"] = ((uppercaseCount / characters.length) * 100).toFixed(2);
  result["neither"] = ((neitherCount / characters.length) * 100).toFixed(2);
  return result;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }