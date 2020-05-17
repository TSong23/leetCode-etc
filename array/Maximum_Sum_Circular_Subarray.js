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

  const countArr = [A[0]];
  let count = A[0];
  let baseVal = A[0];
  let 

  for(i = 1; i < A.length; i++){
    count += A[i];
    countArr.push(count);
  };

  console.log(countArr);

};

maxSubarraySumCircular([1, -2, 3, -2]);
maxSubarraySumCircular([3, -1, 2, -1]);


// use Kadane's algo