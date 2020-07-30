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

// solution: sort the array first
// then set pointers L, R as i+1 and at the end respectively
// see if nums[i] + nums[i+1] + nums[end] <>= 0
// if sum > 0, move L pointer, = 0, save the solution set, move right pointer
// if solution already exists in hash, dont save
// break this loop when nums[i] >= 0.


function threeSum(nums){
  if(nums.length < 3) return [];

  let reArr = []; 
  let myArr = nums.sort(function(a,b){return a -b;});
  let arrLen = nums.length;
  let L ,R; 
  let solHash = {};
  if (myArr[0] === myArr[arrLen - 1] && myArr[0] === 0) return [[0, 0, 0]];

  for(let i = 0; i < arrLen-2; i++){
    if(myArr[i] > 0 ) break;
    L = i+1;
    R = arrLen-1;

    while(L < R){
      if( (myArr[i] + myArr[L] + myArr[R]) === 0){
        let myKey = [nums[i] , nums[L], nums[R]].toString();
        if(solHash[myKey] ){
          R-=1;
        }else{
          solHash[myKey] = [nums[i], nums[L], nums[R]];
        };
      } else if ((myArr[i] + myArr[L] + myArr[R]) < 0){
        L+=1;
      }else{
        R-=1;
      };
    };
  };
  reArr = Object.values(solHash);
  return reArr; 

};

console.log(threeSum([-1, -2, -3, 4, 1, 3, 0, 3, -2, 1, -2, 2, -1, 1, -5, 4, -3]));


