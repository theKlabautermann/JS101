function transpose(nestedArr) {
  let resultMatrix = [];
  for (let column = 0; column < nestedArr[0].length; column++) {
    let newRow = [];
    for (let row = 0; row < nestedArr.length; row++) {
      newRow.push(nestedArr[row][column]);
    }
    resultMatrix.push(newRow);
  }
  return resultMatrix;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

const matrix2 = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix2 = transpose(matrix2);

console.log(newMatrix2);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix2);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]


//Further Exploration
function transposeInPlace(nestedArr) { //Only works for a square matrix
  let serializedArr = JSON.stringify(nestedArr);
  let deepCopiedArr = JSON.parse(serializedArr);
  for (let column = 0; column < nestedArr[0].length; column++) {
    for (let row = 0; row < nestedArr.length; row++) {
      nestedArr[column][row] = deepCopiedArr[row][column];
    }
  }
}

console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
transposeInPlace(matrix);
console.log(matrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]