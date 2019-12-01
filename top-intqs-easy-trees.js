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