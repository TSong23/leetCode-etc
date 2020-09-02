"""
Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

1. the main function uses for loop to check every element
2. if zero: row and col val to an array that saves which rows and cols need to be zero
3. go through the array and turn the matrix to zero
"""


class Solution:
    def setZeroes(self, matrix):
        rowZero, colZero = [], []
        
        for i in range(len(matrix)):
            for j in range((len(matrix[0]))):
                if matrix[i][j] == 0:
                    rowZero.append(i)
                    colZero.append(j)
        
        while len(rowZero) > 0:
            dr = rowZero.pop()
            matrix[dr][:] = 0
        while len(colZero) > 0:
            dl = colZero.pop()
            matrix[:,dl] = 0
        
        return matrix

test = Solution()
test.setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]])
