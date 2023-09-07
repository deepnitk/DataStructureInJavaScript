// tc:o(m*n), sc:o(m*n)
function semordnilap(words) {
    const wordSet = new Set();
    const pairs = [];
    for(const word of words){
      const reversed = word.split("").reverse().join("");
      if(wordSet.has(reversed)) pairs.push([word, reversed])
      else wordSet.add(word);
    }
    return pairs;
  }
  
  // Do not edit the line below.
  exports.semordnilap = semordnilap;
  