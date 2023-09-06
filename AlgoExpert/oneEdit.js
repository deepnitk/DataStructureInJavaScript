function oneEdit(stringOne, stringTwo) {
    let madeEdit = false;
    const len1 = stringOne.length;
    const len2 = stringTwo.length;
    if(Math.abs(len1 - len2) > 1) {
      return false;
    }
    let i = 0;
    let j = 0;
    while(i < len1 && j < len2) {
      if(stringOne[i] != stringTwo[j]) {
        if(madeEdit) return false;
        madeEdit = true
        if (len1 > len2) {
          i++;
        } else if (len2 > len1) {
          j++;
        } else
        {
          i++;
          j++;
        }
      } else {
        i++;
        j++;
      }
    }
    return true;
  }
  
  // Do not edit the line below.
  exports.oneEdit = oneEdit;
  