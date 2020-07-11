
// level order traversal of the two trees and create a new tree
// make sure to input null for empty nodes!

// 1. lets push the next level
//    a. if left||right = null, don't add to next level
//    b. 
// 2. 

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
};

var mergeTrees = function (t1, t2) {
  if (!t1 && !t2) {
    return null;
  }

  if (!t1 || !t2) {
    return t1 || t2;
  }

  var root = new TreeNode(t1.val + t2.val);

  root.left = mergeTrees(t1.left, t2.left);
  root.right = mergeTrees(t1.right, t2.right);

  return root;
};