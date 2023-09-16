//Brute force using 3 loops
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0]
      for(let i = 0; i < nums.length; i++) {
        for(let j = i; j < nums.length; j++) {
          let sum = 0;
          for(let k = i; k <= j; k++) {
            sum += nums[k]; 
          }
          if (max < sum) {
            max = sum;
          }
        }
      }
      return max;
  };

  //Better approach with 2 loops

  /**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0]
      for(let i = 0; i < nums.length; i++) {
        let sum = 0;
        for(let j = i; j < nums.length; j++) {
          sum += nums[j]; 
          if (max < sum) {
            max = sum;
          } 
        }
      }
      return max;
  };

  // Best -- Kadane's algoridthm
  // O(N)
  /**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxi = nums[0];
    let sum = 0;
      for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if(maxi < sum) {
          maxi = sum;
        }
        if(sum < 0) {
          sum = 0;
        }
      }
      return maxi;
  };