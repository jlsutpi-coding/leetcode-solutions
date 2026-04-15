/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let previousSum = 0;
    const resultArr = [];
    for(let i = 0; i < nums.length; i++ ) {
        previousSum += nums[i];
        resultArr.push(previousSum);
    }
    return resultArr;
};