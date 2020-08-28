/*
A peak element is an element that is greater than its neighbors.

Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that nums[-1] = nums[n] = -∞.
*/

// log time. use binary search like method. we have middle, left, and right
// left and right returns the index

var findPeakElement = function (nums) {
    if (!nums.length) return null;
    nums.push(-Infinity);
    nums.unshift(-Infinity);
    let len = nums.length;
    let mid = Math.floor(len/2);
    if(nums[mid-1] < nums[mid] && nums[mid+1] < nums[mid]) return mid-1;
    let left = findPeakElement(nums.slice(1,mid));
    let right = findPeakElement(nums.slice(mid+1,len-1));
    if(left) return left;
    if(right) return mid + right - 1;
    return null;  
};