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
        self.rowHash = dict({0: [], 1: [], 2: [], 3: [],
                             4: [], 5: [], 6: [], 7: [], 8: []})
        self.colHash = dict({0: [], 1: [], 2: [], 3: [],
                             4: [], 5: [], 6: [], 7: [], 8: []})
        self.subHash = dict({0: [], 1: [], 2: [], 3: [],
                             4: [], 5: [], 6: [], 7: [], 8: []})
        self.fillHash(board)

    def fillHash(self, board):
        for i in range(0,9):
            self.addKey(i, self.rowHash)
            self.addKey(i, self.colHash)
            self.addKey(i, self.subHash)
            #for j in range(0,9):
                
    
    def addKey(self, i, myHash):
        if not myHash.has_key(str(i)):
            myHash[str(i)] = []


test = Solution()
test.isValidSudoku(
    [["5", "3", ".", ".", "7", ".", ".", ".", "."],
     ["6", ".", ".", "1", "9", "5", ".", ".", "."], 
     [".", "9", "8", ".", ".", ".", ".", "6", "."], 
     ["8", ".", ".", ".", "6", ".", ".", ".", "3"], [
                   "4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]])
