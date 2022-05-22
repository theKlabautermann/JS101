function staggeredCase(str) {
  let index = 0;
  return str.split("")
    .map((character) => {
      if (character.toLowerCase() >= "a" && character.toLowerCase() <= "z") {
        if (index % 2 === 0) {
          index += 1;
          return character.toUpperCase();
        } else {
          index += 1;
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

//Further Exploration
function staggeredCase2(str, nonAlphas = false) {
  let index = 0;
  return str.split("")
    .map((character) => {
      if (character.toLowerCase() >= "a" && character.toLowerCase() <= "z") {
        if (index % 2 === 0) {
          index += 1;
          return character.toUpperCase();
        } else {
          index += 1;
          return character.toLowerCase();
        }
      } else {
        if (nonAlphas) index += 1;
        return character;
      }
    })
    .join("");
}

console.log(staggeredCase2('I Love Launch School!', true));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase2('ALL_CAPS', true));                     // "AlL_CaPs"
console.log(staggeredCase2('ignore 77 the 4444 numbers', true));   // "IgNoRe 77 ThE 4444 nUmBeRs"
console.log(staggeredCase2('I Love Launch School!', false));       // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase2('ALL_CAPS', false));                    // "AlL_CaPs"
console.log(staggeredCase2('ignore 77 the 4444 numbers', false));  // "IgNoRe 77 ThE 4444 nUmBeRs"