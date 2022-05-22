function wordSizes(str) {
  let words = str.split(" ");
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