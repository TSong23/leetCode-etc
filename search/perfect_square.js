
var isPerfectSquare = function (num) {
  if (num === 1 || num === 0) return true;

  let lowerL = 1;


  while (num > lowerL * lowerL) {
    lowerL *= 10;
  };

  lowerL = lowerL / 10;

  for (let i = lowerL; i < lowerL*10+1; i++){
    if(i * i === num)return true;
  };
  return false;
};


console.log(isPerfectSquare(144));
