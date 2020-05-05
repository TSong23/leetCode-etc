// Given n = 5, and version = 4 is the first bad version.

// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true

// Then 4 is the first bad version. 


// leetcode wants the function to be wrapped by isBadVersion
// just implement binary search
// find where false and true meet

// [1,2,3,4,5,6,7,8,9]  5 => true   1,5
// [1,2,3,4,5]          3 => false  3,5  

// if n/2 is true => upper, false => lower



var solution = function (isBadVersion) {
  /*
   @param {integer} n Total versions
   @return {integer} The first bad version
  */

  function searchBetween(lower, upper){
    if (isBadVersion(upper) && !isBadVersion(lower)){
      if (upper - lower < 2) return upper;
      let myMid = Math.ceil(upper / 2);
      if (isBadVersion(myMid)) {
        return searchBetween(lower, myMid);
      } else {
        return searchBetween(myMid, upper);
      };
    }else{
      if (isBadVersion(lower)) return lower;
      if (!isBadVersion(upper)) return upper + 1;
    };
  };

  return function (n) {
    return searchBetween(1, n);
  };
};

function searchBetween1(lower, upper) {
  console.log('lower:', lower);
  console.log('upper: ',upper);

  if (upper - lower < 2) return lower;
  
  let myMid = Math.ceil(upper / 2);
  if (isBadVersion1(myMid)) {
    return searchBetween1(lower, myMid);
  } else {
    return searchBetween1(myMid+1, upper);
  };
  
};

function isBadVersion1(n){
  if (n >= 4) return true;
  return false;
}

searchBetween1(1,10);