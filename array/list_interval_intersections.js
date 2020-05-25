/*
Input: A = [[0,2],[5,10],[13,23],[24,25]], 
       B = [[1,5],[8,12],[15,24],[25,26]]
Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
Reminder: The inputs and the desired output are lists of Interval objects, and not arrays or lists.
*/
/*
  count from 0

  AStart, AEnd
  BStart, BEnd
  
  1. start count when the number is within A and B
  2. when condition 1 is false, add last number to count Arr. countArr to output
  3. shift A and B when the count is greater than AEnd or BEnd.
*/

var intervalIntersection = function (A, B) {

  let myOutput = [];
  let myCount; 
  let AStart, AEnd, BStart, BEnd;

  let curA = A.shift();
  let curB = B.shift();

  while(A.length || B.length){
  

  }

};