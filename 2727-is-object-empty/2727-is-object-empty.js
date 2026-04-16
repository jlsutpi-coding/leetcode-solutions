/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(typeof obj === "object" &&
     !Object.keys(obj).length){
        return true;
    }
    return false
};