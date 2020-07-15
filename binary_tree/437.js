// root = [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1], sum = 8

//       10
//      /  \
//     5   -3
//    / \    \
//   3   2   11
//  / \   \
// 3  -2   1
//  \
//   5

// Return 3. The paths that sum to 8 are:

// 1.  5 -> 3
// 2.  5 -> 2 -> 1
// 3. - 3 -> 11

// first, think about data structure of my solution. not sure. will need counter
// problem seems repetitive, recursive

// return an overall count
// visit each node, start a DFS. DFS returns a number of paths that sum. 
// add that to overall, go on to next node, DFS on each node while level order traversal. 

// solution #1
const pathSum = (root, sum) => {
  if (!root) return 0;
  const queue = [root];
  let paths = 0;

  while (queue.length > 0) {
    const curr = queue.pop();
    paths += dfs(curr, sum, 0);

    if (curr.left) queue.unshift(curr.left);
    if (curr.right) queue.unshift(curr.right);
  }

  return paths;
};

const dfs = (node, sum, subTotal) => {
  if (!node) return 0;

  const currSum = node.val + subTotal === sum ? 1 : 0

  const pathsLeft = dfs(node.left, sum, subTotal + node.val);
  const pathsRight = dfs(node.right, sum, subTotal + node.val);

  return currSum + pathsLeft + pathsRight;
};


// solution #2
var pathSum = function (root, sum) {
    let count = 0;

    const check = (node, sum) => {
        if (node) {
            if (node.val === sum) count++;
            check(node.left, sum - node.val);
            check(node.right, sum - node.val);
        }
    }

    const tree = node => {
        if (node) {
            check(node, sum); 
            tree(node.left);
            tree(node.right);
        }
    } 
    
    tree(root);
    return count;
}    


var pathSum = function (root, sum) {
  let overallCount = 0;

  function DFSsum(node, curSum){
    if(!node) return 0;
    let currSum = node.val + curSum === sum ? 1 : 0; 

    return currSum + DFSsum(node.left, node.val) + DFSsum(node.right, curSum+ node.val); 
  };

  let nodeArr = [root];
  let curNode;
  while(nodeArr.length) {
    curNode = nodeArr.shift();
    if (curNode.left) nodeArr.push(curNode.left);
    if (curNode.right) nodeArr.push(curNode.right);
    overallCount += DFSsum(curNode, 0);
  };

    return overallCount;
};



