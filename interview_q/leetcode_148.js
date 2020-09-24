/*
Given the head of a linked list, return the list after sorting it in ascending order.
Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

initial thoughts: merge sort

seperation step:
base case: head node is the only node
recursion: split the list into half using fast pointer and slow pointer
call: seperation again on head of the less and more

merge step:
while two pointers that start at head1 and head2 arent null, compare the two poitners
and add to the list
return the head of the list


*/


var sortList = function (head) {
    if(!head.next) return head;

    let fast = head;
    let slow = head;
    while(fast){
        slow = slow.next;
        fast = fast.next.next;
    };
    let head2 = slow.next;
    slow.next = null;
    
    let left = sortList(head);
    let right = sortList(head2);


    while(left || right){

    }
};