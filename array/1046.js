// Input: [2, 7, 4, 1, 8, 1]
// Output: 1
// Explanation:
// We combine 7 and 8 to get 1 so the array converts to[2, 4, 1, 1, 1] then,
// we combine 2 and 4 to get 2 so the array converts to[2, 1, 1, 1] then,
// we combine 2 and 1 to get 1 so the array converts to[1, 1, 1] then,
// we combine 1 and 1 to get 0 so the array converts to[1] then 
// that's the value of last stone.


// implement a max heap with partial functionality
// need add to end and sift up


var lastStoneWeight = function (stones) {
  if (stones.length === 1) return stones[0];
  
  let myHeap = stones.sort(function(a,b){return b-a});
  
  function siftUp(val){
    myHeap.push(val);
    let idx = myHeap.length-1;
    while(val > myHeap[idx-1]){
      [myHeap[idx], myHeap[idx-1]] = [myHeap[idx-1], myHeap[idx]];
      idx--;
    };
  };

  let big1, big2, diff;

  while (myHeap.length > 1){
    console.log(myHeap);
    big1 = myHeap.shift();
    big2 = myHeap.shift();
    diff = big1 - big2;
    if (diff){
      siftUp(diff);
    };
  };
  
  if (myHeap.length){
    return myHeap[0] ;
  }else{
    return 0;
  };
};

console.log(lastStoneWeight([2, 2]));
