# Given a positive integer n, find the least number of perfect square numbers(for example, 1, 4, 9, 16, ...) which sum to n.

"""
least number of perfect squares: suggests back tracking

data: something to keep track of the path

1. find all possible perfect squares
2. subtract each one from input: 
3. recursively call the function

"""


class Solution:
    def numSquares(self, n: int) -> int:
        possibleSq = []
        count = 1
        while count*count < n:
            possibleSq.append(count*count)
            count += 1
        
        