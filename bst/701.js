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


// new approach, try to go down as far as possible, then insert at end
// check if root.left or right exists
// val <> root ?
// insert or recurse
var insertIntoBST = function (root, val) {
  helper(root,val);
  return root;
};

var helper = function(root, val){
  console.log(root);
  if (val < root.val) {
    if (root.left) {
      helper(root.left, val);
    } else {
      insert(root,val,'l');
    };
  } else {
    if (root.right){
      helper(root.right, val);
    } else{
      insert(root, val, 'r');
    };
  };
}

var insert = function(root, val, dir){

  let newAdd = new TreeNode(val);
  if (dir === 'l') {
    root.left = newAdd;
  } else {
    root.right = newAdd;
  };
}


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
 
let four = new TreeNode(4);
let three = new TreeNode(3);
let seven = new TreeNode(7);
let one = new TreeNode(1);
let two = new TreeNode(2);

four.left = two;
four.right = seven; 
two.left = one;
two.right = three;

insertIntoBST(four, 5);
