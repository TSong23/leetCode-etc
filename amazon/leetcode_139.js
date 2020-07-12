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
// small bit 2: once chars in String is used, cannot be reused. so remove the chars and break up the string in to separate sections
// small bit 3: once a word is found, go on and find the next one from Dict

// repeat small bits
// also, we can count the amount of chars in dict and if > chars in S, return false

var wordBreak = function (s, wordDict) {  
  //check for chars in Dict > chars in s
  let charCount = 0;
  wordDict.forEach(element => {
    charCount += element.length;
  });
  if (charCount > s.length) return false;

  // keep a editable copy of s
  let copyS = s;
  
  // word search function
  function wordSearch(word){
    for (let i = 0; i<s.length;i++){
      if(s[i] === word[0]){
        //confirm same word
      };
    };
  };

  // same word function
  function sameWord()
};



console.log(wordBreak("leetcode",["leet", "code"]))
