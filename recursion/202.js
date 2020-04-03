// Input: 19
// Output: true
// Explanation:
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

// use hash
// save each input as key in hash
// if the key is repeated, return false

var isHappy = function (n){
  let myHash = {};
   

  function myRecurse(n){
    if (myHash[n]) return false;
    let numArr = separate(n);
    let myNum = calculateSquare(numArr);
    if (myHash[myNum]){
      return false;
    } else if(myNum === 1){
      return true;
    } else{
      myHash[n] = true;
      return myRecurse(myNum);
    }
  };

  return myRecurse(n);
};

function calculateSquare(numArr){
  let reNum = 0;
  numArr.forEach(num => {
    reNum += num*num;
  });
  return reNum;
}

var separate = function(n){
  let reArr = [];
  let div;
  while (n >= 10){
    div = n % 10;
    n = (n - div) * 0.1;
    reArr.unshift(div);
  };
  reArr.unshift(n);
  return reArr;
};

console.log(isHappy(19));