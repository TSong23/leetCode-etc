/*
Input: ["StockSpanner","next","next","next","next","next","next","next"], [[],[100],[80],[60],[70],[60],[75],[85]]
Output: [null,1,1,1,2,1,4,6]
Explanation:
First, S = StockSpanner() is initialized.  Then:
S.next(100) is called and returns 1,
S.next(80) is called and returns 1,
S.next(60) is called and returns 1,
S.next(70) is called and returns 2,
S.next(60) is called and returns 1,
S.next(75) is called and returns 4,
S.next(85) is called and returns 6.

Note that (for example) S.next(75) returned 4, because the last 4 prices
(including today's price of 75) were less than or equal to today's price.
*/

// memoization
// this.memo = { idx : num of span}


var StockSpanner = function() {
  this.stack = [];
  this.stackIdx = -1;

};


StockSpanner.prototype.next = function (price) {
  this.stack.push(price);
  this.stackIdx++;



  let tempIdx = this.stackIdx;
  let count = 0; 
  while(tempIdx >= 0 ){
    if(this.stack[tempIdx] <= price){
      count++;
      tempIdx--;
    }else{
      break;
    };
  };
  return count; 
};

let myStack = new StockSpanner();
console.log(myStack.next(100));
console.log(myStack.next(80));
console.log(myStack.next(60));
console.log(myStack.next(70));
console.log(myStack.next(60));
console.log(myStack.next(75));
console.log(myStack.next(85));


