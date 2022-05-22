function isPalindrome(str) {
  let length = str.length;
  for (let index = 0; index < Math.floor(length / 2); index++) {
    if (str[index] !== str[(length - 1) - index]) return false;
  }
  return true;
}

function isPalindromic(num) {
  return isPalindrome(String(num));
}

console.log(isPalindromic(34543));        // true
console.log(isPalindromic(123210));       // false
console.log(isPalindromic(22));           // true
console.log(isPalindromic(5));            // true