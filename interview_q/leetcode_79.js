// board =
//   [
//     ['A', 'B', 'C', 'E'],
//     ['S', 'F', 'C', 'S'],
//     ['A', 'D', 'E', 'E']
//   ]

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.

// cannot reuse cells!

// we have to take the first letter, find all instances of it in matrix
// start DFS from that letter.
// keep track of indexes visited via a set
// keep track of letters to find in an array
// DFS should return false if i,j is out of bounds
// return false if board[i][j] !== DFSletters[0]


var exist = function (board, word) {
	if (board.length === 0) return false;

	function myDFS(i, j, k) {
		if (board[i][j] !== word[k]) return false;
		if (k === word.length - 1) return true;
		console.log(i,j,k);
		board[i][j] = '*';		
		
		//begin DFS in U,D,L,R
		for(let [dx,dy] of dirs){
			let x = i + dx;
			let y = j + dy;
			if(x >= 0 && x < rowL && y >= 0 && y < colL){
				if(myDFS(x,y,k+1)) return true;
			};
		};
		board[i][j] = word[k]; // reset the board
		return false;
	};

	const rowL = board.length;
	const colL = board[0].length;
	const dirs = [[-1,0],[1,0],[0,-1],[0,1]];
	for(let i = 0; i < rowL; i++){
		for(let j = 0; j < colL; j++){
			if( myDFS(i,j,0)) return true;
		};
	};
	return false;
};


console.log(exist(
	[["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],
"ABCCED"));




