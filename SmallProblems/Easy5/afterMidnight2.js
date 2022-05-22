const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

function afterMidnight(time) {
  let hours = Number(time.substring(0, 2));
  let minutes = Number(time.substring(3, 5));
  let outputMinutes = minutes + (hours * MINUTES_PER_HOUR);

  if (outputMinutes === MINUTES_PER_DAY) outputMinutes = 0;

  return outputMinutes;
}

function beforeMidnight(time) {
  let outputMinutes = MINUTES_PER_DAY - afterMidnight(time);
  if (outputMinutes === MINUTES_PER_DAY) outputMinutes = 0;
  return outputMinutes;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

//Further Exploration
function afterMidnight2(time) {
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let outputMinutes = minutes + (hours * MINUTES_PER_HOUR);

  if (outputMinutes === MINUTES_PER_DAY) outputMinutes = 0;

  return outputMinutes;
}

