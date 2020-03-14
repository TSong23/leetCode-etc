/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */


// start with searching the BST
// 1. <> recursively call function
// 2. if the val is between the root and on of the childern, put val as roots 
// child and the former child as vals child
// 3. return the root
// 
var insertIntoBST = function (root, val) {

  if (val < root.val){
    if (val > root.left.val ){
      // replace child func
    } else{
      // continue the recursion
      insertIntoBST(root, val)
    }
  } else (val > root.val){
    if (val < root.right.val)
  };


};