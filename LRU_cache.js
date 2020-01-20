// /**
//  @param {number} capacity
// */
var LRUCache = function (capacity) {

  this.length = 0;
  this.myHash = {};
  this.head = new Node(null);
  this.tail = new Node(null);


};

// /** 
//  * @param {number} key
//  * @return {number}
//  */
LRUCache.prototype.get = function (key) {
  if (this.myHash[key]){
    // move to front of linked list
    // helper function moveToFront()
  }

};

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
LRUCache.prototype.put = function (key, value) {
  // if key exists, move to front with new value
  // else, insert new key value pair at front
  // also, check if length of the LRU cache is at limit

  if (this.length > capacity){
    // function moveToFront()
  } else {
    // function insertAtFront()
    // this.length++;
    
  }

};


class Node {
  constructor(value){
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