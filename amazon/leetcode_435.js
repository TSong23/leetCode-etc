// Input: [[1, 2], [2, 3], [3, 4], [1, 3]]
// Output: 1
// Explanation: [1, 3] can be removed and the rest of intervals are non - overlapping.

// Input: [[1, 2], [2, 3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non - overlapping.


// [[1, 2], [2, 3], [3, 4], [1, 3]]. removing [1,3] rather than [1,2], [2,3]
// [1, 3] covers more distance, so preferable to remove this one. this is condition for removal
// how to keep track of overlaps

// sorted array: sort by interval end(smaller) and then by interval start(larger)

// [1 2 3 4 5]
//   [2   4]
//       [4  5]
// then go to the next interval that starts with pointer, and save idx value of those interval
// when reach the end, return intervals.length - idx.length


var eraseOverlapIntervals = function (intervals) {
  if (intervals.length <= 1) return 0;

  let mySort = intervals.sort(softFunction);
  function softFunction(a, b) {
    if (a[1] === b[1]) {
      if (a[0] === b[0]) return 0;
      return a[0] < b[0] ? 1 : -1;
    } else {
      return a[1] < b[1] ? -1 : 1;
    };
  };

  let idxArr = [0];
  let myPtr = mySort[0][1];
  let arrLen = mySort.length;

  for (let i = 1; i < arrLen; i++) {
    if (mySort[i][0] >= myPtr) {
      idxArr.push(i);
      myPtr = mySort[i][1];
    };
  };

  return arrLen - idxArr.length; 
};

eraseOverlapIntervals([[1,5],[2,4],[4,5]]);