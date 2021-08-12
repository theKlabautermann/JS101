let title = "Flintstone Family Members";

function centerTitle(title, tableLength) {
  let padding = Math.floor(((tableLength - title.length) / 2) + title.length);
  let result = title.padStart(padding, ' ');
  result = result.padEnd(tableLength, ' ');
  return result;
}

console.log(centerTitle(title, 40));