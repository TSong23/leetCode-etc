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
// dvdf => 3
// if hash gets value other than 1, set to 1 but recount
// abcdaefgb => abcd, bcdaefg
// dabac => need to delete d and a but not b
// so keep track of order of d and a. when second a comes in, delete all letters
// up to including first a.
// use hash map;
// keys are letters, values are the respective positions

var lengthOfLongestSubstring = function(str){

  let reHash = {};
  "abcdefghijklmnopqrstuvwxyz".split('').forEach(let => reHash[let] = [0, null]);
  let count = 0;
  let tempCount = 0;

  for (let i = 0; i < str.length; i++) {

    if ( reHash[str[i]][0] !== 0  ){

      Object.keys(reHash).forEach(key => {
        if (reHash[key][1] < i){
          tempCount += reHash[key][0];
          reHash[key] = [0, null];
        }
      });
      if (tempCount > count){
        count = tempCount;
      }
      reHash[str[i]] = [1, i];
      tempCount = 0;

    } else {
      reHash[str[i]] = [1, i]
    }

  }

  return count;
};

console.log(lengthOfLongestSubstring("abbcdb"));
//efghijklmnopqrstuvwxyz