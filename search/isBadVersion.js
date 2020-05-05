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

// if (isBadVersion(upper) && !isBadVersion(lower)){
    //   if (upper - lower < 2) return upper;
    //   let myMid = Math.ceil(upper / 2);
    //   if (isBadVersion(myMid)) {
    //     return searchBetween(lower, myMid);
    //   } else {
    //     return searchBetween(myMid, upper);
    //   };
    // }else{
    //   if (isBadVersion(lower)) return lower;
    //   if (!isBadVersion(upper)) return upper + 1;
    // };

var solution = function (isBadVersion) {
  /*
   @param {integer} n Total versions
   @return {integer} The first bad version
  */

  function searchBetween(lower, upper){
    let myMid;
    while(upper - lower > 1){
      myMid = Math.round( (upper + lower)/2 );
      if(isBadVersion(myMid)){
        upper = myMid;
      }else{
        lower = myMid;
      };
    }
    return upper;
  };

  return function (n) {
    if (isBadVersion(1)) return 1;
    return searchBetween(1, n);
  };
};

function searchBetween1(lower, upper) {
  let myMid;
  while (upper - lower > 1) {
    myMid = Math.round( (upper + lower) / 2);
    if (isBadVersion1(myMid)) {
      upper = myMid;
    } else {
      lower = myMid;
    };
  }
  return upper;  
};

function isBadVersion1(n){
  if (n > 1) return true;
  return false;
};

console.log(searchBetween1(1,2));
