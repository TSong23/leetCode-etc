var firstUniqChar = function (s) {
  if (!s.length) return -1;

  let myHash = {};
  let minIdx = s.length;

  let char;
  for (let i = 0; i < s.length; i++) {
    char = s[i];
    if (myHash[char]) {
      myHash[char].push(i);
    } else {
      myHash[char] = [i];
    };
  };

  Object.keys(myHash).forEach(key => {
    if (myHash[key].length === 1 && myHash[key][0] < minIdx) minIdx = myHash[key][0];
  });
  if (minIdx === s.length) return -1;
  return minIdx;
};
