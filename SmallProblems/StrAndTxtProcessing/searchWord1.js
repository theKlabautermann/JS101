const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

function regex(word) {
  return new RegExp(`${word}`, "gi");
}

function searchWord(word, text) {
  let matches = text.match(regex(word));
  if (matches === null) {
    return 0;
  } else {
    return matches.length;
  }
}

console.log(searchWord('sed', text));      // 3
console.log(searchWord("yxyxyxy", text));      // 0

//Further Exploration
function searchWord2(word, text) {
  let matches = text.match(regex2(word));
  if (matches === null) {
    return 0;
  } else {
    return matches.length;
  }
}

function regex2(word) {
  return new RegExp(`\\b${word}\\b`, "gi");
}


console.log(searchWord2("qui", text));      // 4