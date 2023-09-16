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

/*
    Solution 2 -- Hash Table .
    TC:O(N) SC:O(n)
*/

function twoNumberSum(array, targetSum){
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        let potentialMatch = target - nums[i];
        if ( map.has(potentialMatch) ) {
            return [map.get(potentialMatch), i];
        }
        map.set(nums[i], i);
    }
    return []
}

/*
    Solution 3 -- Sorting .
    TC:O(N) SC:O(1)
*/
// This solution will not help with we need to return the index.
function twoNumberSum(array, targetSum){
    array.sort((a, b) => a - b);
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        const currSum = array[left] + array[right];
        if (currSum === targetSum) {
        return [array[left], array[right]];
        } else if(currSum < targetSum) {
        left++;
        } else if (currSum > targetSum) {
        right--;
        }
    }
    return [];
}