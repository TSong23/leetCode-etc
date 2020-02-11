

function uniquePaths(m, n, pos = [0, 0], memo = {}) {
  // case 1: at end => return 0
  // case 2: down end => return 1 
  // case 3: right end => return 1
  
  if (m === 1 && n === 1) return 1;
  let key = pos[0] + "-" + pos[1];
  if (key in memo) return memo[key];

  let right, down;

  if (pos[0] >= m - 1 && pos[1] >= n - 1) {
    return 0;
  } else if (pos[0] >= m - 1) {
    memo[key] = 1;
    return memo[key];
  } else if (pos[1] >= n - 1) {
    memo[key] = 1;
    return memo[key];
  } else {
    down = uniquePaths(m, n, [pos[0], pos[1] + 1], memo);
    right = uniquePaths(m, n, [pos[0] + 1, pos[1]], memo);

    memo[key] = down + right;
    return memo[key];
  }
};

uniquePaths(3,2);

// square filler
// square filler 2