/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    let result = "";

    for(let i = 0; i < strs[0].length; i++) {
        const charToCheck = strs[0][i];
        for(let j = 1; j < strs.length; j++){
            if(i > strs[j].length || charToCheck !== strs[j][i]) {
                return result;
            }
        }
        result += charToCheck;
    }
    return result;
};