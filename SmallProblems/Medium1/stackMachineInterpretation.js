function minilang(str) {
  let stack = [];
  let register = 0;
  let commands = str.split(" ");
  for (let index = 0; index < commands.length; index++) {
    if (commands[index].match(/\d/)) register = Number(commands[index]);
    if (commands[index] === "PUSH") stack.push(register);
    if (commands[index] === "ADD") register += stack.pop();
    if (commands[index] === "SUB") register -= stack.pop();
    if (commands[index] === "MULT") register *= stack.pop();
    if (commands[index] === "DIV") register = Number.parseInt(register / stack.pop(), 10);
    if (commands[index] === "REMAINDER") register = Number.parseInt(register % stack.pop(), 10);
    if (commands[index] === "POP") register = stack.pop();
    if (commands[index] === "PRINT") console.log(register);
  }
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

//Further Exploration
function minilang2(str) {
  let stack = [];
  let register = 0;
  let commands = str.split(" ");
  for (let index = 0; index < commands.length; index++) {
    if (commands[index].match(/\d/)) {
      register = Number(commands[index]);
    } else if (commands[index] === "PUSH") {
      stack.push(register);
    } else if (commands[index] === "ADD") {
      if (stack.length === 0) {
        console.log("Error: Stack is empty");
        break;
      }
      register += stack.pop();
    } else if (commands[index] === "SUB") {
      if (stack.length === 0) {
        console.log("Error: Stack is empty");
        break;
      }
      register -= stack.pop();
    } else if (commands[index] === "MULT") {
      if (stack.length === 0) {
        console.log("Error: Stack is empty");
        break;
      }
      register *= stack.pop();
    } else if (commands[index] === "DIV") {
      if (stack.length === 0) {
        console.log("Error: Stack is empty");
        break;
      }
      register = Number.parseInt(register / stack.pop(), 10);
    } else if (commands[index] === "REMAINDER") {
      if (stack.length === 0) {
        console.log("Error: Stack is empty");
        break;
      }
      register = Number.parseInt(register % stack.pop(), 10);
    } else if (commands[index] === "POP") {
      if (stack.length === 0) {
        console.log("Error: Stack is empty");
        break;
      }
      register = stack.pop();
    } else if (commands[index] === "PRINT") {
      console.log(register);
    } else {
      console.log(`Error: Invalid Command "${command[index]}".`);
      break;
    }
  }
}