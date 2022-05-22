function triangle(side1, side2, side3) {
  let lengths = {};
  let sides = [side1, side2, side3];
  if (sides.includes(0)) return "invalid";
  if (side1 + side2 < side3 || side1 + side3 < side2 || side2 + side3 < side1) return "invalid";
  sides.forEach(side => {
    if (lengths[side]) {
      lengths[side] += 1;
    } else {
      lengths[side] = 1;
    }
  });
  switch (Object.keys(lengths).length) {
    case 3:
      return "scalene";
    case 2:
      return "isosceles";
    default:
      return "equilateral";
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"