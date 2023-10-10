function createSetTimeout() {
    var timerID = 1;
    var timerMap = {};

    function setTimeoutPoly(cb, delay, ...args) {
        var id = timerID++;
        timerMap[id] = true;
        var start = Date.now();
        function triggerCallback() {
            if (!timerMap[id]) return;
            const currtime = Date.now();
            if (currtime > start + delay) {
                cb.apply(this, args);
            } else {
                requestIdleCallback(triggerCallback);
            }
        }
        requestIdleCallback(triggerCallback);
        return timerID;
    }

    function clearTimeoutPoly(timerID) {
        delete timerMap[timerID];
    }

    return {setTimeoutPoly: setTimeoutPoly, clearTimeoutPoly: clearTimeoutPoly}
}

var {setTimeoutPoly, clearTimeoutPoly} = createSetTimeout();

// console.log('start');

// var myID = setTimeoutPoly((name) => {
//     console.log('setTimeout');
//     console.log(`my name is ${name}`);
// }, 5000, 'Ratnadeep');

// console.log('end');

export default createSetTimeout;