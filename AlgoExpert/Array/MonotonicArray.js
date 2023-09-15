//TC: O(N)

function isMonotonic(array) {
    let increasing = true;
    let decresing = true;
  
    for(let i = 1; i < array.length; i++) {
      if(isIncreasing(array[i], array[i-1])) decresing = false;
      if(isDecreasing(array[i], array[i-1])) increasing = false;
    }
  
    return increasing || decresing;
  }
  
  function isIncreasing(a, b) {
    return a > b;
  }
  
  function isDecreasing(a, b) {
    return a < b;
  }
  
  // Do not edit the line below.
  exports.isMonotonic = isMonotonic;
  