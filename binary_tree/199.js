

// use BFS and add the last node of each level


var rightSideView = function (root) {
  if (!root) return [];

  let myQueue = [[root]];
  let sideView = [];
  let newArr = [];
  while(myQueue.length){
    let popArr = myQueue.shift();
    sideView.push(popArr[popArr.length-1]);
    popArr.forEach(el => {
      if(el){
        newArr.push(el.left);
        newArr.push(el.right);
      };
    });
    myQueue.push(newArr);
    newArr = [];
  };
  return sideView;
};
