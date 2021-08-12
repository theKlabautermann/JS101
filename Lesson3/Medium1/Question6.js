let nanArray = [NaN];

console.log(nanArray[0] === NaN);

/*
Expected Result:
Will return false.
NaN is the only value in JavaScript that is not equal to itself.

Bonus: I can test if a value evaluates to NaN
by using the Number.isNaN() method
*/