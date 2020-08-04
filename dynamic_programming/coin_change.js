// You are given coins of different denominations and a total amount of money amount.Write a function to compute the fewest number of coins that you need to make up that amount.If that amount of money cannot be made up by any combination of the coins, return -1.

// lets try bottom up tabulation approach
// array goes up to N; if not accessible, -1
// each entry checks if it can get there from a previous entry + one of the coins



let coinChange = (coins, amount) => {
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(
                    dp[i],
                    dp[i - coin] + 1,
                );
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];    
};

console.log(coinChange([1, 2147483647],2));

