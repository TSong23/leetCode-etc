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
  let clvl = [root];
  let nlvl = [];
  let values = [];
  let flag = true;

  // clvl initialized with root
  while (clvl.length){

    // initialize node and push value to values
    let node = clvl.pop();
    
    values.push(node.val);
    
    // add next level 
    // utilizing a stack so add accordingly
    if(flag){
      if (node.left) nlvl.push(node.left);
      if (node.right) nlvl.push(node.right);
    } else {
      if (node.right) nlvl.push(node.right);
      if (node.left) nlvl.push(node.left);
    }

    // now check if current level is complete
    // if so, add values to return arr, reset current and next levels, flag
    if (!clvl.length){
      reArr.push(values);
      values = [];
      clvl = nlvl;
      nlvl = [];
      flag = !flag;
    }
  }
  
  return reArr;  
};



// building binary tree from inorder and preorder
// Construct Binary Tree from Preorder and Inorder Traversal
// preorder = [3, 9, 20, 15, 7]
// inorder = [9, 3, 15, 20, 7]
// Return the following binary tree:

  //    3
  //   / \
  //  9  20
  //    /  \
  //  15    7


// preorder[0] is always the root
// use to split inorder into two from roots

var buildTree = function (preorder, inorder) {

  

  let leftArr, rightArr;

  // just look at solutions
  // nananana
  
};