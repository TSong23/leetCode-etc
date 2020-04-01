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
  let teamMat = [];

  function keepScore(str){
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
    });
  };

  function myOrganize(team){
    teamMat.push(team);
    let idx = teamMat.length - 1;
    if(idx === 0 ) return;
    bubbleUp(team, idx);
    return;
  };

  function bubbleUp(team, idx){
    if (idx === 0) return;
    let ahead = teamMat[idx - 1];
    if (scoreHash[ahead] > scoreHash[team]){
      [teamMat[idx-1],teamMat[idx]] = [teamMat[idx],teamMat[idx-1]];
      bubbleUp(team, idx-1);
    } else if (scoreHash[ahead] === scoreHash[team]){
      if(ahead > team){
        [teamMat[idx - 1], teamMat[idx]] = [teamMat[idx], teamMat[idx - 1]];
        bubbleUp(team, idx - 1);
      };
    };
    return;
  };

  votes.forEach(str => keepScore(str));
  Object.keys(scoreHash).forEach(team => myOrganize(team));
  console.log('scoreHash: ',scoreHash);
  console.log(teamMat.join(''));
  return teamMat.join('');
};

rankTeams(["FVSHJIEMNGYPTQOURLWCZKAX", "AITFQORCEHPVJMXGKSLNZWUY", 
"OTERVXFZUMHNIYSCQAWGPKJL", "VMSERIJYLZNWCPQTOKFUHAXG", "VNHOZWKQCEFYPSGLAMXJIUTR", 
"ANPHQIJMXCWOSKTYGULFVERZ", "RFYUXJEWCKQOMGATHZVILNSP", "SCPYUMQJTVEXKRNLIOWGHAFZ", 
"VIKTSJCEYQGLOMPZWAHFXURN", "SVJICLXKHQZTFWNPYRGMEUAO", "JRCTHYKIGSXPOZLUQAVNEWFM",
 "NGMSWJITREHFZVQCUKXYAPOL", "WUXJOQKGNSYLHEZAFIPMRCVT", "PKYQIOLXFCRGHZNAMJVUTWES",
  "FERSGNMJVZXWAYLIKCPUQHTO", "HPLRIUQMTSGYJVAXWNOCZEKF", "JUVWPTEGCOFYSKXNRMHQALIZ",
   "MWPIAZCNSLEYRTHFKQXUOVGJ", "EZXLUNFVCMORSIWKTYHJAQPG", "HRQNLTKJFIEGMCSXAZPYOVUW",
    "LOHXVYGWRIJMCPSQENUAKTZF", "XKUTWPRGHOAQFLVYMJSNEIZC", "WTCRQMVKPHOSLGAXZUEFYNJI"]);

