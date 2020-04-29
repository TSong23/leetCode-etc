// Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 0
// Output: 4

// search from end if the end is less than the start
// calculate the rotated amount
// find the target
var search = function (nums, target) {

  if (!nums.length) return -1;
  if (nums.length < 2) {
    if (nums[0] === target) {
      return 0;
    } else {
      return -1;
    };
  };
  let numRo;
  let numLen = nums.length;
  for (let i = 1; i < nums.length; i++) {
    if (nums[numLen - i] > nums[0]) {
      numRo = i;
      break;
    };
  };
  let spliceArr = nums.splice(numRo);
  let newArr = spliceArr.concat(nums);
  let myIdx = newArr.indexOf(target);
  if (myIdx < 0) return -1;
  console.log('numRo:', numRo);
  console.log('numLen:', numLen);
  if (numRo >= numLen - 1) {
    return myIdx;
  } else {
    return myIdx + numRo;
  }
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));

// still in progress?
// nah not really anymore