const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

function timeOfDay(inputMinutes) {
  let cleanedTime = removeDays(inputMinutes);
  let outputHours = Math.floor(cleanedTime / MINUTES_PER_HOUR);
  let outputMinutes = Math.floor(cleanedTime % MINUTES_PER_HOUR);
  if (inputMinutes >= 0) {
    return `${doubleDigits(outputHours)}:${doubleDigits(outputMinutes)}`;
  } else {
    return `${doubleDigits(23 - outputHours)}:${doubleDigits(60 - outputMinutes)}`;
  }
}

function removeDays(minutes) {
  let simplifiedMinutes = minutes;
  while (simplifiedMinutes > MINUTES_PER_DAY) {
    simplifiedMinutes -= MINUTES_PER_DAY;
  }
  while (simplifiedMinutes < -MINUTES_PER_DAY) {
    simplifiedMinutes += MINUTES_PER_DAY;
  }
  return Math.abs(simplifiedMinutes);
}

function doubleDigits(time) {
  if (String(time).length === 1) {
    return `0${time}`;
  } else {
    return `${time}`;
  }
}

console.log(timeOfDay(-0));
console.log(timeOfDay(-3));
console.log(timeOfDay(35));
console.log(timeOfDay(-1437));
console.log(timeOfDay(3000));
console.log(timeOfDay(800));
console.log(timeOfDay(-4231));

//Further Exploration:
function timeOfDay2(inputMinutes) {
  let baselineDate = new Date('October 3, 2021 00:00:00');
  let newDate = (new Date(baselineDate.getTime() + (inputMinutes * 60000)));
  return `${returnDay(newDate)} ${doubleDigits(newDate.getHours())}:${doubleDigits(newDate.getMinutes())}`;
}

function returnDay(date) {
  let day;
  switch (date.getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Friday";
      break;
    default:
      day = "Saturday";
  }
  return day;
}