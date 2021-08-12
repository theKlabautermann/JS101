let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];
//Will not return an error.
//You expand the Array, which creates un-initialized elements.
//Line 3 will therefore return undefined