# // reverser a palindromic linked list
# // split the list in half
# // take the head on one list the halves, reverse it
# // them compare the two lists

# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def isPalindrome(self, head):
        fast, slow = head
        