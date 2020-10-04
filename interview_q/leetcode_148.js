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

if (partition2 == null) {
        return partition1;
    }
    let sorted1 = sortList(partition1);
    let sorted2 = sortList(partition2);

    const sortedRoot = new ListNode(null);
    let sorted = sortedRoot;
    while (sorted1 || sorted2) {
        const v1 = sorted1 != null ? sorted1.val : Infinity;
        const v2 = sorted2 != null ? sorted2.val : Infinity;
        if (v1 < v2) {
            sorted.next = sorted1;
            sorted1 = sorted1.next;
        } else {
            sorted.next = sorted2;
            sorted2 = sorted2.next;
        }
        sorted = sorted.next;
    }
    sorted.next = null;

    return sortedRoot.next;
*/


var sortList = function (head) {
    if (!head) return head;

    let fast = head;
    let slow = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    };
    let head2 = slow.next;
    slow.next = null;

    if (!head2) return head;

    let left = sortList(head);
    let right = sortList(head2);

    let newHead = new ListNode(null);
    let start = newHead;
    while (left || right) {
        let hold1 = left ? left.val : Infinity;
        let hold2 = right ? right.val : Infinity;
        if (hold1 < hold2) {
            newHead.next = left;
            left = left.next;
        } else {
            newHead.next = right;
            right = right.next;
        };
        newHead = newHead.next;
    };
    if (left) newHead.next = left;
    if (right) newHead.next = right;
    return start.next; 
};