// Input: J = "aA", S = "aAAbbbb"
// Output: 3

var numJewelsInStones = function (J, S) {

  let jLen = J.length;
  let sLen = S.length;
  if (!jLen || !sLen) return 0;

  let count = 0;

  let hash = {};
  for(i = 0; i < jLen; i++){
    if (!hash[J[i]]){
      hash[J[i]] = J[i];
    };
  };

  for (i = 0; i < sLen; i++) {
    if (hash[S[i]]) {
      count++;
    };
  };

  return count;
};