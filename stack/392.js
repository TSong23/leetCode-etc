var isSubsequence = function (s, t) {
  let sArr = s.split('');
  let tArr = t.split('');

  if(sArr.length === 0) return true;
  for(let i=0; i< tArr.length; i++){
    if(tArr[i] === sArr[0]){
      sArr.shift();
      if(sArr.length === 0){
        return true;
      };
    };
  };

  return false;

};

// i did not complete my goals for today lol