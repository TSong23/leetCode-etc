let coinChange = (coins, amount) => {
    let N = A.length;
    let dp = [...Array(N + 1)].map(_ => Array(T + 1).fill(Infinity));
    for (let i = 0; i <= N; ++i)
        dp[i][0] = 0;
    for (let i = 1; i <= N; ++i)
        for (let t = 1; t <= T; ++t)
            dp[i][t] = Math.min(1 + (0 <= t - A[i - 1] ? dp[i][t - A[i - 1]] : Infinity), dp[i - 1][t]); 
            // min(1 + with or without)
    return dp[N][T] < Infinity ? dp[N][T] : -1;
};

console.log([1,2,5],11);

