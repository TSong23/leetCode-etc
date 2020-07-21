// For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], 
// your output should be                           [1, 1, 4, 2, 1, 1, 0, 0].
                                                                    //1
//data structure: given array
//Technique: always subtract from the next temp if its greater that current

//curr = 76
//next = 73
//count = 0
//result = [1,1,4,2,1,1,]


// related topics: stack and hash map
// [73]  <- 74; 74 > 73, so we delete 73, while in hash map {73 : 1 }
// when 74 is added, keep count and everytime the new temp break through stack, 
// count++

// [75] -> [75, 71] [75,71,69,72]
// [75,71,69,72] count = 0
// [75,71,72] count = 1
// [75,72] count = 2
// [75,72,76] count = 0 76 breaks 72, gives it 1. and then adds to its count, what 72's count was
// [75,76] 76 hash count of 3, breaks 75, gets count of 4. 

// [76, 73] at the end. nothing left to push to stack
// then assign 0 to whatever is left in the stack

// when we reach the end. whatever is left in the stack, gets assigned 0 in hash
// Object.values(hash) -> returns array
  
var dailyTemperatures = function (T) {
  let myStack = [];

  for(let i = 0; i<T.length; i++){

  };
   
};