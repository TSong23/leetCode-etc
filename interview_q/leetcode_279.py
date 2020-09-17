# Given a positive integer n, find the least number of perfect square numbers(for example, 1, 4, 9, 16, ...) which sum to n.

"""
least number of perfect squares: suggests back tracking

data: something to keep track of the path

1. find all possible perfect squares
2. subtract each one from input: 
3. recursively call the function
    - base case: input == 0
    - return 1 + self(input): keeps track of how many perfect squares were used
    - if n is 3 or below: we have to use 1,1,1 so just return three
4. the first call of the function: use Math.min()  


"""


class Solution:    
    def __init__(self):
        self.possibleSq = []

    def numSquares(self, n: int):
        count = 1
        while count*count < n:
            self.possibleSq.append(count*count)
            count += 1
    
    def myHelper(self, numIn):
        if numIn == 0: return 0
        idx = 0
        res = []
        while self.possibleSq[idx] > numIn:
            res.append( self.myHelper(self.possibleSq[idx] - numIn))
            idx +=1
        return min(res)

test = Solution()
test.numSquares(12)
