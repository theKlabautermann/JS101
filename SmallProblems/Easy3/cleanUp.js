function cleanUp(inputStr) {
  let result = replaceNonAlphabetics(inputStr);
  return removeRepeatingSpaces(result);
}

function replaceNonAlphabetics(str) {
  let result = str;
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let nonAlphabetics = [];
  for (let index = 0; index < str.length; index++) {
    if (!alphabet.includes(str[index].toLowerCase())) {
      nonAlphabetics.push(str[index]);
    }
  }
  for (let character = 0; character < nonAlphabetics.length; character++) {
    result = result.replaceAll(nonAlphabetics[character], " ");
  }
  return result;
}

function removeRepeatingSpaces(inputString) {
  let result = "";
  for (let index = 0; index < inputString.length; index++) {
    if (inputString[index] === " " && inputString[index - 1] === " ") {
      continue;
    } else {
      result += inputString[index];
    }
  }
  return result;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "