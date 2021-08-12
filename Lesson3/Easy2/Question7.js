let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let solution1 = ['Barney', flintstones.Barney];
let solution2 = Object.entries(flintstones);
solution2 = solution2[2];

console.log(solution1);
console.log(solution2);