// Input:
// [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]

// Output:
// [[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]]

// What can you say about the position of the shortest person ?
// If the position of the shortest person is i, 
// how many people would be in front of the shortest person ?

// Once you fix the position of the shortest person, 
// what can you say about the position of the second shortest person ?

// assume best case scenario and solve

const reconstructQueue = people => {
    // sort by height (descending)
    // if same height, sort by # of people in front (ascending)
    // [ [ 7, 0 ], [ 7, 1 ], [ 6, 1 ], [ 5, 0 ], [ 5, 2 ], [ 4, 4 ] ]
    // result = [ [5,0], [7,0], [5,2], [6,1], [4,4], [7,1] ]
    // iterate through the sorted array
    // insert into result array using '# of people in front' as index

  people.sort(function(a,b){
    if(a[0] === b[0]){
      return (a[1] < b[1]) ? -1 : 1;
    }else{
      return (b[0] < a[0]) ? -1 : 1;
    };
  });

  let result = [];
  for(let i = 0; i < people.length; i++){
    // splice(index, how many you want to remove, element you want to add)
    result.splice(people[i][1], 0, people[i]);
  };
    return result;
}






















// [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]
// [4, 4]; this  has to be fixed at idx 5 
// think of this almost as a pivot, split rest of the array in to the three allowed to be in front
// and rest that has to come behind the shortest

// [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]].sort();
// recursion([ 5, 0 ], [ 5, 2 ], [ 6, 1 ], [ 7, 0 ]) , [4,4], [7,1] 
// [[ 5, 0 ]], recursion([ 5, 2 ], [ 6, 1 ], [ 7, 0 ]) + 4,4, + [7,1]

// var reconstructQueue = function (people) {
  
//   people.sort(); // [ [ 4, 4 ], [ 5, 0 ], [ 5, 2 ], [ 6, 1 ], [ 7, 0 ], [ 7, 1 ] ]
//   let pivot = people.shift(); // [4, 4]
//   let myLeft = [];
//   for(let i = 0; i < pivot[1]; i++){ // i = 0,1,2,3
//     myLeft.push(people[i]); // 
//   };
//   let myRight = myRecursion(people.slice(pivot[1]) );

//   return myRecursion(myLeft).concat([pivot],myRight);
// };

// function myRecursion(inArr) { // [[ 5, 2 ], [ 6, 1 ], [ 7, 0 ]]
//   if (inArr === []) return [[]];
//   if(inArr.length === 1) return inArr;
//   inArr.sort(function(a,b){
//     if(a[1] === b[1]){
//       return (a[0] < b[0]) ? -1 : 1;
//     }else{
//       return (a[1] < b[1]) ? -1 : 1;
//     };
//   });
//   // [5,0][7,0][6,1][5,2]

//   let pivot = inArr.shift(); // [5,0]
//   let myLeft = [];
//   for (let i = 0; i < pivot[1]; i++) { //
//     myLeft.push(people[i]); // 
//   };
//   let myRight = myRecursion( inArr.slice(pivot[1]) ); // inArr.slice(0)

//   return myRecursion(myLeft).concat([pivot], myRight);
// };



console.log(reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]));


