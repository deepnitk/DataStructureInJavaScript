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

/*
    Solution 2 -- Two pointer approach. Check abs value and fill in resultant array from end.
    TC:O(N) SC:O(N)
*/
  function sortedSquaredArray(array) {
    // Write your code here.
    const result = new Array(array.length).fill(0);
    let start = 0;
    let end = array.length - 1;
    let j = array.length - 1;
    while (start <= end) {
      let a = array[start];
      let b = array[end];
      if (Math.abs(a) > Math.abs(b)) {
        result[j] = a * a;
        start++;
      } else {
        result[j] = b * b;
        end--;
      }
      j--;
    }
    return result;
  }
  
  // Do not edit the line below.
  exports.sortedSquaredArray = sortedSquaredArray;
  
  