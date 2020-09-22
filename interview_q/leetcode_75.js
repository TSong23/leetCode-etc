/*
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

[2,0,2,1,1,0]   C and L swap, guranteeing that L is now 0, L and C moves right one
 L C       R    
[0,2,2,1,1,0]   C and R swap, and R moves left
   L C     R    
[0,2,0,1,1,2]   C and L swap, C and L moves right
   L C   R      
[0,0,2,1,1,2]   C and L swap
     L C R    
[0,0,1,2,1,2]   C and R swap, R moves left
     L C R
[0,0,1, 1  ,2,2] C and R have met, stop
     L  CR

1. When C is 0, swap with L and both move right
2. When C is 2, swap with R and R moves left
3. When C is 1, swap with left and dont move
4. When R <= C, stop

data struc: left, right, current
*/


var sortColors = function (nums) {
    if(nums.length < 4) return nums.sort();

    function helper(C, I) {
        [ nums[C], nums[I] ] = [nums[I], nums[C]];
    };

    let L = 0;
    let R = nums.length - 1;
    let C = 0;

    while(C <= R){
        if(nums[C] === 1){
            C++;
        }else if(nums[C] === 2){
            helper(C, R);
            R--;
        }else{
            helper(C, L);
            C++;
            L++
        };
    };

    return nums;
};

sortColors([2,0,2,1,1,0])
