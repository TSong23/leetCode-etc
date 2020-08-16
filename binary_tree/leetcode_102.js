// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree[3, 9, 20, null, null, 15, 7],
// [
//     [3],
//     [9, 20],
//     [15, 7]
// ]

var levelOrder = function (root) {
    let reArr = [];
    let myStack = [[root]];
    let [curLvl, nextLvl, curVals] = [[], [], []];
    while (myStack.length) {
        curLvl = myStack.shift();
        for (let i = 0; i < curLvl.length; i++) {
            if (curLvl[i]) {
                curVals.push(curLvl[i].val);
                nextLvl.push(curLvl[i].left, curLvl[i].right);
            };
        };
        if (nextLvl.length) myStack.push(nextLvl);
        nextLvl = [];
        if (curVals.length) reArr.push(curVals);
        curVals = [];
    };
    return reArr;
};