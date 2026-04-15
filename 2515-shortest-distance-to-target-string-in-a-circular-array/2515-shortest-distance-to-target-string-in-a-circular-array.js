/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closestTarget = function(words, target, startIndex) {
    let distance = Infinity;
    for(let i = 0; i < words.length; i++) {
        if(words[i] === target) {
            const leftDistance = Math.abs(i - startIndex);
            const rightDistance = words.length - leftDistance;
            distance = Math.min(distance, rightDistance, leftDistance);
        }

    }
    return distance === Infinity ? -1 : distance;
};