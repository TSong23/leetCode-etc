// Input: votes = ["ABC", "ACB", "ABC", "ACB", "ACB"]
// Output: "ACB"
// Explanation: Team A was ranked first place by 5 voters.
// No other team was voted as first place so team A is the first team.
// Team B was ranked second by 2 voters and was ranked third by 3 voters.
// Team C was ranked second by 3 voters and was ranked third by 2 voters.
// As most of the voters ranked C second, team C is the second team and 
// team B is the third.


// data struc: nested hash map
// each team will be a key and values will be nested keys
// {'A' : { 1: 5 }, 'B' : {1 : 0, 2: 2, 3:3 }, 'C' : {1:0, 2:3, 3:2}}

// second method: keep scores for each team: 1st place = plus 1
// sort from least score to most



var rankTeams = function (votes) {
  if (votes.length === 1) return votes[0];

  let scoreHash = {};

  function keepScore(str) {
    if (!str.length) return;
    let strMat = str.split('');
    let i = 0;
    strMat.forEach(char => {
      if (scoreHash[char]){
        scoreHash[char]+=i;
      } else{
        scoreHash[char] = 0 + i;
      };
      i++;
      console.log('scoreHash: ',scoreHash);
    });
  };

  votes.forEach(str => keepScore(str));
  return;

};

rankTeams(["ABC", "ACB", "ABC", "ACB", "ACB"]);

