// Given a singly linked list L: L0→L1→…→Ln - 1→Ln,
//   reorder it to: L0→Ln→L1→Ln - 1→L2→Ln - 2→…

// You may not modify the values in the list's nodes, only nodes itself may be changed.

//brute force: have two pointers, head and tail.
// node doesn't know its previous
// we can split the list in to two by having a runner go twice while a one goes once
// based on second runner, split the list, reverse the list then mrege the lists

// 1 2 3 4 => [1,1] [2,3] 
// 1 2 3 4 5 => [1,1] [2,3] [3,5]
// the head for the second list is runner1.next
// then reverse the second list
// then merge the two lists

var reorderList = function (head) {
  // split the list
  if(!head.next) return head;
  let run1 = head;
  let run2 = head;
  while(run2.next && run2.next.next){
    run1 = run1.next;
    run2 = run2.next.next;
  };
  let head2 = run1.next;
  run1.next = null;

  // reverse the list
  let prev = null;
  let curr = head2;
  let next = null;
  while(curr){
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  };
  head2 = prev;

  // merge the list
  let curr = head;
  let next = head.next;
  while(head2){
    
  };

};

