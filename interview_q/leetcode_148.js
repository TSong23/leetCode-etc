/*
Given the head of a linked list, return the list after sorting it in ascending order.
Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

initial thoughts: 

keep track of start node, current node

the first time, current node is < start node, start node is fixed
send all nodes that are less than start node to be in front of start node
reloop and determine a new start node

when the end is reached without having defined a start node, the list is sorted
use a helper function

outer loop: how do i solve this problem?
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