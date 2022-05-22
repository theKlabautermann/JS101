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

function isPalindrome(str) {
  let length = str.length;
  for (let index = 0; index < Math.floor(length / 2); index++) {
    if (str[index] !== str[(length - 1) - index]) return false;
  }
  return true;
}

function palindromes(str) {
  return substrings(str).filter((element) => isPalindrome(element) && element.length > 1);
}

console.log(palindromes("abcd"));
console.log(palindromes("madam"));
console.log(palindromes("hello-madam-did-madam-goodbye"));
console.log(palindromes("knitting casettes"));