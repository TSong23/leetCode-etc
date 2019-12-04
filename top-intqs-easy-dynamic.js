// climbing stairs
var climbStairs = function (n) {

  let table = new Array(n);

  table[0] = 1;
  table[1] = 2;

  for (let i = 2; i < n; i++) {
    table[i] = table[i - 1] + table[i - 2]
  }

  return table[n - 1];
};


// house robber
//[2,7,9,3,1]
//[7,2,3,9,1]

// 7 + 9 = 16
// 7 3 1 = 11
// 2 9 = 11

var rob = function (nums) {

  let len = nums.length;

  if (len === 0) return 0;
  if (len === 1) return nums[0];
  if (len === 2) return Math.max(nums[0], nums[1]);
  if (len === 3) return Math.max(nums[0] + nums[2], nums[1]);

  let newArr = nums.slice(0,2);
  // add 1 away or 2 away
  for (let i = 3; i < len; i++){
    newArr[i] = Math.max(newArr[i - 3], newArr[i-2]) + nums[i];
  }

  return Math.max(newArr[len -1], newArr[len - 2]);
};


// Best Time to Buy and Sell Stock
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5
// Explanation: Buy on day 2(price = 1) and sell on day 5(price = 6), profit = 6 - 1 = 5.
// Not 7 - 1 = 6, as selling price needs to be larger than buying price.

var maxProfit = function (prices) {
  // O(n)
  // keep track of min, max, diff
  

};
