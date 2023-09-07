function moveElementToEnd(array, toMove) {
    let left = 0;
    let right = array.length - 1;
    while(left < right) {
      if (array[right] !== toMove) {
        if(array[left] === toMove) {
          swap(array, left, right);
        }
        left++;
      } else {
        right--;
      }
    }
    return array;
  }
  
  function swap(array, left, right) {
    const temp = array[left];
    array[left] = array[right];
    array[right] = temp;
  }
  // Do not edit the line below.
  exports.moveElementToEnd = moveElementToEnd;
  