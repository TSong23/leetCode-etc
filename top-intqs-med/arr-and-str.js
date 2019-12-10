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

var lengthOfLongestSubstring = function(s){

  let hashMap = {}, start = 0, max = 0;
  for (let i = 0; i < s.length; i++) {
    if (hashMap[s[i]] != null) {
      if (hashMap[s[i]] + 1 > start) { // if the character is after start
        start = hashMap[s[i]] + 1; // update start position
      }
    }
    hashMap[s[i]] = i; // update char position
    max = (i - start + 1) > max ? (i - start + 1) : max; // update max if neccessary
  }
  return max;
};

console.log(lengthOfLongestSubstring("abbcdb"));
//efghijklmnopqrstuvwxyz



// longest palindrome
// O(n^2) 
var longestPalindrome = function (s) {
  // adjust string to be odd
  const newString = getModifiedString(s);

  // create P array to keep track of palidrome lengths
  let P = new Array(newString.length).fill(0);

  // keep track of center and Right boundary
  let center = 0;
  let rightB = 0;

  //iteration through string
  for (let i = 0; i < newString.length; i++){

    // find mirror index
    // based on algo, i is always ahead of center
    let idx_mirror = center - (i - center);

    // check is idx less than rightB?
    if ( i < rightB) P[i] = Math.min(rightB - i, P[idx_mirror]); 

    // expansion of boundaries
    // use a while loop to expand
    let right = i + (P[i] + 1);
    let left = i - (P[i] + 1);

    while (right < newString.length && left >= 0 && newString[left] === newString[right]){
      P[i]++;
      right++;
      left--;
    }
    // check if i has passed the rightB and readjust the center position
    if (i + P[i] > rightB){
      center = i;
      rightB = i + P[i];
    }
  }

  let maxLen = Math.max(...P);
  let index = P.indexOf(maxLen);

  return newString.substring(index - maxLen - 1, index + maxLen).split('#').join('');

};

function getModifiedString(s){
  let fill = '#';
  for (let char of s){
    fill += char;
    fill += '#';
  }
  return fill;
}

