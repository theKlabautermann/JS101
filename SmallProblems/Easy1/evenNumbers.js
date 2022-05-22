for (let num = 1; num < 100; num++) {
  if (num % 2 === 0) console.log(num);
}


//Further Exploration (alternative Solution)

let nums = [];
for (let num = 1; num < 100; num++) {
  nums.push(num);
}

nums = nums.filter((num) => num % 2 === 0);
nums.forEach((num) => console.log(num));