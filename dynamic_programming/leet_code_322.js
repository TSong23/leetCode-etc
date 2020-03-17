var coinChange = function (coins, amount, count = 0) {
  if (coins === []) return count;
  if (coins[coins.length - 1] === amount) return count++;
  if (coins.length === 1 && coins[0] !== amount) return -1;

  let lastCoin = coins.pop();
  let newCount;
  if (lastCoin < amount) {
    amount = amount - lastCoin;
    coins.push(lastCoin);
    count++
    newCount = coinChange(coins, amount, count);
  } else {
    newCount = coinChange(coins, amount, count);
  };

  console.log(newCount);
  if (newCount === -1) {
    return -1;
  } else {
    return newCount++;
  }

};

coinChange([1,2,5],11);