// Create a curry function that accepts 5 arguments
const ARGS_LEN = 5;
const sum = (...args) => {
    if (args.length === ARGS_LEN) {
        return args.reduce((acc, curr) => acc + curr);
    } else {
        const recursiveFunc = (...args2) => {
            args = [...args, ...args2];
            if (args.length === ARGS_LEN) {
                return args.reduce((acc, curr) => acc + curr);
            } else {
                return recursiveFunc;
            }
        }
        return recursiveFunc;
    }
}


console.log(sum(1,2,3,4,5));
console.log(sum(1,2,3,4)(5));
console.log(sum(1)(2)(3)(4)(5));
console.log(sum(1,2,3)(4,5));
console.log(sum(1)(2,3,4,5));