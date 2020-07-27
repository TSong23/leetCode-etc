// The root is the maximum number in the array.
// The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
// The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.

// base case, if nums is empty, return null
// find max of nums, split array
// recurs left and right


function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
};

var constructMaximumBinaryTree = function (nums) {
  if (!nums.length) return null;

  let maxIdx = nums.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
  let rootNode = new TreeNode(nums[maxIdx]);

  rootNode.left = constructMaximumBinaryTree(nums.slice(0,maxIdx));
  rootNode.right = constructMaximumBinaryTree(nums.slice(maxIdx+1));

  return rootNode;
};