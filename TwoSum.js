/*
    Solution 1 -- 2 for loops.
    TC:O(N2) SC:O(1)
*/

function twoNumberSum(array, targetSum){
    for(let i = 0; i < array.length; i++) {
        const firstNum = array[i];
        for(let j = i + 1; j < array.length; j++) {
            const secondNum = array[j];
            if(firstNum + secondNum === targetSum) {
                return [firstNum, secondNum];
            }
        }
    }
    return [];
}