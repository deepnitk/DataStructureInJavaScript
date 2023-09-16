//Nice solution
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    /*
        nums = [1, 2, 3, 4];
        left =[1, 2, 6, 24];
        right =[24, 24, 12, 4];
        output = [24, 12, 8, 6];
    */
   
    const n = nums.length;
    let left = Array(n).fill(0);
    let right = Array(n).fill(0);
    let output = Array(n).fill(0);
    left[0] = nums[0];
    right[n -  1] = nums[n - 1];
    
    //Fill left array
    for(let i = 1; i < n; i++) {
        left[i] = left[i -1] * nums[i];
    }

    //Fill right array
    for(let i = n -2; i > 0; i--) {
        right[i] = right[i + 1] * nums[i];
    }

    //Fill output array
    output[0] = right[1];
    output[n - 1] = left[n - 2];
    for(let i = 1; i < n - 1 ; i++) {
        output[i] = left[i - 1] * right[i + 1]; 
    }

    return output;
};