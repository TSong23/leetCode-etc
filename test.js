// given a binary tree, determine if validBST

// node.left and node.right and node.val
// each step, check left < node < right
// if both left and right return true, then its valid.

function validBST(root){

  if (!root.val) return false; 

  let left = false;
  let right = false;

  if (root.left && root.left < root.val){
    left = validBST(root.left);
  };
  if (root.right && root.right > root.val){
    right = validBST(root.right);
  };

  if (left && right) return true;
  return false; 

};

