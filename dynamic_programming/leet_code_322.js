var coinChange = function (coins, amount, count = 0) {
  console.log(coins,amount,count);
  if (coins === []) return count;
  if (coins[coins.length - 1] === amount) return count++;
  if (coins.length === 1 && coins[0] !== amount) return -1;

  let lastCoin = coins.pop();
  let newCount;
  if (lastCoin < amount) {
    amount = amount - lastCoin;
    coins.push(lastCoin);
    newCount = coinChange(coins, amount, count);
  } else {
    newCount = coinChange(coins, amount, count);
  };
  console.log(newCount, 'newCount');
  if (newCount === -1) {
    return -1;
  } else {
    return newCount + count;
  }

};

coinChange([1,2,5],11);