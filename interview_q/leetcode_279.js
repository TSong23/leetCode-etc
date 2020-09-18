/* Given a positive integer n, find the least number of perfect square numbers(for example, 1, 4, 9, 16, ...) which sum to n.

"""
least number of perfect squares: suggests back tracking

data: something to keep track of the path

1. find all possible perfect squares
2. subtract each one from input: 
3. recursively call the function
    - base case: input == 0
    - return 1 + self(input): keeps track of how many perfect squares were used
    - if n is 3 or below: we have to use 1,1,1 so just return three
4. the first call of the function: use Math.min()  

*/ 

var numSquares = function (n) {
    let possibleSq = [];
    let count = 1;
    while(count * count <= n){
        possibleSq.push(count*count)
        count++;
    };
    let myMemo = {};
    possibleSq.forEach(sq => {myMemo[sq] = 1});

    function helper(num){
        if(myMemo[num]) return myMemo[num];
        let res = Infinity;
        for(let i = 0; i < possibleSq.length; i++){
            if(possibleSq[i] > num ) break;
            let hold = helper(num - possibleSq[i]);
            if( hold < res) res = hold;
        };
        myMemo[num] = res + 1;
        return res + 1;
    };
    return helper(n);
};

numSquares(12)




