// Input: "()[]{}"
// Output: true

// use stack

var isValid = function (s) {
  if (!s.length) return true; 

  let charArr = s.split('');
  if (charArr[0] === ')' || charArr[0] === '}' || charArr[0] === ']') return false;

  let myStack = [];
  for( let i = 0; i < charArr.length; i++){
    let stackTop;
    if (charArr[i] === '(' || charArr[i] === '{' || charArr[i] === '['){
      myStack.push(charArr[i]);
    } else if (charArr[i] === ')') {
      stackTop = myStack.pop();
      if (stackTop !== '(') return false; 
    } else if (charArr[i] === ']') {
      stackTop = myStack.pop();
      if (stackTop !== '[') return false;
    } else if (charArr[i] === '}') {
      stackTop = myStack.pop();
      if (stackTop !== '{') return false;
    }
  }

  return myStack.length ? false : true; 

};

isValid("()[]{}");