function runLengthEncoding(string) {
    // Write your code here.
    let length = 1;
    let output = '';
    let currChar = null;
    for(let i = 1; i < string.length; i++ ) {
      currChar = string[i];
      if(string[i] === string[i -1] && length + 1 <= 9) {
        length++;
      } else {
        output = `${output}${length}${string[i -1]}`;
        length = 1;
      }
    }
    if(length !== 0) {
      output = `${output}${length}${string[string.length - 1]}`;
    }
    return output;
  }
  
  // Do not edit the line below.
  exports.runLengthEncoding = runLengthEncoding;
  