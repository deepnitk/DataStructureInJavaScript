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

function user() {
    this.name = 'Ratnadeep';
    this.score = 20;
    this.sayUser = function () {
        console.log(this.name);
        const innerFunc = ()  => {
            console.log(this.name);
        }
        innerFunc();
    }
}

let person = new user();
person.sayUser();

/**
 * @Output
 * Ratnadeep
 * Ratnadeep
 * @Explanation
 * same as abaove. instead of innerFunc we used arrow function and in case of arrow function no this is defined instead it will check in lexical scope
 */
// ----------------------------------------------------------------