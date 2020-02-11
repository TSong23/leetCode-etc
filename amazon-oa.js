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

  // loop through quotes
  for (let i = 0; i < numQuotes; ++i) {
    // Split quote in to words, ignoring special chars
    let quote = quotes[i].split(/\W/gi);  
    
    console.log(quote);
  }

}

topNtoys(MynumToys, MytopToys, Mytoys, MynumQuotes, Myquotes);

