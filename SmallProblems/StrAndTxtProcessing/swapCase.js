function swapCase(str) {
  let characters = str.split("");
  return characters.map((character) => {
    if (character >= "a" && character <= "z") {
      return character.toUpperCase();
    } else if (character >= "A" && character <= "Z") {
      return character.toLowerCase();
    } else {
      return character;
    }
  }).join("");
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"