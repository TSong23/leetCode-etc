// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.


// Given a m x n grid filled with non - negative numbers, find a path from 
// top left to bottom right which minimizes the sum of all numbers along its 
// path.

//  Note: You can only move either down or right at any point in time.
// Input:
// [
//   [1, 3, 1],
//   [1, 5, 1],
//   [4, 2, 1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.


let grid = [
  [1, 3],
  [1, 5]
];

function minPathSum(grid) {
  let myGrid = [[grid[0][0]]];
  let [row, col] = [grid.length, grid[0].length];

  // leftmost column
  for (let i = 1; i < row; i++) {
    myGrid.push([myGrid[i - 1][0] + grid[i][0]]);
  };

  // top row
  for (let i = 1; i < col; i++) {
    myGrid[0][i] = myGrid[0][i - 1] + grid[0][i];
  };

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (myGrid[i - 1][j] > myGrid[i][j - 1]) {
        myGrid[i][j] = myGrid[i][j - 1] + grid[i][j];
      } else {
        myGrid[i][j] = myGrid[i - 1][j] + grid[i][j];
      }
    }
  }

  return myGrid[row - 1][col - 1];
}

minPathSum(grid);