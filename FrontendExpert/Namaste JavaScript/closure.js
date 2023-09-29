function a() {
    var x = 1;
    function b() {
        console.log(x); // 1
    }
    b();
 }
 a();

//  ----------------------------------------------------------------

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
    // functions when returned they still remewmber there lexical scope

// ----------------------------------------------------------------

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
    // functions when returned they still remewmber there lexical scope

    // -----------     ------------------------

    function c() {
        var y = 1000;
        function a() {
            var x = 1;
            function b() {
                console.log(x); // 100
                console.log(y); //1000
            }
            x = 100;
            return b;
        }
        return a;
    }
    var res = c()();
    res();

    // ------------------------------------------------
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