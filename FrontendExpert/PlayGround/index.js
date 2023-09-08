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


*/









    


 