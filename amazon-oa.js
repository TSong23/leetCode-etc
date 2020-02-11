const MynumToys = 6;
const MytopToys = 2;
const Mytoys = ["elmo", "elsa", "legos", "drone", "tablet", "warcraft"];
const MynumQuotes = 6;
const Myquotes = [
  "Elmo is the hottest of the season! Elmo will be on every kid's wishlist!",
  "The new Elmo dolls are super high quality",
  "Expect the Elsa dolls to be very popular this year, Elsa!",
  "Elsa and Elmo are the toys I'll be buying for my kids, Elsa is good",
  "For parents of older kids, look into buying them a drone",
  "Warcraft is slowly rising in popularity ahead of the holiday season"
];

function topNtoys(numToys, topToys, toys, numQuotes, quotes){

  // create hash from given toys list
  // first value is number of mentions and next is number of diff quotes
  const toyHash = {};
  for (let i = 0; i < toys.length; i++){
    toyHash[toys[i]] = [0, {}];
  }  

  // loop through quotes
  for (let i = 0; i < numQuotes; ++i) {
    // Split quote in to words, ignoring special chars    
    let quote = quotes[i].toLowerCase().split(/\W/gi);  
    
    for (let j = 0; j < quote.length; j++){
      // iterate through the words and check for toys of interest
      // update toyHash accordingly
      if(!toyHash[quote[j]]){
        continue;
      }
      toyHash[quote[j]][0]++; 
      toyHash[quote[j]][1][i] = true;     
    }   
  }
  const myHeap = maxHeap(toyHash);
  
}

function maxHeap(toyHash){
  // implement binary max heap
  // take the toyHash and iterate through once
  // then return the heap according to topToys and numToys
  // this heap will only require siftup operation if heap length is maintained at topToys

  
}



topNtoys(MynumToys, MytopToys, Mytoys, MynumQuotes, Myquotes);

