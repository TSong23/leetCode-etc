// Given linked list: 1 -> 2 -> 3 -> 4 -> 5, and n = 2.

// After removing the second node from the end, the linked list becomes 
// 1 -> 2 -> 3 -> 5.

// keep track of n many list nodes
// that suggests a stack

var removeNthFromEnd = function (head, n) {
    let myStack = [];
    let curNode = head;
    while(curNode != null){
        myStack.push(curNode);
        if(myStack.length > n+1){
            myStack.shift();
        };
        curNode = curNode.next;
    };
    let prevNode = myStack.shift();
    let removeNode = myStack.shift();
    prevNode.next = removeNode.next;

    return head; 

};