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
// what if the queues aren't sorted in time order?
// then we have to compare all transactions under that name to each other

var invalidTransactions = function(transactions) {
  let invTrans = [];
  let accHash = {};

  for (let trans of transactions){
    let [name, time, amt, city] = trans.split(',');
    if(!accHash[name]){
      accHash[name] = [trans];
    }else{
      accHash[name].push(trans);
    };    
  };

  const checkInvalid = function(key){
    let tArr = accHash[key];
    let tran1, tran2;
    let check = new Set();
    for(let i = 0; i < tArr.length; i++){
      tran1 = tArr[i].split(',');
      if (check.has(i)) continue;
      if (tran1[2] >= 1000) invTrans.push(tran1.join(','));
      for(let j = 0; j < tArr.length; j++){
        tran2 = tArr[j].split(',');
        if( (tran1[3] !== tran2[3]) && ( (Math.abs(tran1[1] - tran2[1])) <= 60) ){
          if (!check.has(i)) invTrans.push(tran1.join(','));   
          if (!check.has(j)) invTrans.push(tran2.join(','));  
        };           
      };
    };
  };

  Object.keys(accHash).forEach(key => {
    checkInvalid(key);
  });

  return invTrans;
};

console.log(invalidTransactions(["bob,899,1971,budapest", "maybe,850,824,budapest", "alex,505,187,tokyo", "lee,953,1572,toronto", "alex,622,61,frankfurt", "lee,191,1261,madrid", "iris,740,925,luxembourg", "iris,681,401,moscow", "chalicefy,298,731,madrid", "maybe,549,988,moscow", "alex,28,1683,singapore", "chalicefy,894,550,rome", "xnova,892,990,rome", "lee,353,1522,shanghai", "xnova,804,549,taipei", "maybe,716,1727,shenzhen", "chalicefy,770,1156,taipei", "alex,957,466,munich", "bob,381,1136,tokyo", "alex,496,1662,luxembourg", "xnova,849,354,munich", "bob,486,1751,barcelona", "xnova,350,14,moscow", "iris,858,583,chicago", "maybe,511,1002,toronto", "maybe,838,585,amsterdam", "bob,536,217,toronto", "iris,24,1596,hongkong", "chalicefy,894,1074,beijing", "maybe,502,530,barcelona", "lee,95,1916,madrid", "maybe,313,1394,madrid", "chalicefy,160,1591,hongkong", "xnova,280,1023,tokyo", "chalicefy,224,920,singapore", "bob,725,501,prague", "alex,481,35,frankfurt", "xnova,336,423,guangzhou", "xnova,535,382,istanbul", "lee,806,1597,chicago", "lee,124,1012,tokyo", "iris,627,665,shenzhen", "alex,160,651,amsterdam", "bob,674,193,dubai", "alex,290,770,tokyo", "maybe,406,659,shenzhen", "lee,493,1002,warsaw", "alex,929,591,taipei", "bob,456,6,luxembourg", "iris,985,1959,newdelhi", "xnova,816,1147,singapore", "bob,110,73,frankfurt", "chalicefy,80,85,warsaw", "xnova,266,162,munich", "xnova,295,1944,newdelhi", "chalicefy,47,141,madrid", "xnova,78,205,shanghai", "bob,487,260,bangkok", "bob,880,628,hongkong", "maybe,162,406,mexico", "xnova,390,1187,hongkong", "chalicefy,810,289,zurich", "alex,534,96,jakarta", "chalicefy,768,1412,moscow", "chalicefy,594,840,milan", "xnova,844,1048,luxembourg", "xnova,15,274,tokyo", "alex,756,1473,hongkong", "alex,54,1760,singapore", "xnova,353,1644,zurich", "lee,353,475,zurich", "lee,973,1591,munich", "bob,262,120,hongkong", "alex,759,31,barcelona", "bob,257,803,mexico", "alex,353,1074,prague", "lee,854,604,chicago", "lee,354,140,warsaw", "lee,827,521,prague", "chalicefy,73,439,zurich", "bob,365,899,shanghai", "chalicefy,490,1473,beijing", "lee,115,531,rome", "maybe,358,774,istanbul", "xnova,95,824,frankfurt", "lee,532,712,hongkong", "lee,766,616,newdelhi", "lee,231,1150,zurich", "maybe,237,71,bangkok", "bob,255,747,taipei", "lee,520,1825,montreal", "bob,744,401,guangzhou", "alex,284,877,toronto", "maybe,129,1999,frankfurt", "xnova,293,294,jakarta", "chalicefy,283,901,beijing", "lee,884,881,luxembourg", "alex,168,1279,shenzhen", "alex,348,1434,rome", "iris,958,537,paris"]));

