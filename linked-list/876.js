// Input: [1, 2, 3, 4, 5]
// Output: Node 3 from this list(Serialization: [3, 4, 5])
// The returned node has value 3.(The judge's serialization of this
// node is [3,4,5]).
// Note that we returned a ListNode object ans, such that:
// ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 
// and ans.next.next.next = NULL.


var middleNode = function (head) {
  let listLen = 1;
  let countNode = head;
  while (countNode.next){
    listLen++;
    countNode = countNode.next;
  };

  let mid;
  if (listLen % 2 === 0){
    mid = Math.round((listLen)/2) + 1;
  } else{
    mid = Math.round((listLen) / 2);
  };

  for(let i = 1; i < mid; i++){
    head = head.next;
  };
  return head;
};

console.log(Math.round(5 / 2) + 1);