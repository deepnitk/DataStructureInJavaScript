function sum(a, b, c) {
    console.log(a + b + c);
}
let curriedSum = curry(sum);
curriedSum(1, 2, 3)
curriedSum(1)(2,3)
curriedSum(1)(2)(3)