# Any live cell with fewer than two live neighbors dies, as if caused by under-population.
# Any live cell with two or three live neighbors lives on to the next generation.
# Any live cell with more than three live neighbors dies, as if by over-population..
# Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

"""
Data Struc: Array
Helper Func: determine 0 or 1; save to helper array
For Loop: determine state of each cell using helper function
"""


class Solution:
    def gameOfLife(self, board):
        """
        Do not return anything, modify board in-place instead.
        """
        row, col = len(board), len(board[0])
        helperArr = [[0]*col for i in range(row)]
        for i in range(row):
            for j in range(col):
                helperArr[i][j] = self.helper(board,i, j,row,col)
 

        for i in range(row):
            for j in range(col):
                board[i][j] = helperArr[i][j]

    def helper(self, board, i, j,row,col):
        start = board[i][j]
        count = 0
        if i - 1 >= 0 and j - 1 >= 0 and board[i-1][j-1] == 1: count += 1
        if i - 1 >= 0 and j + 1 < col and board[i-1][j+1] == 1: count += 1
        if i + 1 < row and j - 1 >= 0 and board[i+1][j-1] == 1: count += 1
        if i + 1 < row and j + 1 < col and board[i+1][j+1] == 1: count += 1
        if i - 1 >= 0  and board[i-1][j] == 1: count += 1
        if i + 1 < row  and board[i+1][j] == 1: count += 1
        if j - 1 >= 0  and board[i][j-1] == 1: count += 1
        if j + 1 < col  and board[i][j+1] == 1: count += 1
        if(start == 0):
            if(count == 3): return 1
            return 0
        else:
            if(count < 2 or count > 3): return 0
            return 1

test = Solution()
test.gameOfLife([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
])
