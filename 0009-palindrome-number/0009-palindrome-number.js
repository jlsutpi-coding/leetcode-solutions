/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0 ) return false;
    if(x % 10 == 0 && x!==0) return false;

   let original = x;
   let reversed = 0;

   while(original > 0) {
    const lastValue = original % 10;
    reversed = reversed * 10 + lastValue;
    original = Math.floor(original / 10);
   }
   if(reversed !== x){
    return false;
   }
   return true;
};