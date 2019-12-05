// Delete Node in a Linked List
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};


// remove Nth node from End of List
var removeNthFromEnd = function (head, n) {

  // let i count the length of the linked list
  // i - n gives the remove node
  // n = 1 => remove last node
  // n = 3 => linked list must be at least 3

  if (head.next === null){
    return null;
  }

  let i = 0;
  let currentNode = head;
  
  for (i ; i < n-1; i++){
    currentNode = currentNode.next;
  }
    
  let removeNode = head;
  while (currentNode.next !== null){
    currentNode = currentNode.next;
    removeNode = removeNode.next;
  }

  removeNode.val = removeNode.next.val;
  removeNode.next = removeNode.next.next;

  return head;
};


// reverse linked list
var reverseList = function (head) {

  if (head === null) {
    return null
  }

  let currentNode = head;
  let newHead = head;

  // currentNode will be maintained as head
  // cut next node of currentNode
  // connect currentNode to next next
  // connect cut node in front of current node



  while (currentNode.next !== null) {
    let nextNode = currentNode.next;
    currentNode.next = currentNode.next.next;
    nextNode.next = newHead;
    newHead = nextNode;
  }
  return newHead;

};

//square fill
