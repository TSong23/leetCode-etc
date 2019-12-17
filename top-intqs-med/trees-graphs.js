// binary tree inorder traversal

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


// recursive solution:
// DFS, then store the values in return array
// left root right


var inorderTraversal = function (root) {
  if (!root) return [];
  if (!root.left && !root.right) return [root.val];

  let leftArr = inorderTraversal(root.left);
  let rightArr = inorderTraversal(root.right);



  let returnArr = leftArr.concat([root.val]).concat(rightArr);

  return returnArr;


};


// binary tree zigzag traversal
// Given a binary tree, return the zigzag level order traversal of its nodes' values.
// (ie, from left to right, then right to left for the next level and alternate between).

//    3
//   / \
  // 9  20
  //   /  \
  // 15   7
// return its zigzag level order traversal as:
// [
//   [3],
//   [20, 9],
//   [15, 7]
// ]


// breath first search
// but have to switch left to right and right to left
// keep a switch or L and R
// also, need to keep track of the level
// level tracker % 2. 

var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let reArr = [];

  let reQueue = [ [root, 0]];
  let leftright = 0;

  while (reQueue.length) {
    let shiftArr = reQueue.shift();
    let node = shiftArr[0];
    let level = shiftArr[1];

    if (!reArr[level]){
      reArr.push([node.val]);
    }else {
      reArr[level].push(node.val);
    }    

    if (leftright === 0) {
      if (node.right) reQueue.push( [node.right, level + 1);
      if (node.left) reQueue.push([node.left, level + 1 ]);
      leftright = 1;
    } else {
      if (node.left) reQueue.push([node.left, level + 1]);
      if (node.right) reQueue.push([node.right, level + 1]);
      leftright = 0;
    }
  }

  return reArr;
  
};
