function staggeredCase(str) {
  return str.split("")
    .map((character, index) => {
      if (character.toLowerCase() >= "a" && character.toLowerCase() <= "z") {
        if (index % 2 === 0) {
          return character.toUpperCase();
        } else {
          return character.toLowerCase();
        }
      } else {
        return character;
      }
    })
    .join("");
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"