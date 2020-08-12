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
// outer loop consists of how many we are grouping each time
// inner loop tracks where the starting position is
// 2nd inner loop tracks corresponding start position (what we really want is subset(j, [k -> k+i]))
// start: k = j, end k = j + i

/*
    1 2 3 4 5

    i = 2
        j = 0, k = 0, [1, 2]  0 <= k < 2 nums[0] and nums[1]
        j = 0, k = 2, [1, 3]
        j = 0, k = 3, [1, 4]
        j = 0, k = 4, [1, 5]
        j = 1, k = 2, [2, 3]
        j = 1, k = 3, [2, 4]
        j = 1, k = 4, [2, 5]
        j = 2, k = 3, [3, 4]
        j = 2, k = 4, [3, 5]
        j = 3, k = 4, [4, 5]

    i = 3
        j = 0, k = 2, [1, 2, 3]
        j = 0, k = 2, [1, 3]
        j = 0, k = 3, [1, 4]
*/
var subsets = function (nums) {
    let ansArr = [];
    let holdArr = [];
    for (let i = 1; i < nums.length; i++){
        holdArr = [];
        for(let j = 0; j < nums.length - i; j++){
            for(let k = j+1; )
        };
    };
};