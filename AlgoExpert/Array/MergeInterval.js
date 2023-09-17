/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
    if (intervals.length < 2) {
        return intervals;
    }

    intervals.sort((interval1, interval2) => interval1[0] - interval2[0]);

    let res = [];
    let j = 0;

    res.push(intervals[0]);

    for(let i = 0; i < intervals.length; i++) {
        if(res[j][1] < intervals[i][0]) { //curr interval is not overlapping
            res.push(intervals[i]);
            j++;
        } else {
            res[j] = [
                res[j][0], 
                Math.max(intervals[i][1] , res[j][1])
            ];
        }
    }
    return res;
};