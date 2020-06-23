// board =
//   [
//     ['A', 'B', 'C', 'E'],
//     ['S', 'F', 'C', 'S'],
//     ['A', 'D', 'E', 'E']
//   ]

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.

// we have to take the first letter, find all instances of it in matrix
// start BFS from that letter.

var exist = function (board, word) {
  const rowL = board.length;
  const colL = board[0].length;
  let myWord = word.split('');
  let myAns = false; 
  let myHash = {};
  

  function myBFS(bfsWord, i, j){
    if(myHash[`${i},${j}`]) return false;
    myHash[`${i},${j}`] = true;
    if(!bfsWord.length) return true;
    let up,down,left,right;

    if (board[i+1] && board[i+1][j] === bfsWord[0]){
      bfsWord.shift();
      right = myBFS(bfsWord,i+1,j);
    } else if (board[i-1] && board[i-1][j] === bfsWord[0]){
      bfsWord.shift();
      left = myBFS(bfsWord, i-1, j);
    } else if (board[i][j+1] && board[i][j+1] === bfsWord[0]){
      bfsWord.shift();
      up = myBFS(bfsWord, i, j+1);
    } else if (board[i][j-1] && board[i][j-1] === bfsWord[0]){
      bfsWord.shift();
      down = myBFS(bfsWord,i,j-1);
    };

    if(up || down || left || right) return true;
    return false; 

  };

  for(let i = 0; i < rowL; i++){
    if(myAns) return true;
    for (let j = 0; j < colL; j++) {
      if(board[i][j] === word[0]){
        myAns = myBFS(myWord, i, j);
        if(myAns){
          return true;
        }else{
          myHash = {};
          myWord = word.split('');
        };
      };
    };
  };

  return myAns; 
};

console.log(exist([
  ["C", "A", "A"], 
  ["A", "A", "A"], 
  ["B", "C", "D"]],
"AAB"));