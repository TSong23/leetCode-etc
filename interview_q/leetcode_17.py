"""
solution: first, the amount of combinations = each digits' char length multiplied to each other

2 : a,b,c and 3: d,e,f
combinations = [ad,ae,af,bd,be,bf,cd,ce,cf]

3. so first digits' letters are repeated how ever many rest of digits are
4. backtracking would work, so can iterative process


"""


class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
