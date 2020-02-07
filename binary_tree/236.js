//////////////////Lowest Common Ancestor of a Binary Tree///////////////////////

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 // node is allowed to be a descendent of itself

var lowestCommonAncestor = function (root, p, q) {

  if (!root) return null;
  if (root === p || root === q) return root; 

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  let myReturn =  (left && right) ? root : (left || right);

  return myReturn;

  // finished
};