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
  for (let i = 0; i < s.length-1;i++){
    for(let j = i+1; j < s.length; j++){
      let wordSeg = s.slice(i,j);
      if (wordDict.includes(wordSeg)){
        i = j;
        j = i + 1;
      };
      if(j === s.length) return true;
    };
  };
  return false;
};



console.log(wordBreak("leetcode",["leet", "code"]))
