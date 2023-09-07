function validIPAddresses(string) {
    if (string.length < 4) {
      return [];
    }
  
    let validIPAddresses = [];
  
    for(let i = 1; i < 4; i++) {
      const part1 = string.substring(0, i);
      if(!isValidPart(part1)){
        continue;
      }
  
      for(let j = i + 1; j < i + 4 && j < string.length; j++) {
        const part2 = string.substring(i, j);
        if(!isValidPart(part2)){
          continue;
        }
  
        for (let k = j + 1; k < j + 4 && k < string.length; k++) {
          const part3 = string.substring(j, k);
          const part4 = string.substring(k, string.length);
          if(isValidPart(part3) && isValidPart(part4)){
            validIPAddresses.push(`${part1}.${part2}.${part3}.${part4}`);
          }
        }
      }
    }
    return validIPAddresses;
  }
  
  function isValidPart(part) {
    if (part.length > 3 || part.length < 1) {
      return false;
    }
    const num = Number(part);
    if (num > 255) return false;
  
    return part.length === num.toString().length;
  }
  
  // Do not edit the line below.
  exports.validIPAddresses = validIPAddresses;
  