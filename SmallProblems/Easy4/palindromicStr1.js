function isPalindrome(str) {
  let length = str.length;
  for (let index = 0; index < Math.floor(length / 2); index++) {
    if (str[index] !== str[(length - 1) - index]) return false;
  }
  return true;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true