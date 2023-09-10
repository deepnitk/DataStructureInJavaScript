/*
    Hoisting in JavaScript

    getName();
    console.log(x);
    var x = 7;
    function getName() {
        console.log("Ratnadeep");
    }
*/
// ----------------------------------------------------------------
/**
 *  Functions in JavaScript
 *  var x = 1;
    a();
    b();
    console.log(x); // 1

    function a() {
        var x = 10;
        console.log(x); // 10
    }

    function b() {
        var x = 1000;
        console.log(x); // 1000
    }
 */
// ----------------------------------------------------------------

/*
    Lexical environment and scope 1
    function a() {
        console.log(b);
    }
    var b = 1;
    a();
    ---------------------
    Lexical environment and scope 2
     function a() {
        b();
        function b() {
            console.log(x);
        }
    }
    var x = 1;
    a();
   
*/

// ----------------------------------------------------------------

/*
    Let and const Hosisting environment
    console.log(a); //ref error. cannot access before initialization
    console.log(b);
    let a = 1;
    var b = 100;
*/
 // ----------------------------------------------------------------

 /*
 closure

  function a() {
    var x = 1;
    function b() {
        console.log(x);
    }
    b();
 }
 a();

 ----------------------------------------------------------------

    function a() {
        var x = 1;
        function b() {
            console.log(x);
        }
        return b;
    }
    var z = a(); // here not just the function got retured but the whole closure got retured. func b still rember its lexical scope.
    console.log(z); // prints func b()..
    z(); // prints 1. as it is still hava a closure
    functions when returned they still remewmber there lexical scope

----------------------------------------------------------------

    function a() {
        var x = 1;
        function b() {
            console.log(x);
        }
        x = 100;
        return b;
    }
    var z = a(); // here not just the function got retured but the whole closure got retured. func b still rember its lexical scope.
    console.log(z); // prints func b()..
    z(); // prints 100. as it is still hava a closure
    functions when returned they still remewmber there lexical scope

    -----------     ------------------------

    function c() {
        var y = 1000;
        function a() {
            var x = 1;
            function b() {
                console.log(x);
                console.log(y);
            }
            x = 100;
            return b;
        }
    }
    var res = b();
    res();

    ------------------------------------------------
    function c() {
        var y = 1000;
        function a() {
            var x = 1;
            function b() {
                console.log(x); //1
                console.log(y); //1000
                // b forms a closure withn scope of a and c.
            }
            b();
        }
        a();
    }
    c();
 */

// --------------------------------------------------
/*
    Callback function
    setTimeout(() => {
        console.log("setTimeout");
    }, 5000);

    function x(y) {
        console.log("x");
        y();
    };

    x(function y() {
        // here y is a callback function
        console.log("y");
    })

    output
    x
    y
    setTimeout after 5 sec
*/


/*
Closure interview question
1. 
function x() {
    var  i = 1;
    setTimeout(() => {
        console.log("i"); // this will print 1 after 1 second
    }, 1000);
}
x();

2. 
function x() {
    var  i = 1;
    setTimeout(() => {
        console.log(i); // this will print 1 after 1 second
    }, 1000);
    console.log("I will print 1 after 1 second"); 
}
x();
output:

I will print 1 after 1 second
1 (after 1 second)

explanation:
JS will not wait for setTimeout to get over. Functions forms a closure and remembers i. settimeout takes the cb and puts it somewhere else and prints the i

3. print 1,2,3 using setTimeout

function x() {
    for(var i= 1; i <= 3; i++) {
        setTimeout(() => {
            console.log(i); 
        }, i*1000);
    }
}
x();

Output:

print 4 3 times each after 1 second

explanation:

var i forms a closure with setTimeout()'s cb and remembers i.
closure = function + lexical environment. here function remember ref of i. 
they are pointing to same ref of i. So All CB are refering to same ref of i i.e. 4 now after 1 second


4. Print 1, 2, 3 using let keyword

function x() {
    for(let i= 1; i <= 3; i++) {
        setTimeout(() => {
            console.log(i); 
        }, i*1000);
    }
}
x();

output:

1
2
3  //each after 1 second

explanation:

each setTimeout function is having 1 "i" refernece. And that "i" is let(block scoped). Hence i is different for each  block and CB of setTimeout.

5. Print 1, 2, 3 using var

function print() {
    for(let i= 1; i <= 3; i++) {
        function close(x) {
            setTimeout(() => {
                console.log(x); 
            }, x*1000);
        }
        close(i);
    }
}
print();

output:

1
2
3  //each after 1 second

explanation:

Now we formed a closure with close function. Now everytime close function is called, its called with a different "i"

 */

