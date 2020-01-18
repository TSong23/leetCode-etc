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

  for (let i = 0; i < n; i++){
    fillArr = new Array(m);
    fillArr.fill(1,0);
    myMat.push(fillArr);
  }

  // array filled with ones created
  // iterate and add square up and left of square

  for (let i = 1; i < n-1; i++){
    for (let j = 1; j < m-1; j++){
      myMat[i][j] = myMat[i-1][j] + myMat[i][j-1];

    }
  }
  
  return myMat[m-1][n-1];

};

uniquePaths(3,2);