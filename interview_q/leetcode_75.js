/*
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

[2,0,2,1,1,0]   o and R swap, guranteeing that R is now 2
 L   o t   R    R move left one.
[2,0,0,1,1,2]
 L   o t R      o and L swap, guranteeing that left most is 0, L moves right
[0,0,2,1,1,2]
   L o t R      o and R swap. 
     
1. two pointers start at middle: zero pointer and two pointer
2. pointers move to next when current idx becomes 1
3. if its not, swap the number with the left and right ends

data struc: left, right, current


what is the correct ending condition?
*/


var sortColors = function (nums) {
    let L = 0;
    let R = nums.length - 1;
    let C = 1;

    function helper(idx){
        if(nums[idx] === 0){
            [ nums[idx], nums[L]] = [ nums[L], nums[idx]];
            L++;
        } else{
            [nums[idx], nums[R]] = [nums[R], nums[idx]];
            R--;
        };
        return;
    };

    while(C < R){
        nums[zero] === 1 ? zero-- : helper(zero);
        nums[two] === 1 ? two++ : helper(two);
    };

    return nums;
};

sortColors([2,0,2,1,1,0])
