/**
 * @Problem statement
 * const array1 = [1, 2, 3, 4];
    0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

    console.log(sumWithInitial);
    expected output: 10

 */

// Callback => previousValue, currentValue, index, array

function myReduce(callback, initialValue) {
    if (!this) throw new Error("Array is not defined!");
    var array = this;
    var index = 0;
    var accumulator;
    var n = array.length;

    if (!n) {
        if (initialValue) {
            return initialValue;
        } else {
            throw new Error("You need to pass initialValue if Array is empty!");
        }
    }

    if (initialValue) {
        accumulator = initialValue;
    } else {
        accumulator = array[index++];
    }

    while (index < n) {
        accumulator = callback(accumulator, array[index]);
        index ++;
    }

    return accumulator;

}

Array.prototype.myReduce = myReduce;
const arr = [1, 2, 3];
console.log(arr.myReduce((acc, curr) => acc+ curr, 0));