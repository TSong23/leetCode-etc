///////// inorder traversal of binary tree
// given already in order sorted binary tree, just traverse it and find kth

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @param {number} k
//  * @return {number}
//  */



var kthSmallest = function (root, k) {

  if (!root) return null;

  let myStack = [root];
  let curNode = root;
  let count = 0;
  // begin nested while loop to traverse

  // the stack first begins getting all the left nodes in
  // then by poping off nodes in the outer while loop, one can ensure
  // that node potential right sides can be explored

  while (myStack.length){
    while ( curNode && curNode.left){
      myStack.push(curNode.left);
      curNode = curNode.left;
    }

    curNode = myStack.pop();
    count++;
    if (count === k){
      return curNode.val;
    }
    // check potential right side subtree
    if (curNode.right){
      myStack.push(curNode.right);
    }
    curNode = curNode.right;

  }

  return curNode.val;
};
