function alphaNumericCharacters(str) {
  let arr = [];
  for (let index = 0; index < str.length; index++) {
    if (isLetter(str[index]) || isNumber(str[index])) {
      arr.push(str[index].toLowerCase());
    }
  }
  return arr;
}

function isLetter(character) {
  return (character.toLowerCase() >= "a") && (character.toLowerCase() <= "z");
}

function isNumber(character) {
  return (character >= "0") && (character <= "9");
}

function isRealPalindrome(str) {
  let characters = alphaNumericCharacters(str);
  return characters.join() === characters.reverse().join();
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case doesn't matter)
console.log(isRealPalindrome("Madam I'm Adam"));      // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false