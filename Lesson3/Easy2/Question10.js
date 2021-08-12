let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

function searchT(statement) {
  if (/t/.test(statement)) {
    console.log(/t/.exec(statement).length + 1);
  } else {
    console.log(0);
  }
}

searchT(statement1);
searchT(statement2);