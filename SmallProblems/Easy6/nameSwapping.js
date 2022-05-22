function swapName(name) {
  return name.split(" ").reverse().join(", ");
}

console.log(swapName('Joe Roberts'));

//Further Exploration
function swapName2(name) {
  let nameArr = name.split(" ");
  let lastName = nameArr.pop();

  return `${lastName}, ${nameArr.join(" ")}`;
}

console.log(swapName2("Karl Oskar Henriksson Ragvals"));