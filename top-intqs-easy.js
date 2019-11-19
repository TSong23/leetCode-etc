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

  let arrInd = digits.length - 1;

  if (digits.length === 1) {
    if (digits[0] < 9) {
      digits[0] += 1
      return digits

    } else {
      digits[0] = 0;
      digits.unshift(1);
      return digits
    }
  };

  for (let i = 0; i < digits.length - 2; i++) {

    if (digits[arrInd - i] < 9) {

      digits[arrInd - i] += 1;
      return digits
    } else {
      digits[arrInd - i] = 0;
    }
  }

  if (digits[1] === 0) {
    if (digits[0] === 9) {
      digits[0] === 0;
      digits.unshift(1);
      return digits
    } else {
      digits[0] += 1
      return digits
    }
  }

  return digits

};

let ans = plusOne([1,0]);