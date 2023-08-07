//Recursive Approach
  //sc: O(n^2) tc: o(1)
function isPalindrome(string) {
    if (string.length == 0)
      return true;
    return isPalin(string, 0, string.length - 1);
  }
  
  function isPalin(str, s, e) {
    if ( s === e) {
      return true;
    }
    if( str.charAt(s) !== str.charAt(e)) {
      return false;
    }
    if ( s < e + 1)
      return isPalin(str, s + 1, e - 1);
  
    return true;
  }
  
  // Do not edit the line below.
  exports.isPalindrome = isPalindrome;

  
  //Two Pointer approaches
  //sc: O(n) tc: o(1)
  function isPalindrome(string) {
    if (string.length <= 1) return true;
    let s = 0;
    let e = string.length -1;
    while (s <= e) {
      if(string[s] !== string[e]) {
        return false;
      }
      s++;
      e--;
    }
    return true;
  }
  
  // Do not edit the line below.
  exports.isPalindrome = isPalindrome;
  