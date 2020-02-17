var singleNumber = function (nums) {
  let myHash = {};
  nums.forEach(num => {
    if (myHash[num]) {
      myHash[num]++;
    } else {
      myHash[num] = 1;
    }
  });

  let myNum;
  Object.keys(myHash).forEach(key => {
    if (myHash[key] !== 3) myNum = key;
  });

  return myNum;
};