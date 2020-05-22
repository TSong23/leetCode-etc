/*
Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a 
valid answer. Note that "cacaca" is incorrect, as the same 
characters must be together.
*/

var frequencySort = function (s) {
  const myHash = {};
  const myArr = s.split('');
  let myHeap = [];  

  myArr.forEach(c => {
    if( myHash[c]){
      myHash[c]++;
    }else{
      myHash[c] = 1;
    };
  });

  let orgArr = Object.keys(myHash).sort(function(a,b) {
    let countCompare = myHash[b] - myHash[a];
    return countCompare;
  });

  let myReturn = '';
  orgArr.forEach(c => {
    myReturn = myReturn + c.repeat(myHash[c]);
  });

  return myReturn;
};

frequencySort('tree');