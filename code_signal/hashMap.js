/*
insert x y - insert an object with key x and value y.
get x - return the value of an object with key x.
addToKey x - add x to all keys in map.
addToValue y - add y to all values in map.

Your task is to implement this hashmap, apply the given queries, and to find the sum of all the results for get operations.

For queryType = ["insert", "insert", "addToValue", "addToKey", "get"] and query = [[1, 2], [2, 3], [2], [1], [3]], the output should be hashMap(queryType, query) = 5.

The hashmap looks like this after each query:

1 query: { 1: 2 }
2 query: { 1: 2, 2: 3 }
3 query: { 1: 4, 2: 5 }
4 query: { 2: 4, 3: 5 }
5 query: answer is 5
The result of the last get query for 3 is 5 in the resulting hashmap.
*/

// insert and addToValue is straight forward
// addToKey => shifts all keys by that amount

function hashMap(queryType, query) {
  let myHash = {};
  let mySum = 0;
  let newKey;
  for(let i =0; i < queryType.length; i++){
    if(queryType[i] === 'insert'){
      myHash[query[i][0]] = query[i][1];
    } else if (queryType[i] === 'addToValue'){
      Object.keys(myHash).forEach(key => myHash[key] += query[i][0]);
    } else if (queryType[i] === 'addToKey'){
      let myNewHash = {};
      Object.keys(myHash).forEach(key => {
        newKey = parseInt(key) + query[i][0];
        myNewHash[newKey] = myHash[key];
        
      });
      myHash = myNewHash;
    }else{
      mySum += myHash[query[i]];
    };
  };
  return mySum;
}

console.log(hashMap(["insert", "insert", "addToValue", "addToKey", "get"], [[1, 2], [2, 3], [2], [1], [3]]))