"""
Here, a circular array means the end of the array connects to the beginning of the array.  (Formally, C[i] = A[i] when 0 <= i < A.length, and C[i+A.length] = C[i] when i >= 0.)

Also, a subarray may only include each element of the fixed buffer A at most once.  (Formally, for a subarray C[i], C[i+1], ..., C[j], there does not exist i <= k1, k2 <= j with k1 % A.length = k2 % A.length.)

Input: [3,-1,2,-1]
Output: 4
Explanation: Subarray [2,-1,3] has maximum sum 2 + (-1) + 3 = 4
also, we cannot visit arr1[0] and arr2[0]

Input: [1,-2,3,-2]
Output: 3
Explanation: Subarray [3] has maximum sum 3
"""
# use Kadane's algo: a DP approach
# we take the max of each step and see if we can increase it by adding current element
# [1, -2, 3, 4, -6]
# 1 is the max
# don't add -2, 1 is still global max; but local max is -1 because given sub array [1, -2], -1 is max
# going in to 3, we have two options: [3] and [1, -2] -> max(A[i], localMax); localMax = [3]; globalMax = 3
# lets combine two iterations of array in to 1

class Solution:
    def maxSubarraySumCircular(self, A):
        myArr = A + A
        localMax = 0 
        globalMax = float('-inf')
        for i in range(len(myArr)):
            if localMax > myArr[i]+localMax: 
                localMax = 0
            else: 
                localMax = myArr[i]+localMax
            if localMax > globalMax: globalMax = localMax
        return globalMax


test = Solution()
test.maxSubarraySumCircular([3, -1, 2, -1])
