// Callback function

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

    // output
    // x
    // y
    // setTimeout after 5 sec