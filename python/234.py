# // reverser a palindromic linked list
# // split the list in half
# // take the head on one list the halves, reverse it
# // them compare the two lists

# 1 2 3 2 1
#   s f 
#     s   f
#     r s f


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def isPalindrome(self, head):
        if(not head or not head.next): return True
        fast = slow = head
        while (fast and fast.next):
            slow=slow.next
            fast = fast.next.next
        
        rev = ListNode(slow.val)
        slow=slow.next

        while(slow):
            prev=rev
            curr=ListNode(slow.val)
            curr.next = prev
            rev = curr
            slow=slow.next            

        while(rev):
            if(rev.val!=head.val):
                return False
            rev=rev.next
            head=head.next
        return True

