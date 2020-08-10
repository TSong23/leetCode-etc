
// Given an array nums containing n + 1 integers where each integer is between 1 and n(inclusive), prove that at least one duplicate number must exist.Assume that there is only one duplicate number, find the duplicate one.

// Example 1:

// Input: [1, 3, 4, 2, 2]
// Output: 2

/*
You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.
*/

// read only and less than O(n^2) means n log n
// use two pointer solution
// if there is duplicate, they will map to same index, creating a loop
// if we detect a loop, we can solve the problem


var findDuplicate = function (nums) {
    if(nums.length === 1) return nums[0];
    let [slow, fast] = [nums[0], nums[0]];

    while(slow !== fast){
        slow = nums[slow];
        fast = nums[nums[fast]];
    };
    fast = 0;
    while(slow !== fast){
        slow = nums[slow];
        fast = nums[fast];
    };
    return slow;    
};

