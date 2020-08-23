/*
solution: first, the amount of combinations = each digits' char length multiplied to each other

2 : a,b,c and 3: d,e,f
combinations = [ad,ae,af,bd,be,bf,cd,ce,cf]

3. so first digits' letters are repeated how ever many rest of digits are
4. backtracking would work, so can iterative process

backtracking: recursive call within a for loop
base case: return when input digitsLeft = []
inputs: digits left (array), current Letters = 'ad'
output: array containing possible string combinations 

*/

var letterCombinations = function (digits) {
    if (!digits.length) return '';
    const digToLetMap = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'j'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };

    let ansArr = []; 

    function myBacktrak(digitsLeft, curString){
        if(!digitsLeft.length){
            ansArr.push(curString);
            return;
        };
        let curDigit = digitsLeft.shift();
        let lettersToAdd = digToLetMap[curDigit];
        for(let i = 0; i < lettersToAdd.length; i++){
            newStr = curString.concat(lettersToAdd[i]);
            myBacktrak(digitsLeft, newStr);
        };
        return;
    };
    
    return myBacktrak(digits.split(''), '');
}

letterCombinations('23')
        