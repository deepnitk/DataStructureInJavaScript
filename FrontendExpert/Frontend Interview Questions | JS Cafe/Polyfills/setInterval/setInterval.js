import createSetTimeout from "../setTimeout/setTimeout.js";

function createSetInterval() {
    var intervalID = 1;
    var intervalMap = {};
    var {setTimeoutPoly, clearTimeoutPoly} = createSetTimeout();

    function setIntervalPoly(cb, delay, ...args) {
        var id = intervalID++;
        function reiterate() {
            intervalMap[id] = setTimeoutPoly(() => {
                cb.apply(this, args);
                //once delay is over cb will be called and that cb func will return some ID, 
                //and hence next line will be called and reiterate will be called again.
                if (intervalMap[id]) {
                    reiterate();
                }
            }, delay)
        }
        reiterate();
        return id;
    }

    function clearIntervalPoly(id) {
        clearTimeoutPoly(id);
        delete intervalMap[id];
    }

    return  {setIntervalPoly, clearIntervalPoly};

}

var {setIntervalPoly, clearIntervalPoly} = createSetInterval();
var counter = 0;
const myID =setIntervalPoly(() => {
    console.log("setInterval pollyfilled");
    counter++;
    if (counter >= 2) clearIntervalPoly(myID);
}, 1000);
