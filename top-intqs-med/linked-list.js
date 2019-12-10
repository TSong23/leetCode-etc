// Add Two numbers
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val){
  this.val = val;
  this.next = null;
}

// use recursion
// add current value of l1 and l2 and attach to return linked list
// once both l1 and l2 run out of numbers, return 0

var addTwoNumbers = function (l1, l2) {
  if (!l1.next && !l2.next) return null;
  
  
  let currentNode = ListNode(l2.val + l2.val);
  

  if (l1.next && l2.next){    
    currentNode.next = addTwoNumbers(l1.next + l2.next); 
  } else if (l1.next && !l2.next){
    currentNode.next = addTwoNumbers(l1.next + 0); 
  } else {
    currentNode.next = addTwoNumbers(0 + l2.next); 
  }

  return currentNode;
};

// square fill