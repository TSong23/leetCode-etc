class Solution:
    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:
        n, m = len(matrix), len(matrix[0])
        if k < m:
            return matrix[0][k-1]
        count, i = 0, 0
        while count < k:
            count += m
            i += 1
        diff = m*i - k
        print(m, i, diff)
        return matrix[i-1][m - diff - 1]
