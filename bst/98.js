var isValidBST = function (root, min = null, max = null) {
  if (!root) {
    return true;
  }

  if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
    return false;
  }

  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};
