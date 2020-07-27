// You are given two arrays of integers a and b of the same length, and an integer k.We will be iterating through array a from left to right, and simultaneously through array b from right to left, and looking at pairs(x, y), where x is from a and y is from b.Such a pair is called tiny if the concatenation xy is strictly less than k.

// Your task is to return the number of tiny pairs that you'll encounter during the simultaneous iteration through a and b.

// For a = [16, 1, 4, 2, 14], b = [7, 11, 2, 0, 15], and k = 743, the output should be
// countTinyPairs(a, b, k) = 4.

// We're considering the following pairs during iteration:

//   (16, 15).Their concatenation equals 1615, which is greater than 743, so the pair is not tiny;
// (1, 0).Their concatenation equals 10, which is less than 743, so the pair is tiny;
// (4, 2).Their concatenation equals 42, which is less than 743, so the pair is tiny.
// (2, 11).Their concatenation equals 211, which is less than 743, so the pair is tiny;
// (14, 7).Their concatenation equals 147, which is less than 743, so the pair is tiny.
// There are 4 tiny pairs during the iteration, so the answer is 4.

function countTinyPairs(a, b, k) {
  let count = 0;
  let concated;
  let len = a.length;
  for (let i = 0; i < len; i++) {
    concated = a[i].toString().concat(b[len - i - 1].toString());
    concated = parseInt(concated, 10);
    if (concated < k) count++;
  };
  return count;
};

console.log(countTinyPairs([16, 1, 4, 2, 14], [7, 11, 2, 0, 15], 743));