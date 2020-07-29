/*
a = [[3, 3, 4, 2],
[4, 4],
[4, 0, 3, 3],
[2, 3],
[3, 3, 3]]
the output should be

meanGroups(a) = [[0, 4],
[1],
[2, 3]]
*/

// use hash
function meanGroups(a) {
  let myHash = {};
  for (let i = 0; i < a.length; i++){
    let curArr = a[i];
    let curMean = curArr.reduce((a,b) => a+b, 0) / curArr.length;
    if(myHash[curMean]){
      myHash[curMean].push(i);
    }else{
      myHash[curMean] = [i];
    };
  };
  return Object.values(myHash).sort((a, b) => a[0] < b[0] ? -1 : 1);
}
