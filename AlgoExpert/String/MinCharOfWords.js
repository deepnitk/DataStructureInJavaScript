function minimumCharactersForWords(words) {
    let res = [];
    for(let word of words) {
      let storage = [...res];
      for(let letter of word) {
        if(!storage.includes(letter)) {
          res.push(letter);
        } else {
          // res = ['t', 'h', 'i', 's'], once I get 't' of that, 
          //it means 1 t is consumed, so remove it
          storage.splice(storage.indexOf(letter), 1);
        }
        
      }
    }
    return res;
  }
  
  // Do not edit the line below.
  exports.minimumCharactersForWords = minimumCharactersForWords;


  //Better approach

  function minimumCharactersForWords(words) {
    let maxCharFreq = new Map();
    for(let word of words) {
      let charFreq = countCharFreq(word);
      updateMaxFreq(charFreq, maxCharFreq);
    }
    return makeArrayFromMaxCharFreq(maxCharFreq);
  }
  
  function countCharFreq(word) {
    let charFreq = new Map();
    for(let letter of word) {
      charFreq.set(letter, (charFreq.get(letter) || 0) + 1);
    }
    return charFreq;
  }
  
  function updateMaxFreq(charFreq, maxCharFreq){
    for(let [char, freq] of charFreq) {
      if (maxCharFreq.has(char)) {
            maxCharFreq.set(char, Math.max(freq, maxCharFreq.get(char)));
      } else {
          maxCharFreq.set(char, freq);
      }
    }
  }
  
  function makeArrayFromMaxCharFreq(maxCharFreq) {
    let result = [];
    for (let [char, freq] of maxCharFreq) {
      for(let i = 0; i < freq; i++) {
        result.push(char);
      }
    }
    return result;
  }
  
  // Do not edit the line below.
  exports.minimumCharactersForWords = minimumCharactersForWords;
  
