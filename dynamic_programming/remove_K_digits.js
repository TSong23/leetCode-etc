
/*
  Input: num = "1432219", k = 3
  Output: "1219"
  Explanation: Remove the three digits 4, 3, and 2 to form the new number
  1219 which is the smallest.

  Input: num = "10200", k = 1
  Output: "200"
  Explanation: Remove the leading 1 and the number is 200. Note that the output
  must not contain leading zeroes.

  Input: num = "10", k = 2
  Output: "0"
  Explanation: Remove all the digits from the number 
  and it is left with nothing which is 0.

*/

/*
  1. minimize first number while assuring there is enough digits that follow
    - start at k from the end
    - then find the smallest number
  2. if the smallest number is 0 and there are k digits in front of the zero, 
     just delete the first k+1 digits and return
  3. if digits = k, return 0
  4. if arrLen - startIdx < k, delete the greatest number from startIdx to end

*/

var removeKdigits = function (num, k) {
  if (!k) return num;
  if (num.length === k) return 0;

  const numArr = num.split('');
  const arrLen = numArr.length - 1;
  const startIdx = arrLen - k;




};