// nums1 = [1, 2]
// nums2 = [3, 4]

// The median is(2 + 3) / 2 = 2.5

// solve in O(log(m+n))

// I can think of O(m+n)

var findMedianSortedArrays = function (nums1, nums2) {

  let len1 = nums1.length;
  let len2 = nums2.length;
  let totalLen = len1 + len2;
  let med1;
  let med2;
  let med;
  if ( (len1 % 2)){
    med1 = nums1[Math.floor(len1/2)];
  } else {
    med1 = (nums1[Math.floor(len1 / 2)] + nums1[Math.floor( (len1 / 2)) - 1] )/2;
  }
  
  if ((len2 % 2)) {
    med2 = nums2[Math.floor(len2 / 2)];
  } else {
    med2 = (nums2[Math.floor(len2 / 2)] + nums2[Math.floor((len2 / 2)) - 1]) / 2;
  }

  if (!med1){
    return med2;
  }else if (!med2){
    return med1;
  }else{
    med = Math.round(med1 * (len1/totalLen) + med2 * (len2/totalLen));
  }

  return med; 

};