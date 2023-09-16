/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxi = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        let smallestSide = Math.min(height[left], height[right]);
        let area = (right - left) * smallestSide;
        
        if (area > maxi) {
            maxi = area;
        }

        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxi;
};