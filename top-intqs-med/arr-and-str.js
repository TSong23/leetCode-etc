// group anagrams
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
//   Output:
// [
//   ["ate", "eat", "tea"],
//   ["nat", "tan"],
//   ["bat"]
// ]

var groupAnagrams = function (strs) {

  // go through each word and sort chars by alphabet
  // recombine to create str
  // create a hash with keys as sorted str
  // the values to the keys will be the original str
  // return 2d arr

  let anaHash = {};

  strs.forEach(str => {
    let temp = str.split('').sort().join('');
    if (anaHash[temp] === undefined){
      anaHash[temp] = [str]
    }else {
      anaHash[temp].push(str);
    }
  });

  let returnArr = [];

  Object.values(anaHash).forEach(arr => {
    returnArr.push(arr);
  })

  return returnArr;


};


// Longest Substring Without Repeating Characters
var lengthOfLongestSubstring = function (s) {
  let reArr = new Array(26).fill(0);
  let count = 0;
  let tempCount = 0;

  for (let i = 0; i < s.length; i++) {

    let idx = s.charCodeAt(i) - 97;

    if (reArr[idx] !== 0) {
      reArr.fill(0);
      reArr[idx] += 1;
      if (tempCount > count) {
        count = tempCount;
      }
      tempCount = 1;
    } else {
      reArr[idx] += 1;
      tempCount += 1;
    }

  }
  if (tempCount > count) {
    count = tempCount;
  }

  return count;
};

console.log(lengthOfLongestSubstring("pwwkew"));
