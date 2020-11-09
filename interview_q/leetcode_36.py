"""
use hash maps
row, col, sub square

rowHash = { 0 : [1,3,5,7,9], 1: [] ...}
colHash = { 0 : [1,3,5,7,9], 1: [] ...}
subHash = { 0 : [1,3,5,7,9], 1: [] ...}

if board[i][j] == 1 and it conflicts with any of the above, then return false

"""

class Solution:
    def isValidSudoku(self, board):
        self.board = board
        self.rowHash = dict({0: [], 1: [], 2: [], 3: [],
                             4: [], 5: [], 6: [], 7: [], 8: []})
        self.colHash = dict({0: [], 1: [], 2: [], 3: [],
                             4: [], 5: [], 6: [], 7: [], 8: []})
        self.subHash = dict({0: [], 1: [], 2: [], 3: [],
                             4: [], 5: [], 6: [], 7: [], 8: []})
        return self.fillHash()

    def fillHash(self):
        for i in range(0,9):
            for j in range(0,9):
                curNum = self.board[i][j]
                if curNum == '.':
                    continue
                else: 
                    if not self.checkHashes(i,j, curNum):
                        return False
        return True
    
    def checkHashes(self, i, j, curNum):
        subArr = (j // 3) + (i//3)*3
        return True
            



test = Solution()
test.isValidSudoku(
    [["5", "3", ".", ".", "7", ".", ".", ".", "."],
     ["6", ".", ".", "1", "9", "5", ".", ".", "."], 
     [".", "9", "8", ".", ".", ".", ".", "6", "."], 
     ["8", ".", ".", ".", "6", ".", ".", ".", "3"], [
                   "4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]])
