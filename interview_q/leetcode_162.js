/*
A peak element is an element that is greater than its neighbors.

Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that nums[-1] = nums[n] = -∞.
*/

// log time. use binary search like method. we have middle, left, and right
// left and right returns the index

var findPeakElement = function (nums) {
    nums.push(-Infinity);
    nums.unshift(-Infinity);
    for (let i = 1; i < nums.length-1; i++){
        if((nums[i] > nums[i-1])&&(nums[i]>nums[i+1])) return i-1;
    };
};

findPeakElement([1, 2, 3])