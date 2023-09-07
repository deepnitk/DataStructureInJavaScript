function longestPalindromicSubstring(string) {
    let currentLongest = string.substring(0,1);
  
    for(let idx = 1;idx < string.length; idx++) {
      const odd = getLongestPalindromeFrom(string, idx - 1, idx + 1);
      const even = getLongestPalindromeFrom(string, idx - 1, idx);
  
      const longest = getLongest(odd, even);
      currentLongest = getLongest(longest, currentLongest);
    }
  
    return currentLongest;
  
    function getLongestPalindromeFrom(string, leftIdx, rightIdx) {
      while (leftIdx >= 0 && rightIdx < string.length) {
        if(string[leftIdx] != string[rightIdx]) {
          break;
        }
        leftIdx -= 1;
        rightIdx += 1;
      }
      return string.substring(leftIdx + 1, rightIdx);
    }
  
    function getLongest(str1, str2) {
          return str1.length > str2.length ? str1 : str2;
      }
  }
  
  // Do not edit the line below.
  exports.longestPalindromicSubstring = longestPalindromicSubstring;
  