/**
 * Problem description:
 * const input = "hello world"
 * const output = "helo wrd"
 * removed duplicated characters 'l' and 'o' from input string.
 */

//Solution 1

const removeDuplicates = (input) => {
    const array = input.split("");
    let set = new Set();
    const output = [];
    array.forEach(element => {
        if(!set.has(element)) {
            set.add(element);
            output.push(element);
        }
     });
     return output.join("");
};
const input = "hello world";
console.log(removeDuplicates(input));