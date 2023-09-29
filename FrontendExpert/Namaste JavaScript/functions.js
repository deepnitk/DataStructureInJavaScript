
// Functions in JavaScript
    var x = 1;
    a();
    b();
    console.log(x); // 1

    function a() {
    var x = 10;
    console.log(x); // 10 Variables declared with var, let and const are quite similar when declared inside a function. They have function scope.
    }

    function b() {
    var x = 1000;
    console.log(x); // 1000
    }

    /**
     * expected output
     * 10
     * 1000
     * 1
     */