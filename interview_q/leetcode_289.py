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
        row, col = len(board), len(board[0])
        def helper(rIdx, cIdx):
            start = board[rIdx][cIdx]
            count = 0
            if(board[rIdx - 1][cIdx - 1] and board[rIdx - 1][cIdx - 1] == 1):
                count += 1
            if(board[rIdx - 1][cIdx + 1] and board[rIdx - 1][cIdx - 1] == 1):
                count += 1
            if(board[rIdx + 1][cIdx - 1] and board[rIdx - 1][cIdx - 1] == 1):
                count += 1
            if(board[rIdx + 1][cIdx + 1] and board[rIdx - 1][cIdx - 1] == 1):
                count += 1
            if(board[rIdx - 1][cIdx] and board[rIdx - 1][cIdx - 1] == 1):
                count += 1
            if(board[rIdx + 1][cIdx] and board[rIdx - 1][cIdx - 1] == 1):
                count += 1
            if(board[rIdx][cIdx - 1] and board[rIdx - 1][cIdx - 1] == 1):
                count += 1
            if(board[rIdx][cIdx + 1] and board[rIdx - 1][cIdx - 1] == 1):
                count += 1   
            if(start == 0):
                if(count == 3): return 1
            else:
                if(count < 2 or count > 3): return 0
                else: return 1
    

        helperArr = [ [0]*len(board) for i in range(row)]
        for i in range(row):
            for j in range(col):
                helperArr[i][j] = helper(i,j)

        for i in range(row):
            for j in range(col):
                board[i][j] = helperArr[i][j]

        return

    
