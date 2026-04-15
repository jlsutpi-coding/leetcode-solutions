/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {

    let finalValue = original;
    const numsSort = nums.sort((a,b) => a - b);
    for (let i = 0; i < numsSort.length; i++) {
        if(numsSort[i] === finalValue) {
            finalValue = finalValue *2;
        }
    }
    return finalValue;
    
};