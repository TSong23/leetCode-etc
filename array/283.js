
// Input: [0,1,0,3,12]
// Output: [1, 3, 12, 0, 0]

// must do inplace using two pointer

// [1,3,12] + [0,0]
// have non-zero pointer
// have current pointer
// have to use splice and the add it to the end?
// splice would be last non-zero pointer to current pointer
// then readjust the current pointer to be last non-zero + 1;
// adjust last non-zero to be current each iteration of non-zero

var moveZeroes = function (nums) {
  if (nums ===[]) return [];
  let zeroC = 0;
  while (!nums[0]){
    nums.shift();
    nums.push(0);
    zeroC++;
    if (zeroC >= nums.length) return nums;
  };
  
  let nzPt = 0;
  let diff;
  for (let i = 0; i < nums.length-zeroC; i++){
    if(!nums[i]){
      continue;
    }else{
      if(nzPt !== i){
        diff = i-nzPt-1;
        nums.splice(nzPt+1, diff);
        while(diff > 0){
          nums.push(0);
          diff--;
        };
        nzPt ++;
        i = nzPt;
      };
    };
  };
  return nums;
};
// nzPt = 0, i = 2

moveZeroes([1,0,1]);