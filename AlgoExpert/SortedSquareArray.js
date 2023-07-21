/*
    Solution 1 -- Traverse array. Square each element and add it to resultant array. Sort and return .
    TC:O(NlogN) SC:O(N)
*/

function sortedSquaredArray(array) {
    // Write your code here.
    const sortedArray = new Array(array.length).fill(0);
    for (let idx = 0; idx < array.length; idx++) {
      const value = array[idx];
      sortedArray[idx] = (value * value);
    }
    return sortedArray.sort((a, b) => a - b);
  }
  
  // Do not edit the line below.
  exports.sortedSquaredArray = sortedSquaredArray;
  