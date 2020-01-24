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

  let latMin, latMax, lenLis, lenAft;
  let lisArr = [];

  for (let i = 0; i < arrLen; i++) {
    latMin = nums[i];
    latMax = nums[i];
    lenAft = 0;
    lenLis = 1;
    for (let j = i + 1; j < arrLen; j++) {

      //updating latest min condition first
      if (nums[j] > latMin && nums[j] < latMax){
        lenAft++;
        latMin = nums[j];
        if (lenAft >= 2){
          lenLis = lenLis - 1 + lenAft;
        }
      } else{
        latMax = nums[j];
        lenLis++;
      }
    }
    lisArr.push(lenLis);
  }

  let LIS = Math.max(...lisArr);

  return LIS;
};


// [3,0,3,0,4] yes
// [3,2,1,0,4] no

// track last index
// track current index
 // if current index + current value >= last index, return true


var canJump = function (nums) {

  // trivial case check
  if (nums.length === 1) return true;
  if (nums[0] === 0) return false;
  
  // define needed variables
  let endIdx = nums.length - 1;

  for (let i = 0; i < endIdx; i++){
    //go max dist
    let distTravel = nums[i];
    let localMaxIdx = i + distTravel;

    if (localMaxIdx >= endIdx) return true;

    if ((nums[localMaxIdx]) !== 0 ){
      // didn't hit a zero
      // check if end reached? 
      i = i + distTravel; 
      if (i >= endIdx) return true;
      i--;

    } else {
      // did hit a zero;
      // need to back track to i from localMaxIdx
      for (let j = 1; j <= distTravel; j++){
        let betweenIdx = localMaxIdx - j;
        let betweenVal = nums[betweenIdx];

        if (betweenIdx === i ) return false;

        if ( betweenVal !== 0 ){
          // see if nums[betweenIdx + betweenVal] results in non-zero
      
          if ( nums[betweenIdx + betweenVal] !== 0 ){
            i = betweenIdx + betweenVal;
            if (i >= endIdx) return true;
            i--;
            break;
          }
        }
      }
    }
  }

  return false;

};

console.log(canJump([3, 0, 4, 2, 0, 0, 1, 1]));
