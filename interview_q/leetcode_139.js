// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.

// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false

// initial thoughts: dp problem => break up in to smaller bits
// small bit 1: confirm if a word from Dict exists by iteration or stack
// For each index i see if we can find a word from the available words in the substring s[i..j) (ie. i inclusive to j non-inclusive). If found, then we can reach j. Recursively continue this process with the goal of reaching the end index N of the input string s. Return true if and only if we can reach N.


var wordBreak = function (s, wordDict) {  
  let idx = 0;
  let hold = s;
  while(hold.length){
    idx++;
    let wordSeg = hold.slice(0,idx);
    if (wordDict.includes(wordSeg)) {
      hold = hold.slice(idx);
      idx = 0;
    };    
    if(idx > hold.length) return false;
  }
  return true;
};



console.log(wordBreak("aaaaaaa", ["aaaa", "aaa"]))
