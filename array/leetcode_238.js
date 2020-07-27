// Input: [1, 2, 3, 4]
// Output: [24, 12, 8, 6]
// Please solve it without division and in O(n)

// using O(2n) space, keep a product array going left to right and another 
// right to left

// 1   1   2   6   24   R 
// 24  24  12  4   1    L
// 24  12   8   6

// multiply left and right arr based on goingL: R[i+1] * L[i] = result[i]
// i < nums.length

var productExceptSelf = function (nums) {

  let arrLen = nums.length;
  let goingR = [1];
  let goingL = [1];
  let resultArr = [];

  for(let i = 1; i < nums.length+1; i++){
    goingR.push(goingR[i-1]*nums[i-1]);
    goingL.push(goingL[i-1]*nums[arrLen-i]);
  };

  for (let i = 0; i < arrLen; i++){
    resultArr.push(goingR[i] * goingL[arrLen-i-1])
  };

  return resultArr;
};

console.log(productExceptSelf([1,2,3,4]));