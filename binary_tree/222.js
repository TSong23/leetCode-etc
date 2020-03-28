var countNodes = function (root) {
  if (!root) return 0;
  let count = 0; 
  let myQ = [root];
  let cNode;
  while (myQ.length){
    cNode = myQ.shift();
    count++;
    if (cNode.left) myQ.push(cNode.left);
    if (cNode.right) myQ.push(cNode.right);
  };
  return count;
};