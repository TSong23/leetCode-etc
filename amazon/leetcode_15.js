// Given an array nums of n integers, are there elements a, b, c in nums such 
// that a + b + c = 0 ? Find all unique triplets in the array which gives the sum of zero.

//   Note:

// The solution set must not contain duplicate triplets.

//   Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

//   A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// the brute force way is to generate all unique combinations of three 
// then go through each and check if it is zero

function threeSum(nums){

  let arrLen  =nums.length;
  let arrCom = [];
  let reArr = [];
  let myHash = {};
  for(let i = 0; i<arrLen-2;i++){
    for(let j = i+1; j < arrLen - 1; j++){
      for(let k = j+1; k < arrLen; k++){
        let cur = [nums[i], nums[j], nums[k]];
        if( cur.reduce(function(a,b){a+b},0)){
          continue;
        }else{
          let cur2 = cur.sort();
          if(myHash[cur2]){
            continue;
          }else{
            myHash[cur2] = 1;
            arrCom.push(cur);
          }                
        };
      };
    };
  };
  arrCom.forEach(arr => {
    if(arr.reduce(function(a,b){return a+b}) === 0) reArr.push(arr);
  });
  return reArr;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));


