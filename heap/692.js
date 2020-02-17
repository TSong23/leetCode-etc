
// Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// Output: ["i", "love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.


// need to create a binary heap
// put all words in hash, then iterate through hash and put in to heap
var topKFrequent = function (words, k) {
   
  let myHash = {};
  words.forEach(word => {
    if (myHash[word]){
      myHash[word]++;
    }else{
      myHash[word] = 1;
    }
  });

  let myHeap = [];
  let heapLen = 0;
  Object.keys(myHash).forEach(key => {
    myHeap.push(key);
    heapLen++;
    let idx = heapLen -1;
    heapHelper(key, idx);
    if (heapLen > k){
      myHeap.pop();
      heapLen--;
    }
  })

  function heapHelper(key, idx){
    // in this heap, the left and right order matters
    // check if it is left most or greater than left
    // check if last element is greater than parent

    let parentIdx = Math.floor( (idx-1) / 2);    
    let parentKey = myHeap[parentIdx];

    let leftChildIdx = parentIdx * 2;
    // compare with its sibling
    if (idx > leftChildIdx){
      let leftChildKey = myHeap[leftChildIdx];
      heapCompare(key, leftChildKey, leftChildIdx, idx);
    }

    if (heapCompare(key, parentKey, parentIdx, idx)) heapHelper(key, parentIdx);
    
    return;
  }

  function heapCompare(key, parentKey, parentIdx, idx){
    if (myHash[key] > myHash[parentKey]) {
      [myHeap[idx], myHeap[parentIdx]] = [myHeap[parentIdx], myHeap[idx]];
      return true;
    } else if (myHash[key] === myHash[parentKey]) {
      if (key < parentKey) {
        [myHeap[idx], myHeap[parentIdx]] = [myHeap[parentIdx], myHeap[idx]];
        return true;
      }
    }
    return false; 
  }

  return myHeap;

};

topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 3);