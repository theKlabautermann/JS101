function logLines(length) {
  let result = "+";
  for (let i = 0; i < length; i++) {
    result += "-";
  }
  result += "+";
  console.log(result);
}

function logEmptyRow(length) {
  let result = "|";
  for (let i = 0; i < length; i++) {
    result += " ";
  }
  result += "|";
  console.log(result);
}

function logInBox(inputString) {
  let messageRow = ` ${inputString} `;
  logLines(messageRow.length);
  logEmptyRow(messageRow.length);
  console.log(`|${messageRow}|`);
  logEmptyRow(messageRow.length);
  logLines(messageRow.length);
}

logInBox("To boldly go where no one has gone before");
logInBox("");