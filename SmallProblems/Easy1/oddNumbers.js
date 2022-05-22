
for (let num = 1; num < 100; num++) {
  if (num % 2 === 1) console.log(num);
}


//Further Exploration (alternative Solution)

let nums = [];
for (let num = 1; num < 100; num++) {
  nums.push(num);
}

nums = nums.filter((num) => num % 2 === 1);
nums.forEach((num) => console.log(num));