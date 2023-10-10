/**
 * Problem statement:
 * Promise.all(array of tasks/API calls).then((data1, data2, data3, ....))
 *        .catch((error) =>{
 *              console.error(error
 *        }
 * we need to create our own vewrsion of Promise.all
 *
 */

const dummyAPI = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time);
        }, time);

    })
}

const tasksArray = [dummyAPI(1000), dummyAPI(3000), dummyAPI(5000)];

const promisePollyfill = ((tasksArray) => {
    return new Promise((resolve, reject) => {
        const output = [];
        tasksArray.forEach((promise, index) => {
            promise.then((data) => {
                output[index] = data;
                if (index === tasksArray.length - 1) {
                    resolve(output);
                }
            }).catch((error) => {
                reject(error);
            })
        });
    });

})

promisePollyfill(tasksArray).then((data) => {
    console.log(`output: ${data}`);
}).catch((err) => {
    console.log(`err: ${err}`);
})