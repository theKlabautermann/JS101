let vowels = ["a", "e", "i", "o", "u"];

function removeVowels(arr) {
  return arr.map((element) => element.split("")
                                     .filter((character) => !vowels.includes(character))
                                     .join(""));
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));