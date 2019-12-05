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