["bob,899,1971,budapest", "maybe,850,824,budapest", "alex,505,187,tokyo", "lee,953,1572,toronto", "lee,191,1261,madrid", "iris,740,925,luxembourg", "iris,681,401,moscow", "chalicefy,298,731,madrid", "maybe,549,988,moscow", "alex,28,1683,singapore", "chalicefy,894,550,rome", "xnova,892,990,rome", "lee,353,1522,shanghai", "xnova,804,549,taipei", "maybe,716,1727,shenzhen", "chalicefy,770,1156,taipei", "alex,957,466,munich", "bob,381,1136,tokyo", "alex,496,1662,luxembourg", "xnova,849,354,munich", "bob,486,1751,barcelona", "xnova,350,14,moscow", "maybe,511,1002,toronto", "maybe,838,585,amsterdam", "bob,536,217,toronto", "iris,24,1596,hongkong", "chalicefy,894,1074,beijing", "maybe,502,530,barcelona", "lee,95,1916,madrid", "maybe,313,1394,madrid", "chalicefy,160,1591,hongkong", "xnova,280,1023,tokyo", "chalicefy,224,920,singapore", "bob,725,501,prague", "alex,481,35,frankfurt", "xnova,336,423,guangzhou", "lee,806,1597,chicago", "lee,124,1012,tokyo", "iris,627,665,shenzhen", "alex,160,651,amsterdam", "bob,674,193,dubai", "alex,290,770,tokyo", "maybe,406,659,shenzhen", "lee,493,1002,warsaw", "alex,929,591,taipei", "bob,456,6,luxembourg", "iris,985,1959,newdelhi", "xnova,816,1147,singapore", "chalicefy,80,85,warsaw", "xnova,266,162,munich", "xnova,295,1944,newdelhi", "chalicefy,47,141,madrid", "xnova,78,205,shanghai", "bob,487,260,bangkok", "bob,880,628,hongkong", "maybe,162,406,mexico", "xnova,390,1187,hongkong", "chalicefy,810,289,zurich", "alex,534,96,jakarta", "chalicefy,768,1412,moscow", "xnova,844,1048,luxembourg", "alex,756,1473,hongkong", "alex,54,1760,singapore", "xnova,353,1644,zurich", "lee,353,475,zurich", "lee,973,1591,munich", "bob,262,120,hongkong", "alex,759,31,barcelona", "bob,257,803,mexico", "alex,353,1074,prague", "lee,854,604,chicago", "lee,354,140,warsaw", "lee,827,521,prague", "chalicefy,73,439,zurich", "bob,365,899,shanghai", "chalicefy,490,1473,beijing", "lee,115,531,rome", "maybe,358,774,istanbul", "xnova,95,824,frankfurt", "lee,532,712,hongkong", "lee,766,616,newdelhi", "lee,231,1150,zurich", "bob,255,747,taipei", "lee,520,1825,montreal", "bob,744,401,guangzhou", "alex,284,877,toronto", "maybe,129,1999,frankfurt", "xnova,293,294,jakarta", "chalicefy,283,901,beijing", "lee,884,881,luxembourg", "alex,168,1279,shenzhen", "alex,348,1434,rome", "iris,958,537,paris"]