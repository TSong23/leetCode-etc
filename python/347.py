# Given a non-empty array of integers, return the k most frequent elements.

# Example 1:

# Input: nums = [1, 1, 1, 2, 2, 3], k = 2
# Output: [1, 2]
# Example 2:

# Input: nums = [1], k = 1
# Output: [1]

# use hash map and min heap
# O(n) in creating hash table
# O(n logn) in creating max heap? or min heap

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
		my_dict = {};
		for i in nums:
			if 'i' in my_dict: 
				my_dict[i] += 1
				continue
			my_dict[i] = 1
		
