/*
Given a non - empty array of integers, return the k most frequent elements.

  Example 1:

Input: nums = [1, 1, 1, 2, 2, 3], k = 2
Output: [1, 2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
*/

var topKFrequent = function (nums, k) {
  let my_hash = {};
  for( let i = 0; i < nums.length; i++){
    if( my_hash[nums[i]] ){
      my_hash[nums[i]]++;
    }else{
      my_hash[nums[i]] = 1;
    };
  };
  // organize my hash in to max heap
  let sorted = Object.keys(my_hash);
  sorted.sort(function(a,b){
    return my_hash[a] > my_hash[b] ? -1 : 1;
  });
  return sorted.slice(0,k);

};

var myHeap