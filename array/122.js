// Input: [7, 1, 5, 3, 6, 4]
// Output: 7
// Explanation: Buy on day 2(price = 1) and sell on day 3(price = 5),
// profit = 5 - 1 = 4.


// hint is greedy algo

// 1. use while loop from start to see if prices drop. this is first buy
// 2. use for loop from z to prices.length() and apply solving logic
// 3. solving logic: [1,3,4,2,8,7,100]
//  buy: 1 2 
// sell: 4 100
//  sum: 3 98
// always sell if the next index is less than current. then buy next index
// need a swtich


var maxProfit = function (prices) {
  let arrLen = prices.length;
  if(arrLen <= 1) return 0;
  let z = 0;
  let reSum = 0;
  
  while (z < arrLen-1){
    if(prices[z+1] > prices[z]) break;
    z++;
  };
  if (z === arrLen - 1) return reSum;
  
  let lastPrice = prices[z];
  let ownStocks = true;
  for (z; z < arrLen-1; z++){
    if(ownStocks){
      if (prices[z+1] < prices[z]){
        reSum = reSum + prices[z] - lastPrice;
        ownStocks = false;   
      };
    } else{
        if (prices[z + 1] > prices[z]){
          lastPrice = prices[z];
          ownStocks = true;
        };
    };
  };

  if(ownStocks){
    reSum = reSum + prices[z] - lastPrice;
  };

  return reSum;
};

  console.log(maxProfit([1,2,3,4,5]));