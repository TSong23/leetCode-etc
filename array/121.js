// Input: [7, 1, 5, 3, 6, 4]
// Output: 5
// Explanation: Buy on day 2(price = 1) and sell on day 5(price = 6), profit = 6 - 1 = 5.
// Not 7 - 1 = 6, as selling price needs to be larger than buying price.

// keep track of difference
// min and max price

var maxProfit = function (prices) {

  let minP = prices[0];
  let diff = 0;

  for (let i = 0; i < prices.length; i++) {
    if( prices[i] < minP) minP = prices[i];

    if( (prices[i] - minP) > diff){
      diff = prices[i] - minP;
    };
  };
  return diff;

};