
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
    for(var i= 1; i <= 3; i++) {
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
    var x = 100; this will still form a closure. closure does not depends on any particular order.
    return inner;
}
outer()(); //calling inner function. prints 100;

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
As inner is forming closure with x = 10, so it will first check in innner scope and than in outer scope. 
But if we remove x = 10 , then inner closuere will go and search x till Global scope. that time it will point to x = 100;

----------------------------------------------------------------

Advantages of closures
1. used in setTimeout.
2. used in Module patterns.
3. used in function currying
4. memoize
5. once
6. helps in data hiding and encapsulation.


1. helps in data hiding and encapsulation.

Major flaw with below code is anybody can use this counter variable
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
*/