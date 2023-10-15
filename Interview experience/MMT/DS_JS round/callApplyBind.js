
/**
 * @description : Call method
 * Call is a function that helps you change the context of the invoking function. 
 * In layperson's terms, it helps you replace the value of this inside a function with whatever value you want.
 */

let name = {
    firstName: 'John',
    lastName: 'Doe',
}
let name2 = {
    firstName: 'Nandini',
    lastName: 'Roy',
};

let printFullName = function (hometown) {
    console.log(this.firstName + ' ' + this.lastName + ' from ' + hometown);
}



//Function borrowing
printFullName.call(name, "West Bengal");
printFullName.call(name2, "Pune");

//----------------------------------------------------------------

/**
 * @description : apply method
 * only differnece with call method is the way we  pass arguments.
 * arguments are passed as array list.
 */



printFullName.apply(name, ["Burdwan", "West Bengal"]);
printFullName.apply(name2, ["Pune", "Maharastra"]);

//----------------------------------------------------------------

/**
 * @description : bind method
 * bind method works exactly same as call method.
 * only differnece is we cannot directly invoke the method. Instead it will bind the required object to the method and return a method. 
 */

const printMyName = printFullName.bind(name, "West Bengal");
printMyName();