"""
use stack
the stack length allows us to figure out how many days have passed

"""

class Solution(object):
    def dailyTemperatures(self, T):
        myStack = []
        ansArr = [0] * len(T)
        idxStack = []

        def helper():
            while len(myStack) > 1:
                if myStack[-1] > myStack[-2]:
                    myStack.pop(-2)
                    ansArr[idxStack[-2]] = idxStack[-1] - idxStack[-2]
                    idxStack.pop(-2)
                else:
                    break
            return 

        for i in range(len(T)):
            myStack.append(T[i])
            idxStack.append(i)
            helper()

        return ansArr


test = Solution()
test.dailyTemperatures(([73, 74, 75, 71, 69, 72, 76, 73]))
