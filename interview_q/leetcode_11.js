
// container with most water
// given array of height of walls, find maximum container
// height and distance between the walls must be maximized

// brtue force: O(n log(n)). find all pairs of columns and their area
// since max distance between the columns help, start at both ends
// keep leftMax and rMax. and reduce columns one by one and work towards middle
// as we come towards middle, the only possibility of greater area is when 
// rMax or lMax is changed. 

// instead of moving both pointers at the same time, move the smaller of the two

var maxArea = function (height) {
  let lPt = 0;
  let rPt = height.length - 1;
  let maxA = Math.min(height[lPt], height[rPt]) * (rPt - lPt);
  let localA;

  while (lPt < rPt) {
    if (height[lPt] <= height[rPt]) {
      lPt += 1;
      localA = Math.min(height[lPt], height[rPt]) * (rPt - lPt);
      if (localA > maxA) maxA = localA;
    } else {
      rPt -= 1;
      localA = Math.min(height[lPt], height[rPt]) * (rPt - lPt);
      if (localA > maxA) maxA = localA;
    };
  };
  return maxA;
};


console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));



