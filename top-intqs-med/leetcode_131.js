/*
Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

Example:

Input: "aab"
Output:
[
  ["aa","b"],
  ["a","a","b"]
]

data struc: 2d arr
backt racking question

if the input is "aab", check if [0,0] "a" is palindrome. then check [0,1] "aa", then [0,2] "aab".
While checking [0,0], the rest of string is "ab", use ab as input to make a recursive call.
if the input is "aab", check if [0,0] "a" is palindrome. then check [0,1] "aa", then [0,2] "aab". While checking [0,0], the rest of string is "ab", use ab as input to make a recursive call. ![enter image description here][1]

in this example, in the loop of i=l+1, a recursive call will be made with input = "ab".
Every time a recursive call is made, the position of l move right.

How to define a correct answer?
Think about DFS, if the current string to be checked (Palindrome) contains the last position, in this case "c", this path is a correct answer, otherwise, it's a false answer.



this is a really hard problem

*/




var partition = function (s) {
  const res = [];

  const isPalindrome = (l, r) => {
    // function to determine if its is a palindrome for a given slice of original string
    // l and r are indexes to begin checking at
    while (l < r) {
      if (s[l] !== s[r]) return false;
      l++;
      r--;
    }
    return true;
  };

  const go = (l, list) => {
    if (l === s.length) {
      // if left index reaches the end, all partitions have been found for that pathway
      res.push(list);
    } else {
      for (let r = l; r < s.length; r++) {
        if (isPalindrome(l, r)) {
          // [...list, s.slice(l, r+ 1)] 
          // spread in current list and add the newly sliced palindrome partition
          go(r + 1, [...list, s.slice(l, r + 1)]);
        }
      }
    }
  };

  go(0, []);
  return res;
};

console.log(partition())