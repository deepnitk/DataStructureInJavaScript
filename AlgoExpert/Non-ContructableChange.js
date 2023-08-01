/*
    TC: O(NlogN): SC: O(1)
*/

function nonConstructibleChange(coins) {
    // Write your code here.
    if(!coins.length) return 1;
    let current = 0;
    coins.sort((a, b) => a - b );
    coins.forEach((coin) => {
      if (coin > current + 1) {
        return current + 1
      } else {
        current += coin;
      }
    })
    return current + 1;
  }
  
  // Do not edit the line below.
  exports.nonConstructibleChange = nonConstructibleChange;
  