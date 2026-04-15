/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let numSorted = nums.sort();
    for(let i = 0; i < numSorted.length - 1; i++) {
        if(numSorted[i] === numSorted[ i +1 ]) return true;
    }
    return false;
};