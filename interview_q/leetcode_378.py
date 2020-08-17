"""
matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

return 13.


[
[1,2],
[1,3]
]
k = 2,
return 1

"""
# the last element of a row is not necessarily smaller than the first element of next row
# why not push every element in to an array, sort it, then return k from end?
# works and its 82.16% faster

class Solution:
    def kthSmallest(self, matrix, k):
        row = len(matrix)
        col = len(matrix[0])
        reArr = []
        for i in range(row):
            for j in range(col):
                reArr.append(matrix[i][j])
        reArr.sort()
        return reArr[k-1]


# the binary or heap solutions:
# https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/discuss/301357/Java-0ms-(added-Python-and-C%2B%2B)%3A-Easy-to-understand-solutions-using-Heap-and-Binary-Search
