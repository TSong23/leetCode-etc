/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  let queue = [[root, 0]];
  let bottomLeft = [root.val, 0];

  while (queue.length) {
    let curDepth = queue[0][1];
    let curNode = queue[0][0];
    if (curNode.left) {
      queue.push([curNode.left, curDepth + 1]);
    }
    if (curNode.right) {
      queue.push([curNode.right, curDepth + 1]);
    }
    if (!curNode.left && !curNode.right) {
      if (curDepth > bottomLeft[1]) {
        bottomLeft = [curNode.val, curDepth];
      }
    }
    queue.shift();

  }

  return bottomLeft[0];

};

// square fill
// square fill 2
