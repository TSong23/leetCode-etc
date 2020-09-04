"""
Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

use kadane's algo
if multiplying cur number to cursum increases, do it. then compare to max
if not, start a new subArr

variables: 
    globalMax
    maxValue: use abs value to determine size. at the end, if this is
            positive, return this
    localMax: if localMax exceeds globalMax, replace

Constant Memory
N time
well i guess tomorrow
"""

class Solution:
    def maxProduct(self, nums):
        localMax, maxValue, globalMax = nums[0], nums[0], nums[0]
        for i in range(1, len(nums)):      


        return



test = Solution()
test.maxProduct([2, 3, -2, 4])
