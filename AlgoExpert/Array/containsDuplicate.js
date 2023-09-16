// Brute force approach
//TC: O(N) SC:O(N)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set();
    for(let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true;
        }
        set.add(nums[i]);
    }
    return false;
};

//Space complexity optimised
//TC: O(NlOGN) SC:O(1)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort();
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]) {
            return true;
        }
    }
    return false;
    
 };