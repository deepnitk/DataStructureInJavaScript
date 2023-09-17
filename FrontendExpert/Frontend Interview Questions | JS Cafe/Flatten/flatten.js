
/**
 * @input = [[[1, [1.1]], 2, 3], [4, 5]];
 * @expected output = [1, 1,1, 2, 3, 4, 5];
 */

const flattenArray = (input) => {
    // if input is not and object. then it is a primitive value for sure.
    if (typeof input !== 'object' ||  input === null ) {
        return input;
    }

    if (Array.isArray(input)) {
        return input.reduce((acc, curr) => acc.concat(flattenArray(curr)), []);
    }
};
const input = [[[1, [1.1]], 2, 3], [4, 5]];
const output = flattenArray(input);

console.log(output);