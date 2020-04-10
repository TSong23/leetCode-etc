var MinStack = function () {
  this.myStack = [];
  this.myMin = null;
  this.myLen = 0;
};

MinStack.prototype.push = function (x) {
  this.myStack.push(x);
  if (this.myMin !== null){
    if ( x < this.myMin) this.myMin = x;
  }else{
    this.myMin = x;
  }
  this.myLen++;
};

MinStack.prototype.pop = function () {
  if (this.myLen){
    this.myStack.pop();
    this.myMin = Math.min(...this.myStack);
  };
};


MinStack.prototype.top = function () {
  if (this.myLen) {
    return this.myStack[this.myStack.length - 1];
  };
};


MinStack.prototype.getMin = function () {
  return this.myMin;
};

["MinStack", "push", "push", "top", 
"getMin", "pop", "getMin", "top"]

let myObj = new MinStack();
console.log(myObj.push(1));
console.log(myObj.push(2));
console.log(myObj.top());
console.log(myObj.getMin());
console.log(myObj.pop());
console.log(myObj.getMin());
console.log(myObj.top());


