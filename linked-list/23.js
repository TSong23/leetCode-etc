// Input:
// [
//   1 -> 4 -> 5,
//   1 -> 3 -> 4,
//   2 -> 6
// ]
// Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6

// lists is array of list heads
// try brute force: a forloop inside while loop

// use the while loop: if the smallestHead = Infinity, then it means all the lists ran out


var mergeKLists = function (lists) {

  let smallestHead = Infinity;
  let myListHead = ListNode(null);
  let myListTail = ListNode(null);
  

  while (smallestHead < Infinity){
    smallestHead = Infinity;
    lists.forEach(head => {
      if(head && head.val < smallestHead){
        smallestHead = head;
      }
    });
  }
  

  myListTail = smallestHead;
  myListHead.next = myListTail;


  console.log(smallestHead);

};