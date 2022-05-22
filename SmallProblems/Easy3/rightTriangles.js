function triangle(sideLength) {
  console.log(""); //Since the examples all have an empty row
  for (let line = 1; line <= sideLength; line++) {
    let numberOfSpaces = sideLength - line;
    console.log(`${" ".repeat(numberOfSpaces)}${"*".repeat(line)}`);
  }
}

triangle(5);
triangle(9);