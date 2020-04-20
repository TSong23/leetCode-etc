
// Input: [0, 1, 0]
// Output: 2
// Explanation: [0, 1](or[1, 0]) is a longest contiguous subarray with equal
// number of 0 and 1.

// Use array to keep count of number of 0's and 1's
// search the count array to find indexes in which count for 0 and 1 are same
// then find the longest gap between the found indexes

// [0,1,0,1,1,1, start: 1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0: end, 1,1,0]
// 16
// resetArr = [1]=>[3]=>[3,21]=>[3,21,24]
// resetIdx - resetLen === lastResetIdx + 1 ? combineLen : don't combine
// need to keep track of resetIdx and resetLen

// [0,1,0,1,0,0,0,0,1,1,1,1]
// 12
// resetArr = [1] => [3] => [11]

// 1. determine if either 0 or 1 is less count
// 2. from that index, the length of contigous is "less count * 2 - 1"
// 3. count reset each time 0 and 1 number equal each other
// 4. when count is reset, look to see if the last reset is contigous
//    -then add length of last reset to length of current reset


// use hash table?
// each index is key and contains count for 1's and 0's
// 

var findMaxLength = function (nums) {

  if (nums.length <= 1) return 0;

  let resetArr = [];
  let zeroCount = 0;
  let oneCount = 0;
  let countHash = {};
  let curLen = 0;
  let maxLen = 0;

  for(let i = 0; i < nums.length; i++){
    if(nums[i]){
      oneCount++;
    }else{
      zeroCount++;
    };

    if(zeroCount > 0 && zeroCount === oneCount){
      resetArr.push([i, zeroCount * 2]);
      curLen = curLen + zeroCount*2;
      if (curLen > maxLen) maxLen = curLen;
      zeroCount = 0;
      oneCount = 0;
      continue;
    };

    if(zeroCount > 0 && oneCount > 0){
      resetArr.push([i, Math.abs(oneCount-zeroCount)*2-1]);
      // oneCount = 0;
      // zeroCount = 0;
    }
  };
  return maxLen;
};
findMaxLength([1,0,1]);
// findMaxLength([0, 1, 0, 1, 1, 1,1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0]);

// git add