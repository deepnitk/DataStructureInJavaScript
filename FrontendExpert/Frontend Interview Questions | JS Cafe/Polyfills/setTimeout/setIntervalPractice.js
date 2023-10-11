import createSetTimeout from "../setTimeout/setTimeout.js";
function createSetInterval() {
    var intervalID = 1;
    var intervalMap = {};
    var {setTimeoutPoly, clearTimeoutPoly} = createSetTimeout();
    function setIntervalPoly(cb, delay) {
        var ID = intervalID++;
        function reiterate() {
            intervalMap[ID] = setTimeoutPoly(() => {
                cb();
                if(intervalMap[ID]) {
                    reiterate();
                }
            }, delay);
        }
        reiterate();
        return ID;
    }

    function clearIntervalPoly(ID) {
        clearTimeoutPoly(ID);
        delete intervalMap[ID];
    }
    
    return  {setIntervalPoly, clearIntervalPoly};
}
var {setIntervalPoly, clearIntervalPoly} = createSetInterval();
var counter = 0;
const myID = setIntervalPoly(() => {
    console.log("setInterval pollyfilled");
    counter++;
    if (counter >= 2) clearIntervalPoly(myID);
}, 1000);