// ----------------------------------------------------------------

/*
What is closure?
ans: closure = function + lexical scope/environment
e.g 1

function outer() {
    var x = 10;

    function inner() {
        console.log(x);
    }
    var x = 10; this will still form a closure. closure does not depends on any particular order.
    return inner;
}
outer()(); //calling inner function. prints 10;

e.g 2:

function outer() {
    let x = 10;

    function inner() {
        console.log(x);
    }
    return inner;
}
outer()(); //calling inner function. Prints 10
Here we declared x as let and let is blocked scoped. 
But it will still form a closure  and it will remember x outside of the scope as well. Hence prints 10;

e.g. 3:

function outer() {
    var x = 10;

    function inner() {
        console.log(x);
    }
    var x = 100; 
    return inner;
}
outer()();

output:
100
explanation:
var is global scoped and x formed a closure with inner function. and its pointing to ref of x, and it changed to 100 now

e.g. 4:

function outer(y) {
    let x = 10;

    function inner() {
        console.log(x, y);
    }
    return inner;
}
var close = outer("hello world");
close();

output:
10 "hello world"

explanations:
var y is supplied from outside. but its still part of lexical environment of inner and hence forms a closure. henced remembered.

e.g. 5:

function outest() {
    var z = 100;
    function outer(y) {
        let x = 10;
    
        function inner() {
            console.log(x, y, z);
        }
        return inner;
    }
    return outer;
}
outest()("hello world")();
var close = outest()("hello world");
close();

output:
10 "hello world" 100

explanation:
here we added another nesting of outest function. here "z" will still form closure with inner function because of scope chaining.

e.g. 6:
Global variable with conflicting name

function outest() {
    var z = 100;
    function outer(y) {
        
        function inner() {
            console.log(x, y, z);
        }
        let x = 10;
        return inner;
    }
    return outer;
}
let x = 100;
outest()("hello world")();

output:
10 "hello world" 100

explanation:
here we have 2 declaration a variable x. one at block of outer scope and one at global scope.
As inner is forming closure with x = 10 and its block scope it will still point to x = 10. 
But if we remove x = 10 AudioListener, then inner closuere will go and search x till Global scope. that time it will point to x = 100;

----------------------------------------------------------------

Advantages of closures
1. used in setTimeout.
2. used in Mudule patterns.
3. used in function currying
4. memoize
5. once
6. helps in data hiding and encapsulation.


1. helps in data hiding and encapsulation.
// Majopr flaw with below code is anybody can use this counter variable
var counter = 0;

function incremenetCounter() {
    counter++;
}

to solve abpove problem we can use the concept of closure i.e. wrap above code in another function

function counter() {
    var count = 0;

    function incremenetCounter() {
        count++;
    }
}

console.log(count); // This will not work and give reference error.

function counter() {
    var count = 0;
    now if we return this function then this function will make closure with count variable, and we will have access to it.
    return function incremenetCounter() {
        count++;
        console.log(count);
    }
}

var counter1 = counter();
counter1();
counter1();

here counter will reset and again start from 1.
var counter2 = counter();
counter2();
counter2();

Optimized counter
function Counter() {
    var count  = 0;
    this.incrementCounter = function() {
        count++;
        console.log(count);
    }
    this.decrementCounter = function() {
        count--;
        console.log(count);
    }
}

var counter1 = new Counter();
counter1.incrementCounter();
counter1.decrementCounter();

----------------------------------------------------------------
Disadvantages of counter
1. over consumtion of memory. those closed over variables are not garbage collected.
2. if not handled properly may lead to memory leaks.

#Garbage Collector
Frees up unutilized memory.
JS is a high level langauge and it does its garbage collections of its owm -- by JS engine.

How are closure and garbage collector related?
function a() {
    var x = 0;
    var y = 10;
    func b forms a closure with var X.
    return function b() {
        console.log(x);
    }
}
Ideally, after execution of below line, JS engine should have freed up all the memory. 
But It doesn't happen because func b formed a closure with var x. and later in the execution, we may need var x again. Hence not garbage collected.
Though some modern browsers V8 OF Chrome, have smart garbage collection. if this variables are unreachable then they are garbage collected.
smartly means --> in above example both 'x' and 'y' formed closure, but 'y' is not used hence y can be garbage collected.
a();

----------------------------------------------------------------
----------------------------------------------------------------

Map example

const users = [
    {firstname: 'John', lastname: 'deo', age:42},
    {firstname: 'Deep', lastname: 'Konar', age:30},
    {firstname: 'nunu', lastname: 'non', age:26}
];

list of full names

solution 1 using map
const output = users.map((x) => x.firstname + ' ' + x.lastname);
console.log(output);

solution 2 using reduce

const output = users.reduce((acc, user) =>{
    acc.push(user.firstname + ' ' + user.lastname);
    return acc;
},[]);

console.log(output);

reduce example

print age freq array
{42: 1, 26: 1, 30: 1}

We will use reduce here. Because output is one element not an array.
const users = [
    {firstname: 'John', lastname: 'deo', age:42},
    {firstname: 'Deep', lastname: 'Konar', age:30},
    {firstname: 'nunu', lastname: 'non', age:26}
];

const output = users.reduce((acc, user) => {
    if(acc[user.age]) {
        acc[user.age] = acc[user.age] + 1;
    } else {
        acc[user.age] = 1;
    }
    return acc;
}, {});

console.log(output);

----------------------------------------------------------------
Print firstname with age < 30
const users = [
    {firstname: 'John', lastname: 'deo', age:42},
    {firstname: 'Deep', lastname: 'Konar', age:30},
    {firstname: 'nunu', lastname: 'non', age:26}
];

//Print firstName of all the people whos age < 30

const output = users.filter((user) => user.age < 30)
                    .map((x) => x.firstname);

console.log(output);


----------------------------------------------------------------

callBack : Callback are super powerful way of handling async operations.

setTimeout(() => {
console.log("wow!");
}, 5000)

Problems with callbacks
1. callBack Hell: One cb inside another callback inside a callback and inside a API and so on. Pyramid of dom
    1. unmaintainable.
    2. difficult to debugg
2. Inversion of control: we lose the control over the callback. We gave the control of a callback function to other API or other function. 
    so basicallly gave the control of our code to another function.

--------------------------------------------------------------------------

Promises: Are used to handle asynchronous operations.

Life before promises

const cart = ["shoes", "pants", "kurta"];

We have 2 APIs. One for createOrder, it returns a orderId. Second for proceedToPayment with the orderId returned.
Now both APIs are asynchronous and dependented on each other. i.e. proceedToPayment cant be called when the orderId is not recieved.
We used to solve that problem by wrapping proceedToPayment in a function and pass it as a cb to createOrder api.
now its the responsibiklity if the createOrder to call proceedToPayment after the orderId has been received.
THis will work but we knoe the issue of callbacks.
createOrder(cart, function (orderId) {
    proceedToPayment(orderId);
});


Life after Promise
const cart = ["shoes", "pants", "kurta"];

Promise is nothing but a Object. It has some key value pair. createOrder is a async operation and once it finishes it will return a promise object
with data field populated. and once we recieve it we can do promise.then and pass our callback function. Now we have the control of calling
proceedtoPayment method after the promise has been fulfilled.
const promise =  createOrder(cart);

promise.then(function (orderId) {
    proceedToPayment(orderId);
})

Another example of promise
const URL = 'https://github.com/deepnitk';
Result will store whatever data is returened. State will be pending, fulfillment, rejection.
const promise = fetch(URL);
console.log(promise); // it will show pending and inside its fullfilled state.
if we want to attach a callback to the promise
Promise data is immutable
promise.then((data) => {
    console.log(data);
})


What is Promise?
1. A placeholder, which will be filled with data returned from the asynchronous operation.
2. Container for future value
3. A Promise is an object representing the eventual completion of the asynchronous operation.


Promise chaining example

createOrder(cart)
    .then(function(orderId){
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo){
        return showOrderSummary(paymentInfo)
    });


Create your own Promise

const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);

promise.then(function(orderId) {
    //this callback will be executed when the promise is resolved.
    console.log(orderId);
    // proceedTopayment(orderId);
})
.catch(function(err) {
    //this callback will be executed when the promise is rejected
    console.log(err.message);
});

function createOrder(cart) {
    const pr = new Promise((resolve, reject) => {
        // Create Order
        //validate cart
        if(!validateCart(cart)) {
            reject(new Error("validation failed"));
        }
        const order = "123";
        resolve(order);
    });
    return pr;
}

function validateCart(cart) {
    return false;
}

----------------------------------------------------------------

Promise chaining

const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
    .then(function (orderId) {
        console.log(orderId);
        // we need to always return to the next then chain.
        return orderId;
    })
    .catch(function(err) {
        //attaching failure callback in case of rejected promise
        console.log(err.message);
    })
    .then(function(orderId){
        console.log(`Payment for order ${orderId} completed`);
        return proceedToPayment(orderId);
    })
    .then(function(orderId){
        console.log(`order summary for order ${orderId}`);
        return showOrderSummary(orderId);
    })
    .catch(function(err) {
        console.log(err.message);
    })
    .then(function(orderId){
        console.log(`wallet status for order ${orderId}`);
        return updateWalletStatus(orderId);
    })

function createOrder(cart) {
    const pr = new Promise((resolve, reject) => {
        if(!validateCart(cart)) {
            reject(new Error("validation failed"));
        }
        const order = "123";
        resolve(order);
    });
    return pr;
}

function validateCart(cart) {
    return true;
}

function proceedToPayment(orderId) {
    const pr =  new Promise((resolve, reject) => {
        if(orderId !== "123") {
            reject(new Error(`Order ${orderId} already exists`));
        }
        resolve(orderId);
    })
    return pr;
}

function showOrderSummary(orderId ) {
    return new Promise(function(resolve, reject) {
        resolve(orderId);
    });
}

function updateWalletStatus(orderId) {
    return new Promise(function(resolve, reject) {
        resolve(orderId);
    });
}

----------------------------------------------------------------
Promise.all

The Promise.all() method is one of the promise concurrency methods. 
It can be useful for aggregating the results of multiple promises. 
It is typically used when there are multiple related asynchronous 
tasks that the overall code relies on to work successfully — all of whom we want to fulfill before the code execution continues.

Promise.all() will reject immediately upon any of the input promises rejecting.
 In comparison, the promise returned by Promise.allSettled() will wait for all input promises to complete,
  regardless of whether or not one rejects. Use allSettled() if you need the final result of every promise in the input iterable.
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
Expected output: Array [3, 42, "foo"]

----------------------------------------------------------------

Promise.allSettled

The Promise.allSettled() static method takes an iterable of promises as input and returns a single Promise.
 This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed), 
 with an array of objects that describe the outcome of each promise.

The Promise.allSettled() method is one of the promise concurrency methods. 
Promise.allSettled() is typically used when you have multiple asynchronous tasks that are not dependent on one another 
to complete successfully, or you'd always like to know the result of each promise.

In comparison, the Promise returned by Promise.all() may be more appropriate if the tasks are dependent on each other, 
or if you'd like to immediately reject upon any of them rejecting.
 const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) => results.forEach((result) => console.log(result.status)));

Expected output:
"fulfilled"
"rejected"

----------------------------------------------------------------

Promise.any

The Promise.any() static method takes an iterable of promises as input and returns a single Promise. 
This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. 
It rejects when all of the input's promises reject (including when an empty iterable is passed), with an AggregateError containing an array of rejection reasons.

Unlike Promise.all(), which returns an array of fulfillment values, we only get one fulfillment value (assuming at least one promise fulfills). 
This can be beneficial if we need only one promise to fulfill but we do not care which one does. 
Note another difference: this method rejects upon receiving an empty iterable, since, truthfully, the iterable contains no items that fulfill. 
You may compare Promise.any() and Promise.all() with Array.prototype.some() and Array.prototype.every().

const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));

Expected output: "quick"

----------------------------------------------------------------

Promise.prototype.finally

The finally() method of Promise instances schedules a function to be called when the promise is settled (either fulfilled or rejected).
 It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods.

 function checkMail() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve('Mail has arrived');
    } else {
      reject(new Error('Failed to arrive'));
    }
  });
}

checkMail()
  .then((mail) => {
    console.log(mail);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log('Experiment completed');
  });

output:
> Error: Failed to arrive
> "Experiment completed"


--------------------------------------------------------

Promise.race

The Promise.race() static method takes an iterable of promises as input and returns a single Promise. 
This returned promise settles with the eventual state of the first promise that settles.

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 50, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  Both resolve, but promise2 is faster
});
Expected output: "two"

----------------------------------------------------

Differnece between Promise.any ans Promise.race

1. If any of the passed promise (as an input) is in the rejected state:

Promise.any() method will accept that rejected promise and will further check for other passed in promises and if found some resolved promise then it will return its data as an output.
Promise.race() method will accept that rejected promise and will not further check for other passed in promises and eventually 
    returns an error message which is passed inside the rejected promise as the data.

2. If all the passed in promises (as in inputs) are in rejected state:

Promise.any() method will accept all the rejected state promises and returns a peculiar (different) error which is known as Aggregated Error  
    which implies that all the promises which are passed in are actually in the rejected state.
Promise.race() method will accept all the rejected state promises and without even further checking other rejected state promises after checking 
    the first rejected state promise, it will return an error that contains the data which is passed inside the reject() method of the first rejected state promise.


----------------------------------------------------------------

Call, apply and bind function in Javascript.

1. CALL

e.g. 1 using function borowing

let name = {
    firstName: 'John',
    lastName: 'Doe',
    printFullName: function() {
        console.log(this.firstName + ' ' + this.lastName);
    }
}

name.printFullName();

let name2 = {
    firstName: 'Nunu',
    lastName: 'Buri',
}

Function Borrowing
this will be equals to name2
name.printFullName.call(name2);

e.g. 2 seperated function

let name = {
    firstName: 'John',
    lastName: 'Doe',
}
let name2 = {
    firstName: 'Nunu',
    lastName: 'Buri',
}

let printFullName = function() {
    console.log(this.firstName + ' ' + this.lastName);
}
name and name2 will be respective this
printFullName.call(name);
printFullName.call(name2);


e.g. 3 printFullName with more arguments. First argument will be 'this'
let name = {
    firstName: 'John',
    lastName: 'Doe',
}
let name2 = {
    firstName: 'Nunu',
    lastName: 'Buri',
}

let printFullName = function(hometown) {
    console.log(this.firstName + ' ' + this.lastName + " from " + hometown);
}

name and name2 will be respective this
printFullName.call(name, "west Bengal");
printFullName.call(name2, "Pune");

-----------------------
2. Apply

Only differnece with call() is the way argument are passed

let name = {
    firstName: 'John',
    lastName: 'Doe',
}
let name2 = {
    firstName: 'Nunu',
    lastName: 'Buri',
}

let printFullName = function(hometown) {
    console.log(this.firstName + ' ' + this.lastName + " from " + hometown);
}

First argument = this. rest of the arguments are to be passed as array
printFullName.apply(name, ["west Bengal"]);
printFullName.apply(name2, ["Pune"]);

------------------------------------------

3. Bind 
Looks exactly like call method. 
Only differnece is bind returns a function which can be invoked later

let name = {
    firstName: 'John',
    lastName: 'Doe',
}
let name2 = {
    firstName: 'Nunu',
    lastName: 'Buri',
}

let printFullName = function(hometown) {
    console.log(this.firstName + ' ' + this.lastName + " from " + hometown);
}

First argument = this. rest of the arguments are to be passed as we do in call
const print1 = printFullName.bind(name, "west Bengal");
print1();
const print2 = printFullName.bind(name2, "Pune");
print2();



------------------------------------------------------------------------------------------------

Polyfill for bind methods
polyfill = browsers fallback

let name = {
    firstName: 'John',
    lastName: 'Doe',
}

let printFullName = function(hometown, country) {
    console.log(this.firstName + ' ' + this.lastName + " from " + hometown + ", " + country);
}

//First argument = this. rest of the arguments are to be passed as array
const print1 = printFullName.bind(name, "Pune", "India");
print1();

Function.prototype.myBind = function(...args) {
    printFullName is 'this' here
    let obj = this;
    params = args.slice(1);
    return function(...args2) {
        obj.apply(args[0], [...params, ...args2]);
    }

}

let print2 = printFullName.myBind(name,"India", "west Bengal", );
print2();

------------------------------------------------------------------------------------------------

Debounce

Search on search bar.
Suppose I search for schoolBag in amazon.com in this case for autosuggestions amazon should 
not call API on every keystroke. This can be achieved with Debouncing concept.
when users takes a pause we should make a API call.

let counter = 0;
const getData = () => {
    console.log("API call...", counter++);
}

const doSomeMagic = (func, delay) => {
    let timer;
    return function() {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    }
}

const debouncedFunction = doSomeMagic(getData, 300);


----------------------------------------------------------------


Throttling

Throtlling is generally used for performance optimization and rate limiting the 
function call or function execution.

suppose we have a button and click of that button we will do a API call.
so a user can click on that button multiple times and API will be called many times.
so here we should rate limit i.e. user may click ,
ultiple times but 2nd API will be called after 500ms

const expensive = () => {
    console.log("Expensive request");
};

function throttledRequest(func, limit) {
    let flag = true;
    let context = this;
    let args = arguments;
    return function() {
        if(flag) {
            func.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, limit);
        }
        
    }
}

This will make thousands of requests in resize
window.addEventListener("resize", expensive);

const betterExperience = throttledRequest(expensive, 500);

window.addEventListener("resize", betterExperience);

----------------------------------------------------------------

Debounce vs throtelling

Limiting the rate of requests we use above two.

Case 1: search bar auto suggestions
    on each "keypress" event API request will be done.
    we need to limit API calls
    1. Debounce : only make API call if the difference between two keystrokes > 300ms
    2. Throttling: only make API call after certain amount of time. After 300 ms.
In this case Debounce makes more sense

Case 2: addEventListener on resize of window
    on resize event 1000 of API call will be made
    1. Debounce : only make API call if the difference between two keystrokes > 300ms
    2. Throttling: only make API call after certain amount of time. After 300 ms.
In this case throttle make more sense. resize will keep on happening but we should make API call after 300ms.

Case 3: game were we are clicking a button and API call is happening
user can click that button 100 times/sec
    1. Debounce : only make API call if the difference between two clcik event > 500ms
    2. Throttling: only make API call after certain amount of time. After 500 ms.
if the gun is machine gun -- throtelling make more sense
if the gun is pistol --- debouncing make more sense.

----------------------------------------------------------------

Currying

Currying in JavaScript transforms a function with multiple arguments into a 
nested series of functions, each taking a single argument. 
Currying helps you avoid passing the same variable multiple times, and it helps you create a higher order function.

Two ways of currying
1. Bind method

let multiply = function(x, y) {
    console.log(x*y);
}

bind will create a copy/instance of multiply with a new 'this' context
here 2 will be assigned to x
let multiplyByTwo = multiply.bind(this, 2);
and y will be assigned to 3
multiplyByTwo(3);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(3);


2. Function closure

let multiply = function(x) {
    when a new function is returned, after returing also the function remberes the
    value of x. i.e. inner function forms a closure with outer fucntion lexical environment
    return function(y) {
        console.log(x * y);
    }
}

let multiplyByTwo = multiply(2);
multiplyByTwo(3);

let multiplyByThree = multiply(3);
multiplyByThree(3);

----------------------------------------------------------------------------------

Async vs defer attributes in javascript

async and defer are boolean attributes which are used along with script tags to 
load the external scripts efficiently into our web page.

3 cases we need to understand

1. normal
2. async
3. defer

when we load our webpage, 2 major things happen in our browser
1. HTML parsing
2. loading of scripts
    1. fetching the script from n/w
    2. executing the script line by line.

Case 1. Normal
    In this case the browser will read the html file line by line. Once it encounters 
    the script, it pause the parsing and fetches the script and executes the script and after that resume html paesing.
    JS is blocking the rendering of the HTML.
    Stops Html parsing --> scripts fetched --> scripts executed --> html parsing resumes
Case 2. Async
    In this case the browser will read html line  by line. Once it encounters the script,
    html parsing goes on and the script fetching is done asynchronously.
    Html parsing + scripts are fetched --> Html parsing stops --> execute fetched scripts --> resume html parsing
    DISADVANTAGE: async attributes does not gurantee the order of execution of scripts.
    UC: analytics script which are moduler, here we can use the async.
Case 3. defer
    In this case the browser will read html line  by line. Once it encounters the script,
    html parsing goes on and the script fetching is done asynchronously. scripts are executed once html parsin g is done.
    Html parsing + scripts are fetched --> Html parsing continues --> html parsing completes --> execute fetched scripts

    defer maintains the order of execution of scripts. mostly wise to use the defer.

-----------------------------------------------------------------------------------------------------

Event Bubbling and capturing

These are two ways of DOM propagation. suppose we have nested elements in html.
Suppose there is a parent div, and inside it a child div. if any evebt occures on child than it will be progated to parent.

Bubbling: in case of bubbling, first child's onclick will be called --> parent's onclick --> grandchild's onclick.
Capturing/Trickling: if u like child. first grandchild's onclick will be called --> parent's onclick --> child's onclick. i.e. opposite of bubbling.
    If you click grandchild --> only grandchild's onclick is called --> cant go further done.
    trickkle done from top to item clicked.

Here 1st argument is event name, 2nd is cb function to be called and 3rd is boolean
value useCapture to tell whether to use bubbling or capture. TRUE = capturing , FALSE/default = bubbling.


e.g. 1

document.getElementById("grandparent")
.addEventListener("click", () => {
    console.log("Grandparent clicked");
}, true);

document.getElementById("parent")
.addEventListener("click", () => {
    console.log("Parent clicked");
}, true);

document.getElementById("child")
.addEventListener("click", () => {
    console.log("Child clicked");
}, true);


Output:
Grandparent clicked
Parent clicked
Child clicked


e.g. 2

document.getElementById("grandparent")
.addEventListener("click", () => {
    console.log("Grandparent clicked");
}, true); //capturing

document.getElementById("parent")
.addEventListener("click", () => {
    console.log("Parent clicked");
}, false); //bubbling

document.getElementById("child")
.addEventListener("click", () => {
    console.log("Child clicked");
}, true); //capturing

Output:
Grandparent clicked
Child clicked
Parent clicked

e.g. 3

document.getElementById("grandparent")
.addEventListener("click", () => {
    console.log("Grandparent clicked");
}, true); //capturing

document.getElementById("parent")
.addEventListener("click", () => {
    console.log("Parent clicked");
}, false); //bubbling

document.getElementById("child")
.addEventListener("click", () => {
    console.log("Child clicked");
}, false); //bubbling

Output: click on child. First capturing cycle and then bubbling cycle

Grandparent clicked
Child clicked
Parent clicked

e.g. 4: Stop propagation in case of bubbling

document.getElementById("grandparent")
.addEventListener("click", () => {
    console.log("Grandparent clicked");
}, false); //bubbling

document.getElementById("parent")
.addEventListener("click", (e) => {
    console.log("Parent clicked");
    e.stopPropagation();
}, false); //bubbling

document.getElementById("child")
.addEventListener("click", (e) => {
    console.log("Child clicked");
    we are stoping the bubbling or propagation here
    e.stopPropagation();
}, false); //bubbling

Output: click on child. First capturing cycle and then bubbling cycle
Child clicked


e.g. 5: stop propagation in case of capturing cycle

document.getElementById("grandparent")
.addEventListener("click", () => {
    console.log("Grandparent clicked");
}, true); //capturing

document.getElementById("parent")
.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Parent clicked");
}, true); //capturing

document.getElementById("child")
.addEventListener("click", (e) => {
    console.log("Child clicked");
    we are stoping the bubbling or propagation here
    e.stopPropagation();
}, true); //capturing

Output: click on child. First capturing cycle and then bubbling cycle
Grandparent clicked
Parent clicked


----------------------------------------------------------------------

Event delegation

suppose we have a e-commerce site. and we have categoried as laptops, camera, shoes
when we click on one of them, it take us to a page where we clicked.

we will attach each event listner to the categories and onclick of that cb will be called.
By this way our webpage will have lot of event handlers hanging around and lead to performance issue.

Solutiion:
Instead of individually attaching single event handlers on each category,
 we can attach event handlers on parent of categories. 
so once I click on a category, it will bubble up the categories and trigger the cb attached to it.

e.g. 1 with categories, we click on one li tag and event gets delkegated to its parent.

document.getElementById("category").addEventListener("click", (e) => {
    console.log(e.target);
    if(e.target.tagName == 'LI') {
        window.location.href = "/" + e.target.id;
    }
    
})

e.g. 2 we want the name typed to be in uppercase always
document.getElementById("form").addEventListener("keyup", (e) => {
    console.log(e.target);
    if(e.target.dataset.uppercase !== undefined) {
        e.target.value = e.target.value.toUpperCase();
    }
});


Benfits of event delegation
1. memory optimization: only single event handler needed now.
2. writing less code to attach event to parent
3. DOM manipulation -- new child added, doesnt change anything beacuse they will bubble up of its own.


Drawbacks of event delegation
1. all the events are not bubbled up -- blur, rezize, scroll
2. stop propagation may defy the purpose.

----------------------------------------------------------------

Prototype and prototypal Inheritance

Prototype:
whenever u create an object, it attaches an object to ur original object.
let arr = ["dodo", "nunu", "nunuburi"];

e.g. 1:

let Object = {
    name: "Object",
    city: "city",
    getIntro: function() {
        console.log(this.name + " from " + this.city);
    }
}

arr.__proto__ == Array.prototype;
arr.__proto__.__proto__ == Object.prototype;
arr.__proto__.__proto__.__proto__ == null;

function.__proto__ == Function.prototype;
function.__proto__.__proto__ == Object.prototype;
function.__proto__.__proto__.__proto__ == null;


e.g. 2:
let arr = ["dodo", "nunu", "nunuburi"];

let object = {
    name: "Dodo",
    city: "Pune",
    getIntro: function() {
        console.log(this.name + " from " + this.city);
    }
}

let object2 = {
    name: "Nunu",
}

never do this
we can access the properties of the object inside object2
object2.__proto__ = object;
object.getIntro();
object2.getIntro(); // now this = Object2

------------------------------------------------------------------------------


Thinking Recursively

Question: below is ur input
let user = {
    name: "Dodo",
    address: {
        personal: {
            city: "Pune",
            area: "Hadapsar"
        },
        office : {
            city: "Pune",
            area: {
                landmark: "Magarpatta",
            }
        }
    }
}

and oputput will be something like below

let output = {
    user_name : "Dodo",
    user_address_personal_city : "Pune",
    user_address_personal_city_area : "Hadapsar",
    user_address_office_city : "Pune",
    user_address_office_area_landmark : "Magarpatta",
};

    Solution:

    let user = {
        name: "Dodo",
        address: {
            personal: {
                city: "Pune",
                area: "Hadapsar"
            },
            office : {
                city: "Pune",
                area: {
                    landmark: "Magarpatta",
                }
            }
        }
    }
    function magicFunction(user, parent, finalObject) {
        for(let [key, value] of Object.entries(user)) {
            if( typeof value !== 'object' && typeof value !== null) {
                finalObject[parent + "_" + key] = value;
            } else {
                magicFunction(value, parent + "_" + key, finalObject);
            }
        }
    }
    let finalObject = {}
    magicFunction(user, "user", finalObject);
    console.log(finalObject);

    --------------------------------------------------------------------------

    Local Storage & Session storage

    browser data. Key value pair.

    Session data: as soon as closes window, all data is earsed. data only persisted till window is open
        unlike cookies session data not send to API calls. large capacity = 5MB, Cookies = 4kb, Session.

    Local storage: same as session storage. doesnt clwar itself. if window is closes, data is persisted.
        capacity is more than session. more than 5MB.

    ----------------------
    Same origin policy: orign consit of 3 things 1. protocol 2. host 3. port
        we are setting data to local stroage, so that data will be stored at http://ratnadek.com
        so anything on that origin will be accessible.

    --------------------

    code for local storage
    window.localStorage.setItem("name", "dodo");
    localStorage.setItem("name2", "nunu");
    console.log(localStorage.getItem("name2"));
    localStorage.removeItem("name");

    -----------------------------
    output question 
    closure solution
functions are first class functions
function sum(a) {
    return function(b) {
        if(b) {
            return sum(a + b);
        }
        return a;
        
    }
}

console.log(sum(1)(2)(3)(4)());

----------------------------------------------------

CORS, preflight, OPTIONS method

CORS: Cross Origin Resounce Sharing

CORS provides additional http header to tell the browser, whether a specific webapp can share resources among themseleves
and those webapps are of cross origin.

How CORS works?

we have 2 origins, origin A, origin B
So, A is requesting something to B,in this case CORS preflight mechanism is follwed.
CORS preflight: is preflight call(options call) is made before actual API call. Thab B willd decide whether to alloe A or not and sends back a OPTIONS request
with additional http header. Than actual API call is made.

additional http header: 
    access-control-alloww-origin: * --> * means any other domain name can access the resource.
    if access-control-alloww-origin: http://example.com --> in that case only request from http://example.com will be allowed to access the resource.

    other method: access-control-alloww-method.

    Does preflight request is made for all API requests?
    ans: No. 2 types of request. simple request and preflight request.
    Some request browser automatically takes simple request and hence no preflight call is made.

------------------------------------------------------------------------------------------------

null vs undefined

Null in JavaScript means an empty value and is also a primitive type in JavaScript. 
The variable which has been assigned as null contains no value. Undefined, on the other hand, 
means the variable has been declared, but its value has not been assigned.






*/




















































    


 