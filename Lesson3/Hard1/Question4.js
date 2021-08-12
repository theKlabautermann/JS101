function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  } else {
    for (let i = 0; i < dotSeparatedWords.length; i += 1) {
      if (!isAnIpNumber(dotSeparatedWords[i])) {
        return false;
      }
    }
    return true;
  }
}

console.log(isDotSeparatedIpAddress("4.5.5"));
console.log(isDotSeparatedIpAddress("1.2.3.4.5"));
console.log(isDotSeparatedIpAddress("10.4.5.11"));
