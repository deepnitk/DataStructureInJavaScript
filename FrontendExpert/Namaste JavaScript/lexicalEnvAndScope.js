// Lexical environment and scope 1
function a() {
    console.log(b); // 10
}
var b = 10;
a();

// Lexical environment and scope 2
 function x() {
    y();
    function y() {
        console.log(c); //1 --> x will be searched in b()'s scope and then on a()'s scope and then will be found in global scope
    }
}
var c = 100;
x();