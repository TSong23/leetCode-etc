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
// solve by using tabulation or memoization

var wordBreak = function (s, wordDict) {  
  let table = [];

  for(let len = 1; len <=s.length; len++){
    for(let idx = 0; idx < len; idx++){
      if(table[idx] && wordDict.includes(s.slice(i,len))){
        table[len] = true;
        break;
      };
    };
  };
  return table[s.length]||false;
};



console.log(wordBreak("aaaaaaa", ["aaaa", "aaa"]))
