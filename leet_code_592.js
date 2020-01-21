// Input: "-1/2+1/2"
// Output: "0/1"

// Input: "-1/2+1/2+1/3"
// Output: "1/3"

// Input: "5/3+1/3"
// Output: "2/1"

// solve by implementing a stack

// seperate out each expression
// helper function of adding
// helper function of fraction reducing


var fractionAddition = function (expression) {

  if (!expression) return '0/1';

  // split each expression 
  let splitArr = splitExp(expression);

  // initialize a running total
  let fracStack = splitArr[0]; 

  // in a for loop, iterate through and use add function
  for (let i = 1; i < splitArr.length; i++){
    fracStack = addFrac(fracStack, splitArr[i]);
  }

  return reduceFrac(fracStack);
  
};

function splitExp(expression) {  
  // expression contains no spaces
  // so pattern is always sign number / number
  // except first one. if first entry is not '-', add '+'
  if (expression[0] !== '-') expression = '+' + expression;

  let reArr = [];
  let subExp;
  for(let i = 0; i<expression.length; i = i + 4){
    subExp = expression.substring(i, i+4);
    reArr.push(subExp);
  }
  return reArr;
}

function addFrac(exp1, exp2){
  // in order to add functions, compare signs and denominators
  let reExp; 
  if ( exp1[3] !== exp2[3]){
    // use sameDenom then add value
    let reArr = sameDenom(exp1, exp2);   
    exp1 = reArr[0];
    exp2 = reArr[1];
    reExp = addValue(exp1, exp2);     
  } else {
    // add the two exp
    reExp = addValue(exp1, exp2);
  }
  return reExp; 
}

function sameDenom(exp1, exp2){
  // returns two expressions cross multiplied in array
  let denom1 = exp1[3];
  let denom2 = exp2[3];
  let lcm = (denom1 * denom2).toString();
  let nume1 = exp1[1] * denom2;
  let nume2 = exp2[1] * denom1;
  exp1 = exp1[0] + nume1 + '/' + lcm;
  exp2 = exp2[0] + nume2 + '/' + lcm;

  return [exp1, exp2];
}

function addValue(exp1, exp2){
  let sign1 = exp1[0];
  let sign2 = exp2[0];
  let nume1 = exp1.split(/[-+/]+/)[1];
  let nume2 = exp2.split(/[-+/]+/)[1];
  let reExp;

  if (sign1 !== sign2) {
    // compare numerators
    if (nume1 <= nume2) {
      let newNum = nume1 - nume2;
      reExp = sign1 + newNum + '/' + exp1[exp1.length - 1];
    } else {
      let newNum = nume2 - nume1;
      reExp = sign2 + newNum + '/' + exp1[exp1.length - 1];
    }
  } else {
    let newNum = (exp1[1] + exp[2]).toString();
    reExp = sign1 + newNum + '/' + exp1[exp1.length - 1];
  }
  return reExp;
}

function reduceFrac(exp){
  
}

fractionAddition("-5/3+1/2");