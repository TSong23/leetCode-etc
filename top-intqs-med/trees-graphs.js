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
  return build(0, inorder.length - 1);

  function build(l, r) {
    if (l > r) {
      return null;
    }

    var v = preorder.shift();
    var i = inorder.indexOf(v);
    var root = new TreeNode(v);

    root.left = build(l, i - 1);
    root.right = build(i + 1, r);

    return root;
  }
};




// Populating Next Right Pointers in Each Node

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

// Input: root = [1, 2, 3, 4, 5, 6, 7]
// Output: [1, #, 2, 3, #, 4, 5, 6, 7, #]

//perfect binary tree given
// root {
//   val: 1,
//     left:
//   {
//     val: 2,
//       left: { val: 4, left: null, right: null, next: null },
//     right: { val: 5, left: null, right: null, next: null },
//     next: null
//   },
//   right:
//   {
//     val: 3,
//       left: { val: 6, left: null, right: null, next: null },
//     right: { val: 7, left: null, right: null, next: null },
//     next: null
//   },
//   next: null
// }

var connect = function (root) {
  
  // create a queue
  // add the root
  // root.next points to null
  // add root's left and right to queue
  // have left.next point to root's right and right.next point to null
  // 

  let queue = [root]; 
  let rowNum = 2;

  while (queue[0]){
    if (queue[0].left) queue.push(queue[0].left);
    if (queue[0].right) queue.push(queue[0].right);

    let i;
    for (i = 0; i < rowNum - 1; i++){
      queue[i].next = queue[i].right;
    }
    queue[i+1].next = null;


  }
  // square fill
  // random square fill
  // random square fill


};
  