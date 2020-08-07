// Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 0
// Output: 4

// need to modify binary search
// divide in to two
// check the first and last element of divided sections
// first <= target <= last ; first <= target <= last

var search = function (nums, target) {
  if (!nums.length) return -1;
  let len = nums.length;
  if( target < nums[0] && target > nums[len] ) return -1;

  let mdpt = Math.floor(len/2);
  let mid = nums[mdpt];
  if(mid === target) return mdpt;

  let left =  search(nums.slice(0,mdpt),target);
  let right = search(nums.slice(mdpt+1),target);

  if( left !== -1) return left;
  if( right !== -1) return mdpt + right + 1;
  return -1;  
};

console.log(search([1], 1));

