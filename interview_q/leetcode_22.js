// Given n pairs of parentheses, write a function to generate all combinations of well - formed parentheses.

// For example, given n = 3, a solution set is:

// [
//     "((()))",
//     "(()())",
//     "(())()",
//     "()(())",
//     "()()()"
// ]

// back tracking algo
// we start with open, then create tree with first 2 branches being ( and )
// so return when the count of valid parantheses reach n
// root = (, each branch will be ( or )
// at the end of each branch, add to solution, back track to split
// base case: add closing parantheses, add str to ans, return
// don't add ')' when open === 0

var generateParenthesis = function (n) {
    function myRecur(count, open, str) {
        if (count === n) {
            reArr.push(str);
            return;
        };
        if(open === count ){
            // cannot close close
            myRecur(count, open + 1, str + '(');
        }else if (open === n) {
            myRecur(count + 1, open, str + ')');            
        }else{
            // make two branches
            myRecur(count, open + 1, str + '(');
            myRecur(count + 1, open, str + ')');
        }
        return;
    };   
    
    let reArr = [];
    myRecur(0 ,1 , '(');
    return reArr;
};

console.log(generateParenthesis(3));



