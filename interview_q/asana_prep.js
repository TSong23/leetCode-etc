
/*
You are given a positive number n.You are to find all the numbers 0..n inclusive that have the
digits[0, 2, 4] in them. for example n = 14 output would be 6. 0 and 10 have the digit 0, 2 and 4 have the digits 2 and 4 in them
[0,2,4,10,12,14]
*/

// have to go through each number and %10 to isolate each digit
// 267
function count024(n){

  let mycount = 1;
  let curNum, digit;
  for( let i = 1; i < n+1; i++){
    curNum = i;
    while(curNum > 0){
      digit = curNum % 10; 
      if (digit === 0 || digit === 2 || digit === 4){
        mycount++;
        break;
      };
      curNum = (curNum - digit) / 10;
    };
  };
  return mycount;
};



/*
You are given an array of integers arr.Your task is to construct an array of integers of length arr.length - 2, where the ith element is equal to 1 if arr[i], arr[i + 1], and arr[i + 2] are monotonic, otherwise 0.

Return the resulting array of integers.
  Note: a, b, and c are considered monotonic, if the values are strictly increasing(a < b < c) or strictly decreasing(a > b > c).
    Example
For arr = [1, 2, 1, -4, 5, 10], the output should be checkMonotonicity(arr) = [0, 1, 0, 1].
 
For arr = [10, 10, 10, 10, 10], the output should be checkMonotonicity(arr) = [0, 0, 0].

*/
function checkMonotonicity(a){
  let resultArr = [];
  for(let i = 0; i < a.length-2; i++){
    if ( (a[i] < a[i + 1] && a[i + 1] < a[i + 2]) || (a[i] > a[i + 1] && a[i + 1] > a[i + 2]) ){
      resultArr.push(1);
    }else{
      resultArr.push(0);
    };    
  };
  return resultArr;
};

/*
Given two strings s and t, both consisting of lowercase English letters and digits, your task is to calculate how many ways exactly one digit could be removed from one of the strings so that s is lexicographically smaller than t after the removal. Note that we are removing only a single instance of a single digit, rather than all instances (eg: removing 1 from the string a11b1c could result in a1b1c or a11bc, but not abc).
Also note that digits are considered lexicographically smaller than letters.
Example
For s = "ab12c" and t = "1zz456", the output should be removeOneDigit(s, t) = 1.
Here are all the possible removals:
We can remove the first digit from s, obtaining "ab2c". "ab2c" > "1zz456", so we don't count this removal
We can remove the second digit from s, obtaining "ab1c". "ab1c" > "1zz456", so we don't count this removal
We can remove the first digit from t, obtaining "zz456". "ab12c" < "zz456", so we count this removal
We can remove the second digit from t, obtaining "1zz56". "ab12c" > "1zz56", so we don't count this removal
We can remove the third digit from t, obtaining "1zz46". "ab12c" > "1zz46", so we don't count this removal
We can remove the fourth digit from t, obtaining "1zz45". "ab12c" > "1zz45", so we don't count this removal
The only valid case where s < t after removing a digit is "ab12c" < "zz456". Therefore, the answer is 1.
For s = "ab12c" and t = "ab24z", the output should be removeOneDigit(s, t) = 3.
There are 4 possible ways of removing the digit:
"ab1c" < "ab24z"
"ab2c" > "ab24z"
"ab12c" < "ab4z"
"ab12c" < "ab2z"
Three of these cases match the requirement that s < t, so the answer is 3.
*/

//key here is that even though strings consist of letters and digits, only consider removing digits

function removeDigits(s,t){
  let mycount = 0;
  let [sArr, tArr] = [s.split(''), t.split('')];
  let mySet = new Set(['1','2','3','4','5','6','7','8','9','0']);  
  let holdStr, holdArr;
  
  for (let i = 0; i < sArr.length; i++){
    if(mySet.has(sArr[i])){
      holdArr = sArr;
      holdArr.splice(i,1);
      holdStr = holdArr.join('');
      if( holdStr.localeCompare(t) < 0) mycount++;
    };
  };

  for (let i = 0; i < tArr.length; i++) {
    if (mySet.has(tArr[i])) {
      holdStr = tArr.slice(0, i).concat(tArr.slice(i + 1)).join('');
      if (holdStr.localeCompare(s) > 0) mycount++;
    };
  };

  return mycount;  
};



