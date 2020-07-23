// transaction invalid if value over 1000 or if in different cities within 1 hr
// Input: transactions = ["alice,20,800,mtv", "alice,50,100,beijing"]
// Output: ["alice,20,800,mtv", "alice,50,100,beijing"]
// Explanation: The first transaction is invalid because the second transaction 
// occurs within a difference of 60 minutes, have the same name and is in a different city.
// Similarly the second one is invalid too.

// return an array of strings, where each string is "name,time,dollar,city"

// will use hash array and a queue
// queue to store transactions for each person
// hash: key is name and value is [time, city]
// we will add to invalid if transactions[i][2].toNum > 1000
// if not, add to queue, then check previous in queue
// if previous city !== cur City && timeNow - timePrev < 60

var invalidTransactions = function (transactions) {

};