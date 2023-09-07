function threeNumberSum(array, targetSum) {
    const res = [];
    array.sort((a, b) => a - b);
    for(let i = 0; i < array.length; i++) {
      let start = i + 1;
      let end = array.length - 1;
      
      while(start < end) {
        let currSum = array[i] + array[start] + array[end];
        if ( currSum === targetSum) {
          res.push([array[i], array[start], array[end]]);
          start++;
          end--;
        } else if (currSum < targetSum) {
          start++
        } else {
          end--;
        } 
      }
    }
    return res;
  }
  
  // Do not edit the line below.
  exports.threeNumberSum = threeNumberSum;
  