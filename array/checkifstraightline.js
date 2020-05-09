if (coordinates.length === 2) return true;

const firPt = coordinates.shift();
const secPt = coordinates.shift();

const myVec = [secPt[0] - firPt[0], secPt[1] - firPt[1]];

while (coordinates.length) {
  let curPt = coordinates.shift();
  let curVec = [curPt[0] - firPt[0], curPt[1] - firPt[1]];

  let crossPr = myVec[0] * curVec[1] - myVec[1] * curVec[0];
  if (crossPr) return false;

};
return true;