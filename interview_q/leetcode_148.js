/*
Given the head of a linked list, return the list after sorting it in ascending order.
Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

initial thoughts: merge sort

seperation step:
base case: head node is the only node
recursion: split the list into half using fast pointer and slow pointer
call: seperation again on head of the less and more

merge step:
while two lists have length, keep adding on to the list.
return the list


*/


var sortList = function (head) {
    let start;
    let cur;
    while(cur){
        if(cur < start){
            // insert cur to be in front of start
            // reset
        }else{
            cur = cur.next
        }
    }


};