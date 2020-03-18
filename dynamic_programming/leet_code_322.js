var coinChange = function (coins, amount, count = 0) {

  if (amount in memo) return memo[amount];
  if (amount === 0) return 0;

  let numCoins = [];
  coins.forEach(coin => {
    if (coin <= amount) {
      numCoins.push(coinChange(coins, amount - coin, memo) + 1);
    } else {
      numCoins.push(Infinity);
    }
  });

  memo[amount] = Math.min(...numCoins);
  return memo[amount];

};

console.log('answer: ',coinChange([1,2,5],11));