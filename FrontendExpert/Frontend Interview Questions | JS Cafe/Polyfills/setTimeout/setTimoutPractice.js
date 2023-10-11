function createSetTimeout() {
    var timerID = 1;
    var timerMap = {};
    function setTimeoutPoly(cb, delay) {
        var ID = timerID++;
        timerMap[ID] = true;
        var start = Date.now();
        function triggerCallback() {
            if (!timerMap[ID]) return;
            const currTime = Date.now();
            if (currTime > start + delay) {
                cb();
            } else {
                requestIdleCallback(triggerCallback);
            }
        }
        requestIdleCallback(triggerCallback);
        return timerID;
    }

    function clearTimeoutPoly(ID) {
        delete timerMap[timerID];
    }
    
    return {setTimeoutPoly, clearTimeoutPoly}
}

console.log("Start");

const {setTimeoutPoly, clearTimeoutPoly} = createSetTimeout();
const myID = setTimeoutPoly(() => {
    console.log("My setTimout pollyfilled.");
}, 1000);

console.log("End");