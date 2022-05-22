function triangle(angle1, angle2, angle3) {
  if ((angle1 + angle2 + angle3) !== 180 || [angle1, angle2, angle3].includes(0)) return "invalid";
  let largestAngle = [angle1, angle2, angle3].sort((a, b) => b - a)[0];
  if (largestAngle > 90) {
    return "obtuse";
  } else if (largestAngle === 90) {
    return "right";
  } else {
    return "acute";
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"