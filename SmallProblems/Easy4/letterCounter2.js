function isLetter(character) {
  return (character.toLowerCase() >= "a") && (character.toLowerCase() <= "z");
}

function returnLetters(arr) {
  return arr.map((element) => {
    let letters = "";
    for (let character = 0; character < element.length; character++) {
      if (isLetter(element[character])) letters += element[character];
    }
    return letters;
  });
}

function wordSizes(str) {
  let words = str.split(" ");
  words = returnLetters(words);
  let obj = {};
  if (str === "") return obj;
  for (let index = 0; index < words.length; index += 1) {
    if (obj.hasOwnProperty(String((words[index]).length))) {
      obj[String((words[index]).length)] += 1;
    } else {
      obj[String((words[index]).length)] = 1;
    }
  }
  return obj;
}

console.log(wordSizes("Four score and seven."));
console.log(wordSizes("Hey diddle diddle, the cat and the fiddle!"));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(""));