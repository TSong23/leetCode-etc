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
        curVal, maxValue, globalMax = nums[0], nums[0], nums[0]
        start = 0
        maxS, maxE = 0, 0
        for i in range(1, len(nums)):      
            curVal = curVal * nums[i]
            if abs(curVal) > abs(maxValue):
                maxValue = curVal
            if curVal >= globalMax:
                globalMax = curVal
            else: 
                curVal = 1
                maxS = i+1
                maxE = 1
                

        return nums.slice(maxS, maxE+1)



test = Solution()
test.maxProduct([2, 3, -2, 4])
