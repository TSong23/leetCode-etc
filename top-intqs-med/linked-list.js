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
  if (l1.next === null && l2.next === null) return 0;

};