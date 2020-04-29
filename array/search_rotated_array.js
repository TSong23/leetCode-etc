// Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 0
// Output: 4

// search from end if the end is less than the start
// calculate the rotated amount
// find the target
var search = function (nums, target) {

  let numRo;
  let numLen = nums.length;
  for(let i =1; i < nums.length; i++){
    if(nums[numLen - i] > nums[0]){
      numRo = i;
      break;
    };
  };
  return numRo;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));

// still in progress?
// nah not really anymore