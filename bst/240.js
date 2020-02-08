// [
//   [1, 4, 7, 11, 15],
//   [2, 5, 8, 12, 19],
//   [3, 6, 9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// Given target = 5, return true.

// Given target = 20, return false.

// 1. figure out if right or bottom is greater
// 2. see how target compares to the two
// 3. move the idx
// 4. use helper function that only stacks idx


var searchMatrix = function (matrix, target) {

  if (matrix.length === 0) return false
  let i = 0, j = matrix[i].length - 1
  while (i < matrix.length && j >= 0) {
    if (matrix[i][j] === target) {
      return true
    } else if (matrix[i][j] > target) {
      j--
    } else {
      i++
    }
  }
  return false
};