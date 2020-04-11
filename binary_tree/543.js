//     1
//    / \
//   2   3
//  / \
// 4   5
// Return 3, which is the length of the path[4, 2, 1, 3] or[5, 2, 1, 3].


// compute for each node, left depth, right depth
// add the two depth together. find the max of such sums and return

var diameterOfBinaryTree = function (root) {

  if (!root) return 0;
  let sumMax = 0;

  function findDepth(node) {
    let leftD = 0;
    let rightD = 0;

    if (node.right) {
      rightD = findDepth(node.right) + 1;
    };

    if (node.left) {
      leftD = findDepth(node.left) + 1;
    };
    let thisSum = leftD + rightD;
    let myRet = leftD > rightD ? leftD : rightD;
    if (thisSum > sumMax) {
      sumMax = thisSum;
    };

    return myRet;
  };

  let myRe = findDepth(root);
  return sumMax;  
};

