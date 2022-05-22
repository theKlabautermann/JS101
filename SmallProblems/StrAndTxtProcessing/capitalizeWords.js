function wordCap(str) {
  let words = str.split(" ");
  return words.map((word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'