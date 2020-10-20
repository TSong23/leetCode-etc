function playSegments(coins) {
    // Write your code here
    let myStack = [];
    let stackCount = 0;
    let arrLen = coins.length;
    for (let i = 1; i < arrLen + 1; i++) {
        if (coins[arrLen - i]) {
            stackCount += 1;
            myStack.unshift(stackCount);
        } else {
            stackCount -= 1;
            myStack.unshift(stackCount);
        };
    };

    if (myStack[0] < 0) return 0;

    let p1Pt = 0;
    let i;
    for (i = 0; i < arrLen; i++) {
        if (coins[i]) {
            p1Pt += 1;
        } else {
            p1Pt -= 1;
        };

        if (p1Pt >= myStack[i]) {
            return i + 1;
        };
    };
};


