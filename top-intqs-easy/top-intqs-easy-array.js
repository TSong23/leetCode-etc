////////////ARRAY///////////////////////////////////////////////////////////

//Plus One


// Given a non - empty array of digits representing a non - negative integer, 
// plus one to the integer.
// The digits are stored such that the most significant digit is at the 
// head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the
// number 0 itself.

//   Example 1:

// Input: [1, 2, 3]
// Output: [1, 2, 4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4, 3, 2, 1]
// Output: [4, 3, 2, 2]
// Explanation: The array represents the integer 4321.

var plusOne = function (digits) {

  // add one to end
  // see if 9
  // use for loop

  let arrLen = digits.length;
  
  for (let i = 0; i < arrLen; i++){
    if (digits[arrLen - i - 1] < 9){
      digits[arrLen - i - 1] += 1;
      return digits;
    }else {
      digits[arrLen - i - 1] = 0; 
    }
  }
  
  if (digits[0] === 0){
    digits.unshift(1);
  }

  return digits
};

// Move Zeroes
var moveZeroes = function (nums) {

  // when come across, zero, move to end and i--
  // we get stuck in infinite loop, so have second counter on how many we checked

  let count = 0;
  let arrLen = nums.length;
  for (let i  = 0; i < nums.length; i++){
    if (nums[i] === 0){
      nums.splice(i, 1);
      nums.push(0);
      i -= 1;
      count +=1 ;
      if (count === arrLen){
        return nums
      }
    }
  }

};