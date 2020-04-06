// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
//   Output:
// [
//   ["ate", "eat", "tea"],
//   ["nat", "tan"],
//   ["bat"]
// ]

// 1. iterate through each string
// 2. make hash of each str
// 3. ate => {'a':1, 't':1, 'e':1}
// 4. make second hash: {'a1e1t1': ['ate', 'eat']}
//    -hash does not auto alphabetize keys
// 5. return reArr.push(Object.values(secondHash));


var groupAnagrams = function (strs) {
  if (!strs.length) return [];

  let wordHash = {};
  let reArr = [];

  strs.forEach(ele => {
    let letterHash = makeLHash(ele);
    let hashKey = makeKey(letterHash);
    if (wordHash[hashKey]){
      wordHash[hashKey].push(ele);
    } else{
      wordHash[hashKey] = [ele];
    };
  });

  Object.values(wordHash).forEach(arr => reArr.push(arr));
  return reArr;
};

function makeKey(myHash){
  let reStr = [];
  let charArr = Object.keys(myHash).sort();
  charArr.forEach(char => {
    reStr.push(char);
    reStr.push(myHash[char]);
  });
  return reStr.join('');
};

function makeLHash(str){
  let reHash = {};
  let letArr = str.split('');
  letArr.forEach(char => {
    if (reHash[char]){
      reHash[char]++;
    } else{
      reHash[char] = 1;
    };
  });
  return reHash;
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);