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

  // one list is null
  // one list runs out first
  // numbers add to be more than 10

  // initialize a new linked list
  // let constantly changing node to be eqaul to first node
  // we need to carry values
  // sum will keep track of values
  const newList = new ListNode(0);
  let tail = newList;
  let carry = 0;
  let sum;

  while ( l1 || l2 || carry){

    // go through l1, l2, c and add up the present values
    // use ternary to check if value exists
    sum = l1 ? l1.val : 0;
    sum += l2 ? l2.val : 0; 
    sum += carry; 

    // the next one to add on to the tail will be another node
    tail.next = new ListNode(sum%10);
    tail = tail.next; 

    // carry = 1 if sum > 10, if not, 0
    carry = sum >= 10 ? 1 : 0;

    // check if l1 was null. if so, let it remain null. if not, set to next
    
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null; 
  }

  return newList.next;

};

// Intersection of Two Linked Lists
var getIntersectionNode = function (headA, headB) {

};
