function myReduce(cb, initialValue) {
    if (!this) throw new Error("Array is not defined!");
    var array = this;
    var n = array.length;
    if (!n) {
        if (initialValue) {
            return initialValue;
        } else {
            throw new Error("You need to pass initialValue if Array is empty!");
        }
    }

    let acc;
    if (initialValue) {
        acc = initialValue;
    } else {
        acc = 0;
    }
    for (let i = 0; i < array.length; i++) {
        acc = cb(acc, array[i]);
    }
    return acc;
}

Array.prototype.myReduce = myReduce;
const arr = [1,2,3,4,5,6,7,8,9];
const output = arr.myReduce((acc, curr) => acc + curr);
console.log(output);