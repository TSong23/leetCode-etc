"""
Backtracking and lists used to solve

fill in a sq with a possible solution at the time.
move on to the next sq and on until a conflict is reached
go back to the first guess made and try the next potential solution
repeat until the board is filled

methods needed:

1. for every sq, come up with all possible numbers
2. a loop that is recursively called to try a possible number
    this loop should return false up the recursion stack or make
    another recursive call
3. check if the board is filled

questions:
1. how to keep track of guesses that were made; 

"""


class Solution:
    def solveSudoku(self, board):
        self.board = board
        self.rowList = [[] for i in range(9)]
        self.colList = [[] for i in range(9)]
        self.subList = [[] for i in range(9)]
        self.solveSudoku()

    def solveSudoku(self):
        return True 
    
    def checkMissing(self,i,j):
        presentNums = []
        for num in self.rowList[i]:
            presentNums.append(num)
        for num in self.colList[j]:
            presentNums.append(num)
        for num in self.subList[j//3 + (i//3)*3]:
            presentNums.append(num)
        presentNums.sort()
        
