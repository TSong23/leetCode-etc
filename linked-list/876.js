// Input: [1, 2, 3, 4, 5]
// Output: Node 3 from this list(Serialization: [3, 4, 5])
// The returned node has value 3.(The judge's serialization of this
// node is [3,4,5]).
// Note that we returned a ListNode object ans, such that:
// ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 
// and ans.next.next.next = NULL.


var middleNode = function (head) {
  let slow = head;
  let fast = head; 

  while (fast && fast.next){
    fast = fast.next.next;
    slow = slow.next;
  };
  return slow;
};

console.log(Math.round(5 / 2) + 1);