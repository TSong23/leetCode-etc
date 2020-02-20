
// Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// Output: ["i", "love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.


// need to create a binary heap
// put all words in hash, then iterate through hash and put in to heap
var topKFrequent = function (words, k) {
   
  let myHash = {};
  words.forEach(word => {
    myHash[word] = myHash[word]+1 || 1;
  });

  let myHeap = Object.keys(myHash).sort((a, b) => {
    let countCompare = myHash[b] - myHash[a];
    if (countCompare == 0) return a.localeCompare(b);
    else return countCompare;
  }
  );
  

  return myHeap.slice(0,k);

};

topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4);