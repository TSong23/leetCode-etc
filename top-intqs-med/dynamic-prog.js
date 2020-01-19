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


//Longest Increasing Subsequence

// brute force solution first
// O(n^2) time complexity
// have a solutions array that keeps track of length and starting posittion


var lengthOfLIS = function (nums) {

  let arrLen = nums.length;
  if (!arrLen) return 0;

  let curLen = 0;
  let longLen = [];
  let startPos = 0;

  for (let i = 0; i < arrLen; i++) {
    for (let j = i + 1; j < arrLen; j++) {

      if (nums[j] > nums[j - 1]) {
        curLen++;
      } else {
        longLen.push(curLen);
        curLen = 0;

        if (longLen[i] > longLen[i - 1] || !longLen[i - 1]) {
          startPos = i;
        }
      }

    }
  }

  let LIS = Math.max(...longLen);

  return LIS;
};

lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
