"""
Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:

Return true if there exists i, j, k
such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
Note: Your algorithm should run in O(n) time complexity and O(1) space complexity.


return boolean

space complexity points to fact we only need variables
one pass through

if max changes twice, then yes
if global min is reached at idx i where i <= len(nums)-3, then yes
"""

class Solution:
    def increasingTriplet(self, nums):
        max_count = 0
        max_glo = float('-inf')
        min_idx = 0
        min_glo = float('inf')
        for i in range(0, len(nums)):
            if nums[i] > max_glo:
                max_glo = nums[i]
                max_count += 1
                if max_count >= 3:
                    return True
            if nums[i] < min_glo:
                min_glo = nums[i]
                min_idx = i
        
        if min_idx <= (len(nums) - 3):
            return True 
        return False