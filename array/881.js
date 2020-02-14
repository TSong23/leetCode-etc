// The i - th person has weight people[i], and each boat can carry a maximum weight of limit.

// Each boat carries at most 2 people at the same time, provided the sum of the 
// weight of those people is at most limit.

// Return the minimum number of boats to carry every given person.  
// (It is guaranteed each person can be carried by a boat.)


var numRescueBoats = function (people, limit) {
  people.sort((a,b) => a - b);

  let count = 0;
  while (people.length){
    let last = people.pop();
    if (last + people[0] > limit){
      count++;
    } else{
      count++;
      people.shift();
    }
  }
  return count;
};

numRescueBoats([44, 10, 29, 12, 49, 41, 23, 5, 17, 26], 50);
