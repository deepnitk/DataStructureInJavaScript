function generateDocument(characters, document) {
    let docFreqs = new Map();
    for( let char of document) {
      docFreqs.set(char, (docFreqs.get(char) || 0) + 1);
    }
  
    let charFreqs = new Map();
    for( let char of characters) {
      charFreqs.set(char, (charFreqs.get(char) || 0) + 1);
    }
  
    for(let [char, freq] of docFreqs) {
      if ( !(charFreqs.has(char) && freq <= charFreqs.get(char)) )
        return false;
    }
    return true;
  }
  
  // Do not edit the line below.
  exports.generateDocument = generateDocument;
  
  