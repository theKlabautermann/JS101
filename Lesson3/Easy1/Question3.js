let ages = { Hermann: 32, Lily: 30, Grandma: 402, Eddie: 10};

function checkObject(obj, key) {
  return Object.keys(obj).includes(key);
}

console.log(checkObject(ages, 'Spot'));