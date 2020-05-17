/*
Input: [1,-2,3,-2]
Output: 3
Explanation: Subarray [3] has maximum sum 3

Input: [3,-1,2,-1]
Output: 4
Explanation: Subarray [2,-1,3] has maximum sum 2 + (-1) + 3 = 4

Input: [3,-2,2,-3]
Output: 3
Explanation: Subarray [3] and [3,-2,2] both have maximum sum 3

Input: [-2,-3,-1]
Output: -1
Explanation: Subarray [-1] has maximum sum -1

create a count array that measures maximum value acheived in one
loop of the array
*/



var maxSubarraySumCircular = function (A) {
  let globalMax = -Infinity;
  let localMax = 0;
  let myNewArr = A.concat(A);

  for(let i = 0; i < myNewArr.length; i++){
    localMax = Math.max(myNewArr[i], myNewArr[i]+localMax);
    if (localMax > globalMax){
      globalMax = localMax;
    };
  };

  
  return globalMax;
};




//understood kadane's algo. don't understand how it applies to two interval
// arrays