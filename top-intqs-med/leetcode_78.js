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

// so, push individual entries, entire entry, []
// then find subset of combinations
// maybe keep a memo of calculated subset so i don't check

// given a array, pop each element off and find subset 
// O(n!)

var subsets = function (nums) {

};