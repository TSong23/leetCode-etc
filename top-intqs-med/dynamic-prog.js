// Unique paths

// moves only right and down
// use recursion

// solving approach: 
// 1. solve brute force
// 2. then optimize

// 3. memoization


var uniquePaths = function (m, n) {

  if (m === 0 || n === 0) return 0;

  // create a m x n matrix

  let myMat = [];
  let fillArr

  for (let i = 0; i < m; i++){
    fillArr = new Array(n);
    fillArr.fill(1,0);
    myMat.push(fillArr);
  }

  // array filled with ones created
   



};

uniquePaths(3,2);