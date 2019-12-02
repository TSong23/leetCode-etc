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


