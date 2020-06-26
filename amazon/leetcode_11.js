
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
  let rMaxPt = rPt;
  let lMaxPt = 0;
  let lMax = height[lPt];
  let rMax = height[rPt];
  let maxA = Math.min(lMax, rMax) * (rPt - lPt);
  let localA;

  while(lPt < rPt){
    lPt += 1;
    if(height[lPt] > lMax){
      // check if area is increased;
      // switch lMax, maxA, 
      localA = Math.min(height[lPt], rMax) * (rMaxPt - lPt);
      if(localA > maxA){
        lMax = height[lPt];
        lMaxPt = lPt;
        maxA = localA;
      };
    };
    rPt -= 1;
    if(height[rPt] > rMax){
      // check if area is increased;
      // switch rMax
      localA = Math.min(height[rPt], lMax) * (rPt - lMaxPt);
      if (localA > maxA) {
        rMax = height[rPt];
        rMaxPt = rPt;
        maxA = localA;
      };
    };
  };
  return maxA;

};


console.log(maxArea([2, 3, 4, 5, 18, 17, 6]))