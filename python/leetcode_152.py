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
find both max and min and switch signs if nums[i] is negative
"""

class Solution:
    def maxProduct(self, nums):
        result, posMax, negMax = nums[0], nums[0], nums[0]
    
        for i in range(1, len(nums)):
            if nums[i] < 0: posMax, negMax = negMax, posMax
            posMax = max(nums[i], posMax*nums[i])
            negMax = min(nums[i], negMax*nums[i])
            result = max(result, posMax)
        
        return result



test = Solution()
test.maxProduct([-2,3,-4])
