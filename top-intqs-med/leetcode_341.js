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

class NestedIterator{
    constructor(nestedList){
        this.nestedList = nestedList.forEach(el => {
            
        });
        this.nextVal;
    };
};

NestedIterator.prototype.hasNext = function () {
    if(this.nestedList.length){
        this.nextVal = this.nestedList.shift();
        return true;
    };
    return false;
};

NestedIterator.prototype.next = function () {
    // check if this.next is 1. single integer, nested integer, or list
    let hold = this.next;
    while(hold.length){
        if (hold.isIntger()) return hold.getInteger();
        hold = hold.getList();
    };
};



var i = new NestedIterator([[1, 1], 2, [1, 1]]), a = [];
while (i.hasNext()) a.push(i.next());
console.log(a)
