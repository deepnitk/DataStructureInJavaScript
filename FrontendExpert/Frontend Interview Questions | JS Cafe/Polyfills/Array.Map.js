/**
 * @Problem statement:
 * Array.map() function polyfill.
 * const input = [1, 2, 3];
 * const output = input.map((element) => element*2);
 * output will be [2, 4, 6];
 * 
 * we need o create a polyfill of .map() function
 */

Array.prototype.myMap = function(cb) {
    const output = [];
    for(let i = 0; i < this.length; i++) {
        output[i] = cb(this[i]);
    }
    return output;
}

const input = [1, 2, 3];
console.log(input.myMap(a => a * 2));
