// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
// Output: 6
// Explanation: [4, -1, 2, 1] has the largest sum = 6.

// each function stack call should consider smaller part of the subArr
// keep track of value of maximum subArr value;
// if the top of stack subArr + current value results in greater number,
// it is included in subArr
// if top stack subArr < 0 and current value is positive, begin new subArr

// [-2],[1],[1,-3],[4],[4,-1],[4,-1,2]  arr
// -2  , 1 ,  1,    4,  4    ,5         max 
//  -2 , -1 , -3,    4,  3    ,5         cur

// switch sub arr when current goes to zero
// keep max

var maxSubArray = function (nums) {
  let currentMax = nums[0];
  let currentSum = 0;
  nums.forEach(num => {
    currentSum += num;
    if (currentSum < 0){
      currentSum = 0;
      if(num > currentMax){
        currentMax = num;
      };
    }else{
      if (currentSum >= currentMax){
        currentMax = currentSum;
      };
    };    
  });
  return currentMax;
};

console.log(maxSubArray([-2,-1]));