


var backspaceCompare = function (S, T) {
  
  let str1 = useStack(S);
  let str2 = useStack(T);

  if (str1 === str2) return true;
  return false;
};

function useStack(string){
  let charArr = string.split('');
  let myStack = [];

  charArr.forEach(c => {
    if (c === '#'){
      if (myStack !== []){
        myStack.pop();
      };
    } else{
      myStack.push(c);
    };
  });
  return myStack.join('');
};