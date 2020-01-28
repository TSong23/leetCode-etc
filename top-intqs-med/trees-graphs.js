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


// * Definition for a Node.
// * function Node(val, left, right, next) {
  // * this.val = val === undefined ? null : val;
  // * this.left = left === undefined ? null : left;
  // * this.right = right === undefined ? null : right;
  // * this.next = next === undefined ? null : next;
  // * };
  
  // create a queue
  // add the root
  // all node.next points to null
  // if we know it is the end of a row, leave the node as is
  // if not, connect root.next to store[0]
  // add root's left and right to queue
  // have left.next point to root's right and right.next point to null
  

var connect = function (root) {
  if (!root) return null;
  if ( !root.left || !root.right) return root;

  let queue = []; 
  queue.push(root.left);
  queue.push(root.right);
  queue.push('#');

  while (queue.length > 0){
    //check if end had been reached
    let curNode = queue.shift();
    if (curNode !== '#'){
      //check if it should be last node. the queue is updated
      if (queue[0] !== '#'){
        // it isn't the right most node
        // if it was the right most node, we can leave as is
        // connect node.next to next node
        curNode.next = queue[0];
      }
      //check if it has children and push
      if (curNode.left && curNode.right) {
        queue.push(curNode.left);
        queue.push(curNode.right);
      }
    } else if (queue.length > 0){
      // so the current queue[0] is the end symbol
      // means that we reached the end of the row
      // if the queue isn't empty, previous nodes had left and right
      // so we need to add '#' so that it signifies the end of child row
      queue.push('#');
    }

  }
  // now all node.right should point correctly
  return root;
};
  

/////////Number of Islands

// Given a 2d grid map of '1's(land) and '0's(water), count the number of 
// islands.An island is surrounded by water and is formed by connecting 
// adjacent lands horizontally or vertically.You may assume all four edges of
//  the grid are all surrounded by water.
// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1

// Input:
// 11000
// 11000
// 00100
// 00011

// Output : 3

// iterate through grid. 
// use BFS to add each pos to queue
// once queue runs out, it means we found 1 island
// numIslands ++
// return num of Islands when we have checked all indexes. 
// we can change all one's to zeroes to show that index has been checked

var numIslands = function (grid) {

  let islands = 0;
  let queue = [];
  for (let i = 0; i < grid.length; i++){
    for (let j = 0; j < grid[0].length; j++){
      if ( grid[i][j] !== '0' ) exploreIsland(i,j,grid,queue);
    }
  }
  return islands;
};

function exploreIsland(i,j,grid,queue){
  // implement BFS
  // think about how to minimize double checking
  // hmmmm
}



let grid = [
  ['1','1','0','0','0'],
  ['1','1','0','0','0'],
  ['0','0','1','0','0'],
  ['0','0','0','1','1']
]
numIslands(grid);


