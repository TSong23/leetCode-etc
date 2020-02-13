var generateMatrix = function (n) {

  let max = n * n;
  let reArr = [[]];

  for (let i = 1; i < n + 1; i++){
    reArr[0].push(i);
  }
  reArr.push([]);
  reArr[1][2] = 4;

  // no simple trick to solve this problem

};


generateMatrix(3);


// solved 2 2d array problems
// minimum number of safety boats and skyline problem
