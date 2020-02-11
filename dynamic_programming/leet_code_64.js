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

function minPathSum(grid, pos = [0,0], memo = {}) {

  let key = pos[0] + "-" + pos[1];
  if (key in memo) return memo[key];

  // case 1: right end => go down
  // case 2: down end => go right
  // case 3: at end => return last num. this should be first case
  let gridRow = grid.length - 1
  let gridCol = grid[0].length - 1;
  let right, down;

 

  if (pos[0] >= gridRow && pos[1] >= gridCol){
    return grid[gridRow][gridCol];
  } else if (pos[0] >= gridRow){
    down = minPathSum(grid, [pos[0], pos[1] + 1], memo);
    memo[pos[0] + "-" + pos[1]] = down + grid[pos[0]][pos[1]];
  } else if (pos[1] >= gridCol) {
    right = minPathSum(grid, [pos[0] + 1, pos[1]], memo);
    memo[pos[0] + "-" + pos[1]] = right + grid[pos[0]][pos[1]];
  } else {
    down = minPathSum(grid, [pos[0], pos[1] + 1], memo);
    right = minPathSum(grid, [pos[0] + 1, pos[1]], memo);

    if (right < down) {
      memo[key] = right + grid[pos[0]][pos[1]];
    } else {
      memo[key] = down + grid[pos[0]][pos[1]];
    }
  }
  return memo[key];

}

minPathSum(grid);