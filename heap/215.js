/*

*/
var findKthLargest = function (nums, k) {
  let myStack = [];
  let l = 0;
  function stackBubble(){
    let i = 1;
    while(i < l){
      if(myStack[l-i] > myStack[l-i-1]){
        [myStack[l - i], myStack[l - i - 1]] = [myStack[l - i - 1], myStack[l - i]];
        i++;
      }else{
        break;
      };
    };
    return;
  };

  for (let i = 0; i < nums.length; i++) {
    myStack.push(nums[i]);
    l++;
    if(l > 1) stackBubble();
    if(l > k){
      myStack.pop();
      l--;
    };
  };
  return myStack[k - 1];
};

console.log(findKthLargest([-1, 2, 0],2));


