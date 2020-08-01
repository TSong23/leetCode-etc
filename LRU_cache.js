// /**
//  @param {number} capacity
// */

// use a doubly linked list and hash map
// doubly linked list node key is key to hash map
// hashmap stores the node; ensures 0(1) access of any node

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  };
};

var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.length = 0;
  this.myHash = {};
  this.head = new Node('head',null);
  this.tail = new Node('tail', null);
  this.head.next = this.tail;
  this.tail.prev = this.head;
};


LRUCache.prototype.moveFront = function(key){
  // if already at front, return
  if (key === this.head.next.key) return;
  // movingNode = node moving to front
  // prevFirst = previous first in line
  let prevFirst = this.head.next;
  let movingNode = this.myHash[key];

  // cut out the moving node first
  let movePrev = movingNode.prev;
  let moveNext = movingNode.next;
  movePrev.next = moveNext;
  moveNext.prev = movePrev;

  // insert moving at front
  this.head.next = movingNode;
  movingNode.prev = this.head;
  movingNode.next = prevFirst;
  prevFirst.prev = movingNode;

  return;
};

LRUCache.prototype.deleteLast = function(){
  let prevLast = this.tail.prev;
  let newLast = prevLast.prev;
  // cut prevLast
  newLast.next = this.tail;
  this.tail.prev = newLast;
  prevLast.next = null;
  prevLast.prev = null;

  this.myHash[prevLast.key] = null;

  return;
};

LRUCache.prototype.insertFront = function (newNode){
  let prevFirst = this.head.next;
  // cut previous first
  this.head.next = newNode;
  prevFirst.prev = newNode;
  newNode.prev = this.head;
  newNode.next = prevFirst;
  return;
};

LRUCache.prototype.get = function (key) {
  // get operation accesses the hash and returns hash[key]
  // also need to move the node to be next to head 
  // use helper function moveFront
  // if its already at front then return the val
  // not at front, move to front function and return val
  if (this.myHash[key]){   
    this.moveFront(key);
    return this.myHash[key].val;    
  } else {
    return -1;
  };
};

LRUCache.prototype.put = function (key, value) {
  // if key exists, move to front, rewrite value
  // else, insert new key value pair at front
  // also, check if length of the LRU cache is at limit

  if(this.myHash[key]){
    // move to front function then rewrite the value
    this.moveFront(key);
    this.myHash[key].val = value;
  } else {
    // insert new node at front
    let newNode = new Node(key, value);
    this.myHash[key] = newNode;
    this.insertFront(newNode);
    this.length++;
    // check if max length reached and delete accordingly
    if(this.length > this.capacity){
      this.deleteLast();
      this.length--;
    }
  };
  return;
};


let cache = new LRUCache(2);
cache.put(2,1);
cache.put(2, 2);
console.log(cache.get(2));
cache.put(1, 1);
cache.put(4, 1);
cache.get(2);




