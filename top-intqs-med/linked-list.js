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
// the value of intersection cannot be zero
// If the two linked lists have no intersection at all, return null.
// The linked lists must retain their original structure after the function returns.
// You may assume there are no cycles anywhere in the entire linked structure.
// Your code should preferably run in O(n) time and use only O(1) memory.

// O(n) time => run through once
// O(1) memory

// Input: intersectVal = 8, listA = [4, 1, 8, 4, 5], listB = [5, 0, 1, 8, 4, 5], skipA = 2, skipB = 3
// Output: Reference of the node with value = 8

// there is a way to even out the length of the two linked lists
// or find the length of the two lists and find the difference
// if the two lists link, they must end with the same nodes
// so if the meeting occurs, it must occur after the difference in lengths

var getIntersectionNode = function (headA, headB) {

  if (!headA && !headB) return null;

  let lenA = getLength(headA);
  let lenB = getLength(headB);

  if (!lenA || !lenB) return null;

  let lenDiff = Math.abs(lenA - lenB);
  // console.log("lenA", lenA);
  // console.log("lenB", lenB);
  // console.log("lenDiff", lenDiff);

  let long, short;

  if (lenA > lenB) {
    long = headA;
    short = headB;
  } else {
    long = headB;
    short = headA
  }

  let shave = 0;
  while (shave < lenDiff) {
    long = long.next;
    shave += 1;
  }

  // console.log("long", long.val);
  // console.log("short", short.val);


  while (long) {
    if (long === short) {
      return long;
    } else {
      long = long.next;
      short = short.next;
    }
  }

  return null;
};

function getLength(listHead) {

  if (!listHead) return null;

  let count = 1;
  let t = listHead;
  while (t.next) {
    count += 1;
    t = t.next;
  };
  return count;
}


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {

};
