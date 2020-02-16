


var maxIncreaseKeepingSkyline = function (grid){

  let OriCount = 0; 
  let NewCount = 0;
  let rowMax = [];
  let colMax = [];

  for (let i = 0; i < grid.length; i++){
    rowMax.push(Math.max(...grid[i]));
    let colSub = [];
    for (let j = 0; j < grid.length; j++){
      colSub.push(grid[j][i]);
    }
    OriCount = OriCount + colSub.reduce((a,b) => a + b, 0);
    colMax.push(Math.max(...colSub));
  }

  for (let i = 0; i < grid.length; i++){
    let rowSub = [];
    for (let j = 0; j < grid[i].length; j++){
      colMax[j] > rowMax[i] ? rowSub.push(rowMax[i]) : rowSub.push(colMax[j]);
    }
    NewCount = NewCount + rowSub.reduce((a,b) => a + b, 0);
  }

  return NewCount - OriCount;

};


let myTestGrid = [
  [3, 0, 8, 4],
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0]
]
maxIncreaseKeepingSkyline(myTestGrid);