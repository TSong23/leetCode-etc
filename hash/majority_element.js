var majorityElement = function (nums) {
  let myHash = {};
  let maj = nums.length / 2;
  let ret;
  nums.forEach(el => {
    if (myHash[el]) {
      myHash[el]++;
    } else {
      myHash[el] = 1;
    };
  });

  Object.keys(myHash).forEach(key => {
    if (myHash[key] > maj) ret = parseInt(key);
  });
  return ret;
};