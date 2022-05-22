function isBalanced(str) {
  let open = 0;
  let closed = 0;
  for (let index = 0; index < str.length; index++) {
    if (closed > open) break;
    if (str[index] === "(") open += 1;
    if (str[index] === ")") closed += 1;
  }
  if (open === closed) {
    return true;
  } else {
    return false;
  }
}

//Further Exploration
function isBalanced2(str) {
  let paren = 0;
  let brackets = 0;
  let curly = 0;
  let quotes = 0;
  for (let index = 0; index < str.length; index++) {
    if (str[index] === "(") paren += 1;
    if (str[index] === ")") paren -= 1;
    if (str[index] === "{") curly += 1;
    if (str[index] === "}") curly -= 1;
    if (str[index] === "[") brackets += 1;
    if (str[index] === "]") brackets -= 1;
    if ((str[index] === "'") || (str[index] === '"')) quotes += 1;
    if (paren < 0 || curly < 0 || brackets < 0) break;
  }
  return (paren === 0 && curly === 0 && brackets === 0 && (quotes % 2 === 0));
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
console.log(isBalanced2('Test()[]{}""') === true);