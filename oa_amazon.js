
// number of islands

function numberAmazonTreasureTrucks(rows, column, grid) {
  // iterate through array and find a 1 
  // add to truck count 
  // DFS around that 1 to find contiguous park
  // change all the contigous park to 0
  // continue through the array

  let popUpTrucks = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j]) {
        popUpTrucks++;
        DFShelper(i, j);
      }
    }
  }


  function DFShelper(i, j) {
    // check if i,j are out of bounds or zeroes
    // closure allows access to grid, rows and  column
    if (i < 0 || j < 0 || i >= rows || j >= column) return;
    if (!grid[i][j]) return;

    // set grid[i][j] to zero and continue DFS 
    grid[i][j] = 0;

    DFShelper(i + 1, j);
    DFShelper(i, j + 1);
    DFShelper(i - 1, j);
    DFShelper(i, j - 1);
  }

  return popUpTrucks;
}





/////////////////////////Question 2 ////////////////////////////////////////////

function minimumDays(rows, columns, grid) {
  let updatedTowers = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] === 1) updatedTowers.push([i, j]);
    }
  }
  if (!updatedTowers.length) return -1;

  let numDays = 0;

  while (updatedTowers.length) {
    let numNewUpdate = updatedTowers.length;
    let didUpdate = false;
    for (i = 0; i < numNewUpdate; i++) {
      let [row, col] = updatedTowers.shift();

      let dn = updateNeighbors(row + 1, col);
      let up = updateNeighbors(row - 1, col);
      let rt = updateNeighbors(row, col + 1);
      let lf = updateNeighbors(row, col - 1);
    }
    if (didUpdate) numDays++;
  }

  function updateNeighbors(r, c) {
    if (r < 0 || c < 0 || r >= rows || c >= columns) return false;
    if (grid[r][c] === 1) return false;

    grid[r][c] = 1;
    updatedTowers.push([r, c]);
    return true;
  }

  return numDays;
}


let myTest = [
  [1,0,0,0,0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1]
];

minimumDays(5,5,myTest);



