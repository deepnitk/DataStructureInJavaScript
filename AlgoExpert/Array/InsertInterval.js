/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let res = [];
    if (intervals.length === 0) {
        res.push(newInterval)
        return res;
    }
    
    for(let i = 0; i < intervals.length; i++) {
        //new Interval will go before the cureent interval
        if(newInterval[1] < intervals[i][0]) {
            res.push(newInterval);
            for(let j = i; j < intervals.length; j++) {
                res.push(intervals[j]);
            }
            return res;
            
        } else if (newInterval[0] > intervals[i][1]) { // new Interval goes after current interval
            res.push(intervals[i]);
            
        } else { //overlapping
            newInterval = [
                Math.min(newInterval[0], intervals[i][0]), 
                Math.max(newInterval[1], intervals[i][1])
            ];
        }
    }
    res.push(newInterval);
    return res;
};