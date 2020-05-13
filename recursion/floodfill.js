/*
  image = [
           [1,1,1]
           [1,1,0]
           [2,0,1]
          ]

  if we start with the 1 in the center, then change all 1's connected
  to it to 2, we end up with
  
  image = [
           [2,2,2]
           [2,2,0]
           [2,0,1]
          ]

  perform bst
*/


var floodFill = function (image, sr, sc, newColor) {

  const oriC = image[sr][sc];
  const imageLen = image.length-1;
  const imageWid = image[0].length-1;

  let myDFS = function(image,sr,sc){
    if(sr < 0 || sr >  imageLen || sc < 0 || sc > imageWid) return;
    if(image[sr][sc] !== oriC || image[sr][sc] === newColor) return;

    image[sr][sc] = newColor;
    let up = sr + 1;
    let down = sr - 1;
    let left = sc - 1;
    let right = sc + 1;

    myDFS(image,up,sc);
    myDFS(image, down, sc);
    myDFS(image, sr, left);
    myDFS(image, sr, right);
  };

  myDFS(image, sr,sc);
  
  return image;
};

let testImage = [
  [0, 0, 0], [0, 1, 1]
];

console.log(floodFill(testImage, 1,1,1));