//Question 1
// var p = new Promise((resolve, reject) => {
//     reject(new Error("Promise rejected"));
// });
// p.catch((err) => {
//     console.log(err.message); 
// })
// p.catch((err) => {
//     console.log(err.message);
// })

/**
 * @Output
 * Promise rejected
 * Promise rejected
 * @Explanation
 * We can have multiple catch calls. But Catch chain will not work.
 */
// ----------------------------------------------------------------

//Question 2
// var p = new Promise((resolve, reject) => {
//     reject(new Error("Promise rejected"));
// })
//     .catch((err) => {
//         console.log(err.message);
//     })
//     .then((err) => {
//         console.log(err);
//     })

/**
 * @Output
 * Promise rejected
 * Undefined
 * @Explanation
 * when error is caught on catch, it will print but will not return anything. Hence then don't get anything to print, hence undefined.
 */
// ----------------------------------------------------------------

//Question 3
// var p = new Promise((resolve, reject) => {
//     reject(new Error("Promise rejected"));
// })
//     .then((err) => {
//         console.log('I am in then');
//         console.log(err);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     })

/**
 * @Output
 * Promise rejected
 * @Explanation
 * when promise gets rejected it directly goes to catch and skips then.
 */
// ----------------------------------------------------------------

//Question 4
// var p = new Promise((resolve, reject) => {
//     relove(new Error("Promise resolved"));
// })
//     .then(() => {
//         throw Error("oh no!");
//     })
//     .catch((err) => {
//         return "actually, that worked!"
//     })
//     .then(message => console.log(message));

/**
 * @Output
 * actually, that worked!
 * @Explanation
 * when promise gets resolved control goes to then, from then it throws error and caught in catch 
 * and from catch it again returns and goes to then and prints message.
 */
// ----------------------------------------------------------------

//Question 5
// Promise.resolve('Success')
//     .then((data) => {
//         return data.toUpperCase();
//     })
//     .then(data => {
//         console.log(data);
    // })

/**
 * @Output
 * SUCCESS
 * @Explanation
 * when promise gets resolved control goes to then, from then it returns data.uppercase error 
 * and control goes to next then and prints SUCCESS.
 */
// ----------------------------------------------------------------

//Question 6

// const p = new Promise(res => res(2));
// p.then((data) => {
//     console.log(data);
//     return data * 2;
// })
// .then((data) => {
//     console.log(data);
//     return data * 2;
// })
// .finally((data) => {
//     console.log(data, 'Finished');
//     return 
// })
// .then((data) => {
//     console.log(data);
//     return data * 2;
// });

/**
 * @Output
 * 2
 * 4
 * undefined Finished
 * 8
 * @Explanation
 * finally block can not consume and data and cannot return as well.
 */
// ----------------------------------------------------------------



