
var isCousins = function (root, x, y) {

  if (!root) return false;
  let myStack = [[root]];
  let xflag = false;
  let yflag = false;
  let sib = true;

  while (myStack.length) {
    let subArr = [];
    let curArr = myStack.shift();
    for (let i = 0; i < curArr.length; i++) {
      let leftChild = curArr[i].left;
      let rightChild = curArr[i].right;
      if (leftChild) {
        subArr.push(leftChild);
        if ( leftChild.val === x) xflag = true;
        if ( leftChild.val === y) yflag = true;
      }
      if (rightChild) {
        subArr.push(rightChild);
        if (rightChild.val === x) xflag = true;
        if (rightChild.val === y) yflag = true;
      }

      // at this point, we need a way to store that x and y were found from diff
      // parents. so switch sib to false when only one of the values were found
      if(xflag && yflag && sib) return false;
      if (xflag && yflag && !sib) return true; 
      if (xflag && !yflag) sib = false; 
      if (yflag && !xflag) sib = false; 
    
    }

    if (xflag) {
      if (yflag) return true; 
      return false; 
    } else {
      if (yflag) return false;
    }
    if (subArr.length) myStack.push(subArr);

    //reset flags
    xflag = false;
    yflag = false;
    sib = true;
  }  

};

