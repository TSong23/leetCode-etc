/*
solution: first, the amount of combinations = each digits' char length multiplied to each other

2 : a,b,c and 3: d,e,f
combinations = [ad,ae,af,bd,be,bf,cd,ce,cf]

3. so first digits' letters are repeated how ever many rest of digits are
4. backtracking would work, so can iterative process

backtracking: recursive call within a for loop
base case: return when no numbers left
*/

var letterCombinations = function (digits) {
    const letters = {
        '2': ['a','b','c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'j'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };
    let ansArr = [];

    
};
        