/*
Given a square matrix of integers a and an array of queries q, your task is to return the given matrix after processing all the queries on it. There are three types of queries:
If q[i] = 0, rotate the matrix 90 degrees clockwise.
If q[i] = 1, reflect the matrix in its main diagonal.
If q[i] = 2, reflect the matrix in its secondary diagonal.
Example
For
[
  [3,6,9],
  [2,5,8],
  [1,4,7]
]
90 rotation is flip along secondary diagonal and reverse array row wise
main diag => [i,j] => [j,i]
second diag => [i,j] => [row - j, col - i] row = 2, col = 2
a = [ [1, 2, 3],
      [4, 5, 6],  6 // 1,2 => 0,1
      [7, 8, 9]]  8    0,1 => 1,2
and
q = [0, 1, 2]
the output should be
[
  [3,6,9],
  [2,5,8],
  [1,4,7]
]

mutateMatrix(a, q) = [[3, 6, 9],
[2, 5, 8],
[1, 4, 7]]
example 1
For
a = [[5, 5],
[1, 2]]
and
q = [2, 0, 2, 0, 1]
the output should be
mutateMatrix(a, q) = [[5, 1],
[5, 2]]
example 2
For
a = [[11, 2, 9, 1],
[17, 4, 0, 32],
[1, 7, 10, 6],
[80, 3, 5, 14]]
and
q = [0, 1, 2, 0]
the output should be
mutateMatrix(a, q) = 
[
  [11, 2, 9, 1],
  [17, 4, 0, 32],
  [1, 7, 10, 6],
  [80, 3, 5, 14]
]
*/

// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

// for 90 deg rotation: 
// 90 rotation is flip along main diagonal and reverse array row wise
// main diag => [i, j] => [j, i]
// second diag => [i, j] => [row - j, col - i] row = 2, col = 2
function mutateArr(arr,query){
  let [row, col] = [arr.length, arr[0].length];
  
  function mainDiag(arr){
    for(let i = 0; i < row -1; i++){
      for( let j=i+1; j<col; j++){
        [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]];
      };
    };
    return arr;
  };

  function secDiag(arr){
    for (let i = 0; i < (row - 1); i++) {
      for (let j = 0; j < ((row - 1) - i); j++) {
        [arr[i][j], arr[row - 1 - j][row - 1 - i]] = [arr[row - 1 - j][row - 1 - i], arr[i][j]]
      };
    };
    return arr;
  };

  function rotate(arr){
    let hold = mainDiag(arr);
    for(let i = 0; i < row; i++){
      hold[i].reverse();
    };
    return hold;
  };

  for(let i = 0; i < query.length; i++){
    if(query[i] === 0 ){
      arr = rotate(arr);
    }else if(query[i] === 1){
      arr = mainDiag(arr);
    }else{
      arr = secDiag(arr);
    };
  };
  return arr;
};


/*
5. You are given operations, an array containing the following two types of operations:
[0, a, b] - Create and save a rectangle of size a × b;
[1, a, b] - Answer the question: "Could every one of the saved rectangles fit in a box of size a × b". It is possible to rotate rectangles by 90 degrees; ie: a rectangle of dimensions a × b can be rotated so that its dimensions are b × a. Note: We're trying to fit each rectangle within the box separately (not all at the same time).
Your task is to return an array of booleans, representing the answers to the second type of operation, in the order they appear.

Example
For operations = [[1, 1, 1]], the output should be rectangleBoxes(operations) = [true].
There are no rectangles, so they all can be fit in any box.
For operations = [[0, 1, 3], [0, 4, 2], [1, 3, 4], [1, 3, 2]], the output should be
rectangleBoxes(operations) = [true, false].

example
A 1 × 3 rectangle is added;
A 4 × 2 rectangle is added;
We need to check if it's possible to store each of the rectangles from operations 1 and 2 into a 3 × 4 area.
The rectangle from the 1st operation can be stored as-is.
The rectangle from the 2nd operation can be rotated to become 2 × 4 and after that it will fit.
Both rectangles will fit, so add a true to the result.
We need to check if it's possible to store each of the rectangles from operations 1 and 2 into a 3 × 2 area.
The rectangle from the 1st operation can be rotated to become 3 × 1 and after that it will fit.
The rectangle from the 2nd operation will not fit, even if it's rotated.
Not all of the rectangles could be stored, so add a false to the result.
So the final answer is [true, false].
*/

// rectangle store, box store: loop through operations as seperate rect and box
// loop thorugh box and see if all rect fits inside


function rectangleBoxes(operations){
  let rects = [];
  let boxes = [];
  let ansArr = [];
  for(let i = 0; i < operations.length; i++){
    if(operations[i][0] === 0){
      rects.push(operations[i]);
    }else{
      boxes.push(operations[i]);
    };
  };
  if(!rects.length){
    for(let i=0; i<boxes.length;i++){
      ansArr.push(true);
    };
    return ansArr;
  };

  for (let i = 0; i < boxes.length; i++) {
    let hold = true;

    for (let j = 0; j < rects.length; j++) {
      if (checkFit(rects[j], boxes[i]) === false) {
        hold = false;
        break;
      };
    };
    ansArr.push(hold);
  };

  return ansArr;
};

function checkFit(rectangle, box) {
  if (rectangle[1] > box[1] && rectangle[1] > box[2]) return false;
  if (rectangle[2] > box[1] && rectangle[2] > box[2]) return false;
  return true;
};


console.log(rectangleBoxes([1,1,1])) // [true]
// console.log(rectangleBoxes([[0, 1, 3], [0, 4, 2], [1, 3, 4], [1, 3, 2]])) // [true, false]

// rects[]
// boxes[1, 1, 1]
// [true, true, true]

