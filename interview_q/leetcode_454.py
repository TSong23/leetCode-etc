class Solution:
    def fourSumCount(self, A: List[int], B: List[int], C: List[int], D: List[int]) -> int:
        hold1 = {}  # {0: 2, 1: 1, -1: 1}
        hold2 = {}  # {1: 1, 2: 1, 4: 1, -1: 1}
        arrL = len(A)

        for i in range(arrL):
            for j in range(arrL):
                sum1 = A[i] + B[j]
                sum2 = C[i] + D[j]
                hold1[sum1] = hold1.get(sum1, 0) + 1
                hold2[sum2] = hold2.get(sum2, 0) + 1

        count = 0
        for key in hold1:
            key2 = 0 - key
            if key2 in hold2:
                count += hold1[key] * hold2[key2]

        return count