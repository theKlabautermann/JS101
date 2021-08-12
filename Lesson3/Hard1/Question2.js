let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object); // => { first: [1] }

//Reasoning: the assignment on line 2 assigns the Value [1], not the object.
//Mutating the object should therefore have no impact

//i.e. I don't expect { first: [1, 2] }