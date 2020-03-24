/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// use BFS and push values in to array
var largestValues = function (root) {
  if (!root) return [];
  let reArr = [];
  let myQueue = [[root]];
  let thisLvl;
  let largest;
  let nextLvl = [];
  while (myQueue.length) {
    thisLvl = myQueue.shift();
    nextLvl = [];
    largest = thisLvl[0].val;
    thisLvl.forEach(node => {
      if (node.val > largest) largest = node.val;
      if (node.left) nextLvl.push(node.left);
      if (node.right) nextLvl.push(node.right);
    });
    reArr.push(largest);
    if (nextLvl.length) myQueue.push(nextLvl);
  };
  return reArr;
};