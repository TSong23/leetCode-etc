// Given a binary tree, return the inorder traversal of its nodes' values.

// inOrder is left, root, right
// recursion solution: go down left as possible, left, go up root, go right
// up another stack

const inorderTraversal = root => {
  const stack = []; // [1] root = 9
  const result = [];// [5,4,] 

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      result.push(root.val);
      root = root.right;
    }
  }

  return result;
}
