function century(year) {
  let century = Math.ceil(year / 100);
  let ending;
  let lastDigit = String(century)[String(century).length - 1];
  let lastTwoDigits = String(century)[String(century).length - 2] +
  String(century)[String(century).length - 1];
  if (["11", "12", "13"].includes(lastTwoDigits)) {
    ending = "th";
  } else if (lastDigit === "1") {
    ending = "st";
  } else if (lastDigit === "2") {
    ending = "nd";
  } else if (lastDigit === "3") {
    ending = "rd";
  } else {
    ending = "th";
  }
  return `${century}${ending}`;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"