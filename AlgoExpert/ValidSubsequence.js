/*
    Solution 1 -- Traversing first array. if element match with sequence[j] j++. if(j === sequence.length) return true; .
    TC:O(N) SC:O(1)
*/

function isValidSubsequence(array, sequence) {
    // Write your code here.
    let arrIdx = 0;
    let seqIdx = 0;
    while ( arrIdx < array.length ){
      if(array[arrIdx] == sequence[seqIdx]) {
        seqIdx++;
      }
      arrIdx++;
    }
  
    return seqIdx === sequence.length;
  }
  
  // Do not edit the line below.
  exports.isValidSubsequence = isValidSubsequence;
  
  