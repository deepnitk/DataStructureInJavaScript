// TC: O(N^2) SC: O(1)
function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
    let min = [Number.MIN_VALUE, Number.MAX_VALUE];
    for(let i = 0; i < arrayOne.length; i++){
      for(let j = 0; j < arrayTwo.length; j++) {
        if (Math.abs(arrayOne[i] - arrayTwo[j]) < Math.abs(min[0] - min[1])) {
          smallest = arrayOne[i] - arrayTwo[j];
          min = [arrayOne[i], arrayTwo[j]];
        }
      }
    } 
    return min;
  }
  
  // Do not edit the line below.
  exports.smallestDifference = smallestDifference;


  //TC: O(NlogN)
  function smallestDifference(arrayOne, arrayTwo) {
    let min = [Number.MIN_VALUE, Number.MAX_VALUE];
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);
    let i = 0;
    let j = 0;
    while (i < arrayOne.length && j < arrayTwo.length) {
      let num1 = arrayOne[i];
      let num2 = arrayTwo[j];
      
      if (Math.abs(num1 - num2) < Math.abs(min[0] - min[1])) {
          min = [num1, num2];
      }
      if (num1 < num2) {
        i++;
      } else if (num2 < num1) {
        j++;
      } else if (num1 == num2) {
        return [num1, num2];
      }
    }
    return min;
  }
  
  // Do not edit the line below.
  exports.smallestDifference = smallestDifference;
  
  