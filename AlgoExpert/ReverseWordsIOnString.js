// TC: O(N)
function reverseWordsInString(string) {
    const arr = string.split(" ");
    const res = [];
    for(let i = arr.length - 1; i >= 0; i--) {
      res.push(arr[i]);
    }
    return res.join(" ");
  }
  
  // Do not edit the line below.
  exports.reverseWordsInString = reverseWordsInString;


  //Better approach handles multiple whitespaces
  function reverseWordsInString(string) {
    let reverse = "";
    let i = string.length - 1;
    let currentWord = "";
    while (i >= 0) {
      const char = string[i];
      if (char === " ") {
        reverse +=  currentWord + " ";
        currentWord = "";
      } else {
        currentWord = char + currentWord; 
      }
      i--;
    }
    return reverse + currentWord;
  }
  
  // Do not edit the line below.
  exports.reverseWordsInString = reverseWordsInString;
  
  