class Solution:
    def kthFactor(self, n: int, k: int) -> int:
        fArr = [1]
        for i in range(2, n+1):
            if n % i == 0:
                fArr.append(i)
        if len(fArr) < k:
            return -1
        else:
            return fArr[k-1]
