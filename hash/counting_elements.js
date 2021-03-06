// Input: arr = [1, 2, 3]
// Output: 2
// Explanation: 1 and 2 are counted cause 2 and 3 are in arr.

// Input: arr = [1, 1, 3, 3, 5, 5, 7, 7]
// Output: 0
// Explanation: No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.

// create a hash
// then loop through

var countElements = function (arr) {
  let myHash = createHash(arr);
  let myCount = 0;

  Object.keys(myHash).forEach(key => {
    let numKey = parseInt(key) + 1;
    if (myHash[`${numKey}`]) myCount += myHash[key];
  });
  return myCount;
};

function createHash(arr){
  let reHash = {};
  arr.forEach(el => {
    if (reHash[el]){
      reHash[el]++;
    } else{
      reHash[el] = 1;
    };
  });
  return reHash;
};



countElements([1,2,3]);