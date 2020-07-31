// You are implementing your own programming language and you've decided to add support for merging strings. A typical merge function would take two strings s1 and s2, and return the lexicographically smallest result that can be obtained by placing the symbols of s2 between the symbols of s1 in such a way that maintains the relative order of the characters in each string.

// For example, if s1 = "super" and s2 = "tower", the result should be merge(s1, s2) = "stouperwer".

// For s1 = "dce" and s2 = "cccbd", the output should be
// mergeStrings(s1, s2) = "dcecccbd".
// All symbols from s1 goes first, because all of them have only 1 occurrence in s1 and c has 3 occurrences in s2.


function mergeStrings(s1, s2) {
  let [arr1, arr2] = [s1.split(''), s2.split('')];
  let [hash1, hash2] = [countChars(arr1), countChars(arr2)];
  let localC;
  let returnStr = [];
  while(arr1.length && arr2.length){
    if (hash1[arr1[0]] > hash2[arr2[0]]){
      returnStr.push(arr2[0]);
      arr2.shift();
    } else if (hash1[arr1[0]] < hash2[arr2[0]]){
      returnStr.push(arr1[0]);
      arr1.shift();
    }else{
      localC = arr1[0].localeCompare(arr2[0]);   
      if(localC <= 0){
        returnStr.push(arr1[0]);
        arr1.shift();
      }else{
        returnStr.push(arr2[0]);
        arr2.shift();
      };
    };
  };
  if(!arr1.length){
    returnStr.push(...arr2);
  }else{
    returnStr.push(...arr1);
  };
  return returnStr.join('');
};

function countChars(myArr){
  let myHash = {};
  for(let i =0; i < myArr.length; i++){
    if(myHash[myArr[i]]){
      myHash[myArr[i]]++;
    }else{
      myHash[myArr[i]] = 1;
    };
  };
  return myHash;
};

console.log(mergeStrings('super','tower'));