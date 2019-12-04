//depth of binary tree

var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }

  let leftDep = maxDepth(root.left);
  let rightDep = maxDepth(root.right);
  let currDep;

  if (leftDep > rightDep) {
    currDep = leftDep;
  } else {
    currDep = rightDep;
  }

  return currDep + 1;  

};


//symmetric tree
//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// [1,2,2,3,4,4,3]

var isSymmetric = function (root) {

  // 1 2 4 8 16 etc. so add everything to queue
  // and check if it is a palindrome?

  if (root === null){
    return true;
  }

  return isMirror(root.left, root.right);

};

var isMirror = function(tree1, tree2){

  if (tree1 === null || tree2 === null){
    return tree1 === tree2;
  }

  if (tree1.val !== tree2.val){
    return false;
  }

  return isMirror(tree1.left, tree2.right) && isMirror(tree1.right, tree2.left);
}