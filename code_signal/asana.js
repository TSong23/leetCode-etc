function seperateMat(mat) {
  // return a 2d matrix of [ numMat * [1 x 16]  ]
  let len = mat.length;
  let numMat = len / 4;
  let sepMats = [];
  let hold = [];
  for (let k = 0; k < numMat; k++) {
    hold = [];
    for (let i = 0; i < 4; i++) {
      for (let j = (0 + k * 4); j < (4 * k + 4); j++) {
        hold.push(mat[i][j]);
      };
    };
    sepMats.push(hold);
  };
  return sepMats;
};

let testMat = [["14", "3", "10", "4", "16", "10", "?", "2", "?", "9", "15", "11"],
["16", "7", "8", "2", "1", "4", "8", "3", "3", "16", "7", "13"],
["?", "9", "6", "5", "14", "12", "7", "6", "2", "10", "4", "14"],
["15", "1", "13", "12", "9", "15", "5", "13", "1", "8", "12", "6"]];
seperateMat(testMat);

// given multiple matrices (4(n) x 4), with one ? , fill the ? and return the completeed matrices
// need to divide up the matrices then combine later? 



