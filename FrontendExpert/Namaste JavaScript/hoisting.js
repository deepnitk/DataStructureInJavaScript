
// Hoisting in JavaScript

getName(); // function get hoisted 
console.log(x); //var get hoisted with undefined value
var x = 7;  
function getName() {
    console.log("Ratnadeep");
}

console.log(y); // let get hoisted differnetly in script scope(not in global scope), hence reference error is thrown.
let y = 7;
/**
 * expected output
 * Ratnadeep
   undefined
   ReferenceError: Cannot access 'y' before initialization
 */