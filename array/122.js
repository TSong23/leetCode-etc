// Input: [7, 1, 5, 3, 6, 4]
// Output: 7
// Explanation: Buy on day 2(price = 1) and sell on day 3(price = 5),
// profit = 5 - 1 = 4.


// hint is greedy algo

// 1. use while loop from start to see if prices drop. this is first buy
// 2. use for loop from z to prices.length() and apply solving logic



var maxProfit = function (prices) {
  let arrLen = prices.length();
  if(arrLen <= 1) return 0;
  let z = 0;
  let reSum = 0;
  while (z < arrLen-1){
    if(prices[z+1] > prices[z]) break;
  };

  return reSum;
};
