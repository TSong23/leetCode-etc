/*
function NestedInteger() {

    Return true if this NestedInteger holds a single integer, rather than a nested list.
    @return {boolean}
    this.isInteger = function() {
        ...
    };

    Return the single integer that this NestedInteger holds, if it holds a single integer
    Return null if this NestedInteger holds a nested list
    @return {integer}
    this.getInteger = function() {
        ...
    };

    Return the nested list that this NestedInteger holds, if it holds a nested list
    Return null if this NestedInteger holds a single integer
    @return {NestedInteger[]}
    this.getList = function() {
        ...
    };
};
 */

 /*
1. shift() the first element off
2. recursively flatten and add to a
3. 
 */

var NestedIterator = function (nestedList) {
    this.nestedList = nestedList;
    this.next;
    this.check = new NestedInteger();
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
    if(this.nestedList.length){
        this.next = this.nestedList.shift();
        return true;
    };
    return false;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
    // check if this.next is 1. single integer, nested integer, or list
    // nananana nanananana
    if(this.check.isInteger(this.next)) return this.next;
    while(!this.next.length){

    }
    if(this.check.getInteger(this.next)) return 
    else{

    };
};



var i = new NestedIterator([[1, 1], 2, [1, 1]]), a = [];
while (i.hasNext()) a.push(i.next());
console.log(a)
