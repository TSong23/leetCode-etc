

var isPowerofTwo = function(n){
  if(n % 2) return false; 
  if(n < 1) return false;
  for(let i = 0; i<=n/2 ; i++){
    if (Math.pow(2,i) === n){
      return true;
    };
  };
  return false;
};