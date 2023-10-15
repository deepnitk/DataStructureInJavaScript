//Question 1

// const person = {
//     name: 'Ratnadeep',
//     getName: function() {
//         return `${this.name} is my name`;
//     }
// };

// console.log(person.getName());

/**
 * @Output
 * Ratnadeep is my name
 * @Explanation
 * this is anything left of .getName() i.e. person. And person's name is Ratnadeep.
 */
// ----------------------------------------------------------------

//Question 2

// function test() {
//     console.log(this); // will refer to global Object.
// }
// test();

/**
 * @Output
 * Object [global]
 * @Explanation
 * this inside a function refers to the global Object.
 */
// ----------------------------------------------------------------

//question 3
// const person = {
//     name: 'Ratnadeep',
//     getName: () => {
//         return `${this.name} is my name`;
//     }
// };

// console.log(person.getName());

/**
 * @Output
 * undefined is my name
 * @Explanation
 * this inside a arrow function refers to the global Object and in global object there is no name var.
 * name is blocked/script scope here(as const and let are script scoped).
 */
// ----------------------------------------------------------------


//Question 4

// function user() {
//     this.name = 'Ratnadeep';
//     this.score = 20;
//     this.sayUser = function () {
//         console.log(this.name);
//         function innerFunc () {
//             console.log(this.name);
//         }
//         innerFunc();
//         // innerFunc.call(this);
//     }
// }

// let name = new user();
// name.sayUser();

/**
 * @Output
 * Ratnadeep
 * undefined
 * @Explanation
 * the first console inside annoymous function have access to the this. But console iside innerFunc will refer to global Object
 * and Global dont have a name var.
 */
// ----------------------------------------------------------------

//Question 5

// function user() {
//     this.name = 'Ratnadeep';
//     this.score = 20;
//     this.sayUser = function () {
//         console.log(this.name);
//         const innerFunc = ()  => {
//             console.log(this.name);
//         }
//         innerFunc();
//     }
// }

// let person = new user();
// person.sayUser();

/**
 * @Output
 * Ratnadeep
 * Ratnadeep
 * @Explanation
 * same as abaove. instead of innerFunc we used arrow function and in case of arrow function no this is defined instead it will check in lexical scope
 */
// ----------------------------------------------------------------

// 
/**
 * implicit Binding -- this binding. anything left of dot is this
 * explicit Binding -- call apply bind
 */

//Example 1 : this inside a function: this will be pointing to its parent scope in this case window.

// this.a = 5;
// function getParms() {
//     console.log(this.a); // 5
// }

// getParms();

/**
 * @Output
 * 5
 * @explanation
 * this inside a function will refer to its parent scope
 */

// ----------------------------------------------------------------

//example 2: this inside a function and inside a Object. this will be pointing to its immediate parent in this case its user Object.

// let user = {
//     name: 'John',
//     age: '13',
//     getdetails() {
//         console.log(this.name);
//     }
// }
// user.getdetails();

/**
 * @Output
 *  John
 * @explanation
 * this inside a function (inside a Object) will refer to the Object and not to the window object.
 */

// ----------------------------------------------------------------

//Example 3: this inside a function and inside a nested Object. th

// let user = {
//     name: 'John',
//     age: '13',
//     innerObj: {
//         newName: 'Romeo',
//         getdetails () {
//             console.log(this.newName + ' ' + this.name);
//         }
//     }
// }
// user.getdetails();

/**
 * @Output
 *  Romeo undefined
 * @explanation
 * this.newName will point to innerObj, hence newName got printed. And this.name will point to innerObj only, but innerobj dont ahve a name and hence undefined.
 */

// ----------------------------------------------------------------

//example 2: this inside a arrow function and inside a Object. this will be pointing to its parent + its lexical scope

// let user = {
//     name: 'John',
//     age: '13',
//     getdetails: () => {
//         console.log(this);
//     }
// }
// user.getdetails();

/**
 * @Output
 *  'Nothing printed'
 * @explanation
 * this inside a arrow function comes from parent function. Hence in this case this will be pointing to window.
 */

// ----------------------------------------------------------------

// let user = {
//     name: 'John',
//     age: '13',
//     getdetails() {
//         const nestedArrow = () => {
//             console.log(this.name);
//         };
//         nestedArrow();
//     }
    
// }
// user.getdetails();

/**
 * @Output
 *  John
 * @explanation
 * this inside a arrow function refers to its parent function i.e. getDetails() and getDetails() as a normal function pointing to the Object i.e. User
 */

// ----------------------------------------------------------------

// class User {
//     constructor(name) {
//         this.name = name;
//     }
//     getName() { 
//         console.log(this.name); 
//     }
// }

// const deep = new User('deep');
// deep.getName();

/**
 * @Output
 *  deep
 * @explanation
 * this inside a class will point to everything inside constructor.
 */

// ----------------------------------------------------------------



//Most asked Interview Questions

// question 1

// const user = {
//     firstName: 'John',
//     getName() {
//         const firstName = 'Nunu';
//         return this.firstName;
//     },
// };
// console.log(user.getName()); // John. this inside a function refers to parent i.e. user Object

// ---------------------------------------

//Question 2: What is the result of accesing its ref? why?

// function makeUser() {
//     return {
//         name: 'John',
//         ref: this,
//     };
// }

// let user = makeUser();
// console.log(user.ref.name); 
//undefined. here ref is this. this will be pointing to window. when we are calling makeUser() function, this inside it pointing to window object
// because makeUser() is called in window scope.

//How to fix above problem?

// function makeUser() {
//     return {
//         name: 'John',
//         ref() {
//             return this
//         }
//     };
// }

// let user = makeUser();
// console.log(user.ref().name);  //John. beacuse ref is a function now, and this will refer to its parent i.e outside return block.

//Question 3: What is the output?

// const user = {
//     name: 'John',
//     logMessage() {
//         console.log(this.name);
//     },
// }

// setTimeout(user.logMessage, 1000);

/**
 * @output: undefined
 * @reason: setTimeout is using user.logMessage as a callback and it will no longer have access to user object.
 */

//How will you fix it? use anoynymous method or arrow function

// const user = {
//     name: 'John',
//     logMessage() {
//         console.log(this.name);
//     },
// }

// setTimeout(function () {
//     user.logMessage();
//     }
//     , 1000);

// ----------------------------------------------------------------

// Question 4: What will be the output?

// let name = 'John';
// const user = { 
//     name: 'Ratnadeep', 
//     greet() { 
//         return `Hello, ${this.name}!`; 
//     }, 
//     farewell: () => { 
//         return `Goodbye, ${this.name}!`; 
//     } }; 
//     console.log(user.greet()); // What is logged?  // Hello, Ratnadeep! is a normal function hence this refers to parent object i.e. user
//     console.log(user.farewell()); // What is logged? // Goodbye, undefined! // it's a arrow function and hence this refers to window.

// -----------------------------

//Question 5: Create an Object calculator.


// let calculator = {
//     read() {
//         this.a = +prompt('a =', 0);
//         this.b = +prompt('b =', 0);
//     },
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     }

    

// }

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

//Question 6: what is the output?

// var length = 4;
// function callback() {
//     console.log(this.length);
// }

// const object = {
//     length: 5,
//     method(fn) {
//         fn();
//     },
// }
// object.method(callback);

/**
 * @Output
 *  4
 * @explanation
 * fn() is called inside of the Object, hence it will not target Object. It will atrget Global
 */

// ----------------------------------------------------------------

