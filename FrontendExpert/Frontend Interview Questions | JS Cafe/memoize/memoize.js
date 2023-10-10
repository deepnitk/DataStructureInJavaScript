/*
    memoize means whenever we call a function, it should not always compute the result.
    rather return a memoized or cached result if any.
*/
const memoize = (fn) => {
    const cache = {};
    return (...args) => {
        // store the args in the cache in a string format, because we dont know if
        // args is a string or number or objects.
        const argsToString = JSON.stringify(args);
        if(argsToString in cache) {
            console.log(`fetching from cache for args ${argsToString}`)
            return cache[argsToString];
        } else {
            // if fn is called with args for first time, then we need to call the fn and 
            //store result in cache.
            console.log(`computing result for args ${argsToString}`)
            const result = fn.apply(this, args);
            cache[argsToString] = result;
            return result;
        }
    }
}

const addThreeNums = (a, b, c) => a + b + c;
const add = memoize(addThreeNums);
console.log(add(1,2,3));
console.log(add(1,2,3));
console.log(add(1,2,3,4));
console.log(add(1,2,3));

// How you can implement memoize functions in recursive functions

const factorial = memoize((x) => {
    if(x === 0) return 1;
    else return x * factorial(x - 1); 
});

console.log(factorial(5));
console.log(factorial(6));
