/**
 * @Problem Statement
 * we need to write polyfills for array.filter
 * const arr = [1, 2, 3, 4]
 * const output = arr.filter((x) => x%2 === 0)
 * console.log(output); // prints [2, 4]
 * 
 */

Array.prototype.myFilter = function (cb) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            output.push(this[i]);
        }
    }
    return output;
}

const arr = [1, 2, 3, 4];
console.log(arr.myFilter((x) => x%2 === 0));