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

  let cnode1 = l1;
  let cnode2 = l2; 
  let newList = ListNode(0);
  let addNode;
  let carry = 0;

  while (cnode1 || cnode2){

    if( cnode1 && cnode2){
      newList.val = cnode1.val + cnode2.val + carry;
      carry = 0;
      if (newList.val > 10){
        carry = newList.val - 10;
        newList.val -= 10;
      }
    } else if (cnode1 && !cnode2){
      newList.val = cnode1.val + carry;
      carry = 0;
      if (newList.val > 10) {
        carry = newList.val - 10;
        newList.val -= 10;
      }
    } else{
      newList.val = cnode2.val + carry;
      carry = 0;
      if (newList.val > 10) {
        carry = newList.val - 10;
        newList.val -= 10;
      }
    }

    cnode1 = cnode1.next;
    cnode2 = cnode2.next;
    newList.next = 0;


  }

  return newList;

};