let flintstones = ["Fred", "Wilma"];
let addition1 = ["Barney", "Betty"];
let addition2 = ["Bambam", "Pebbles"];


let option1 = flintstones.concat(addition1);
option1 = option1.concat(addition2);

let option2 = [...flintstones, ...addition1];
option2 = [...option2, ...addition2];

console.log(option1);
console.log(option2);