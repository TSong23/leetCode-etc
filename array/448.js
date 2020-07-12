
// Input:
// [4, 3, 2, 7, 8, 2, 3, 1]

// Output:
// [5, 6]

var findDisappearedNumbers = function (nums) {
  nums.sort();
  count = 0;
  let reArr = [];
  for(let i = 0; i < nums.length; i++){
    if(nums[i] === count + 1){
      count+=1;
    }else{
      reArr.push(count+1);
      count+=1;
    };
  };
  return reArr;
};

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);