// /**
//  @param {number} capacity
// */
var LRUCache = function (capacity) {

  this.length = 0;
  this.myHash = {};
  this.head = new Node('head', null);
  this.tail = new Node('tail', null);




};


LRUCache.prototype.get = function (key) {
  if (this.myHash[key]){
    // move to front of linked list
    // helper function moveToFront()
  } else {
    return -1;
  }

};


LRUCache.prototype.put = function (key, value) {
  // if key exists, move to front with new value
  // else, insert new key value pair at front
  // also, check if length of the LRU cache is at limit

  if(this.myHash[key]){ 

    // move to front function

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

    // now the nodes have been replaced

  } else {
    if (this.length >= capacity) {
      // new key and capacity reached
      // evict last node
      // place new node at front

      // evict last node and delete the key from hash
      let evictNode = this.tail.prev;
      this.tail.prev = evictNode.prev;
      evictNode.prev.next = this.tail;
      delete this.myHash[evictNode.key];

      // create new node and place new node at front
      this.myHash[key] = new Node(key, value);
      let movingNode = this.myHash[key];
      let prevFirst = this.head.next;
      this.head.next = movingNode;
      movingNode.prev = this.head;
      movingNode.next = prevFirst;
      prevFirst.prev = movingNode;

    } else {
      // function insertAtFront()
      // this.length++;
    } 
  }

};


class Node {
  constructor(key, value){
    this.key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// LRUCache cache = new LRUCache(2 /* capacity */);

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4