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
// 5. return reArr.push(Object.values(secondHash));


var groupAnagrams = function (strs) {
  if (!strs.length) return [];

  let wordHash = {};
  let reArr = [];

  strs.forEach(ele => {
    let letterHash = makeLHash(ele);
    
  });
};

function makeLHash(str){
  let reHash = {};
  let letArr = str.split('');
  letArr.forEach(char => {
    if (reHash[char]){
      reHash[char]++;
    } else{
      reHash[char] = 0;
    };
  });
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);