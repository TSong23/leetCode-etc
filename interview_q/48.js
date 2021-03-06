// this is simply matrix transform
// flip across main diag, then reverse

var rotate = function (matrix) {
    let n = matrix.length;
    for(let i = 0; i < n; i++){
      for(let j = i + 1; j < n; j++){
		  [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
	  };
	  matrix[i].reverse();
	};
	return matrix;
};