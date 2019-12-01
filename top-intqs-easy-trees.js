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

  let curNode = root;
  let queue = [root];
  let i = 0;

  while (curNode.left !== null && curNode.right !== null){
    queue.push(curNode.left);
    queue.push(curNode.right);
    curNode = queue[i + 1];
    i += 1;
  }

  let qLen = queue.length;
  let lvl = 1;

  while (qLen >= 1){
    qLen / 2;
    lvl += 1;
  }

  for (let j = 0)

};