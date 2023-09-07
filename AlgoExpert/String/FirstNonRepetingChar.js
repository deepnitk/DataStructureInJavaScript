
//TC:O(N) SC:O(N)
function firstNonRepeatingCharacter(string) {
    const hash = {};
    for (char of string) {
      hash[char] = (hash[char] || 0) + 1;
    }
  
    for(let idx = 0; idx < string.length; idx++) {
      if(hash[string[idx]] === 1) return idx;
    }
    return -1;
  }
  
  // Do not edit the line below.
  exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
  