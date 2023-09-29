// 1. question 1

	function printHelloMsg() {
	  var msg = 'Hello';
	  if (msg) {
	    let msg = msg + ' user :)';
	    console.log(msg)
	  }
	  console.log(msg)
	}
	printHelloMsg();

// output:
// index.js:4 Uncaught ReferenceError: Cannot access 'msg' before initialization
//     at printHelloMsg (index.js:4:17)
//     at index.js:9:3

// explanation:
//     inside if msg is decalred as let, hence it becomes block/script scoped.
//     Let gets hoisted differently. let variable hosisted in script scope and not in global.
//     Hence ReferenceError.

// -------------------------------------------------------------


// 2. question 2


const animal = {
    animal_name: "cat",
    action: function () {
        console.log(`${this.animal_name} is doing action`);
    }
};
animal.action()
setTimeout(animal.action, 1000);

// output:
// cat is doing action
// undefined is doing action

// explanation:
// The animal.action function is passed to setTimeout, then when it's called, its this is not set, so it defaults to the window object.

// There's also no option to pass a thisArg to setTimeout as there is in Array methods such as forEach() and reduce().
// As shown below, using call to set this doesn't work either.

// The "this" problem
// When you pass a method to setTimeout(), it will be invoked with a this value that may differ from your expectation. 
// The general issue is explained in detail in the JavaScript reference.

// Code executed by setTimeout() is called from an execution context separate from the function from which setTimeout was called. 
// The usual rules for setting the this keyword for the called function apply, and if you have not set this in the call or with bind, 
// it will default to the window (or global) object. It will not be the same as the this value for the function that called setTimeout.

// solution 1:

// A common way to solve the problem is to use a wrapper function that sets this to the required value:

const animal1 = {
    animal_name: "cat",
    action: function () {
        console.log(`${this.animal_name} is doing action`);
    }
};
animal1.action();
setTimeout(() => animal.action(), 1000);

// solution 2:

// Alternatively, you can use bind() to set the value of this for all calls to a given function:

const animal3 = {
    animal_name: "Dog",
}

const boundedMethod = function () {
    console.log(`${this.animal_name} is doing action`);
}.bind(animal);

boundedMethod();

setTimeout(boundedMethod, 1000);

// ----------------------------------------------------------------

//3. Question 3:

function sum(a, b, c) {
    console.log(a + b + c);
}
let curriedSum = curry(sum);
curriedSum(1, 2, 3)
curriedSum(1)(2,3)
curriedSum(1)(2)(3)