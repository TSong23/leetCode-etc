// use a queue to push numbers in to 2D matrix
// right, down, left, up is the order

// right: grid[x][0...n-1]; end condition is n-1
// down: grid[0...n-1][x]; n-1
// left: grid[x][in -> 0 or a number]
// up: grid[n-1 to a number][x]


var generateMatrix = function (n) {
  if (n === 0) return [[]];
  if (n === 1) return [[1]];

  let reMat = create2D(n);
  let myQueue = [];

  for (let i = 1; i < n*n+1; i++){
    myQueue.push(i);
  };
  
  var goRight = function(x,y){
    if (!myQueue.length) return;
    while (y < n && !reMat[x][y]){
      reMat[x][y] = myQueue.shift();
      y++;
    };
    y--;
    x++;
    goDown(x,y);
  };

  var goDown = function(x,y){
    if (!myQueue.length) return;
    while (x < n && !reMat[x][y]){
      reMat[x][y] = myQueue.shift();
      x++;
    };
    x--;
    y--; 
    goLeft(x,y);
  };

  var goLeft = function(x,y){
    if (!myQueue.length) return;
    while (y >= 0 && !reMat[x][y]) {
      reMat[x][y] = myQueue.shift();
      y--;
    };
    x--;
    y++; 
    goUp(x,y);
  };

  var goUp = function(x,y){
    if (!myQueue.length) return;
    while (x >= 0 && !reMat[x][y]) {
      reMat[x][y] = myQueue.shift();
      x--;
    };
    x++;
    y++;
    goRight(x,y);
  };

  goRight(0,0);

  return reMat;

};



var create2D = function(n){
  let reMat = [];
  for (let i =0; i < n; i++){
    reMat.push([]);
  };
  return reMat;
}


generateMatrix(3);


// solved 2 2d array problems
// minimum number of safety boats and skyline problem
