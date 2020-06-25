
// container with most water
// given array of height of walls, find maximum container
// height and distance between the walls must be maximized

// brtue force: O(n log(n)). find all pairs of columns and their area
// since max distance between the columns help, start at both ends
// keep leftMax and rMax. and reduce columns one by one and work towards middle
// as we come towards middle, the only possibility of greater area is when 
// rMax or lMax is changed. 


var maxArea = function (height) {

};