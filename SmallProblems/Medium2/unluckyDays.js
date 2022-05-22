function fridayThe13ths(year) {
  let numberOfUnluckyDays = 0;
  for (let month = 1; month <= 12; month++) {
    let date = new Date(`${year}-${month}-13`);
    if (date.getDay() === 5) numberOfUnluckyDays += 1;
  }
  return numberOfUnluckyDays;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2

/*
Further Exploration
I do not think that using the reduce method was a good choice,
because it's not as readable as a loop.
*/
