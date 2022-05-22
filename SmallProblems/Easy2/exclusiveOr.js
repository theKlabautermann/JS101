function xor(argument1, argument2) {
  if ((argument1 && !(argument2)) || (!(argument1) && argument2)) {
    return true;
  } else {
    return false;
  }
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

/*
Further Exploration:
The xor function should short circuit as well for the outer
brackets (If the first argument is true & the second one false,
it doesn't check if the inverse is true). Inside the brackets the
&& operators short-circuit as well but in that case, the inverse
will also be checked.
*/