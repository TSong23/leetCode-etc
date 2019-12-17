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