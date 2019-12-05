/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.length = 0;
  this.minStack = [];
  this.minStackLen = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  if (this.length === 0) {
    this.minStack.push(x);
    this.minStackLen += 1;
  }

  if (x <= this.minStack[this.minStackLen - 1]) {
    this.minStack.push(x);
    this.minStackLen += 1;
  }

  this.stack.push(x);
  this.length += 1;

  return this.stack;

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {


  if (this.stack[this.length - 1] === this.minStack[this.minStackLen - 1]) {
    this.minStack.pop();
    this.minStackLen -= 1;
  }

  this.stack.pop();
  this.length -= 1;
  return this.stack;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStackLen - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */