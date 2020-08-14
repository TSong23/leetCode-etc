// Given a set of distinct integers, nums, return all possible subsets(the power set).

//     Note: The solution set must not contain duplicate subsets.

//         Example:

// Input: nums = [1, 2, 3]
// Output:
// [
//     [3],
//     [1],
//     [2],
//     [1, 2, 3],
//     [1, 3],
//     [2, 3],
//     [1, 2],
//     []
// ]

// we can achieve the iteratively
// Using[1, 2, 3] as an example, the iterative process is like:

// Initially, one empty subset[[]]
// Adding 1 to[]: [[], [1]];
// Adding 2 to[] and[1]: [[], [1], [2], [1, 2]];
// Adding 3 to[], [1], [2] and[1, 2]: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]].


var subsets = function (nums) {
    let ansArr = [[]];
    let holdLen, holdVar;
    for (let i = 0; i < nums.length; i++){
        holdLen = ansArr.length;
        for(let j = 0; j < holdLen; j++){
            holdVar = ansArr[j].concat([nums[i]]);
            ansArr.push(holdVar);
        };
    };
    return ansArr;
};

subsets([1,2,3])