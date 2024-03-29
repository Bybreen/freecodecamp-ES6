// Use destructuring assignment with the rest operator to perform an effective Array.prototype.slice() so that arr is a 
// sub-array of the original array source with the first two elements omitted.

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
"use strict";

const = [,,...arr] = list;

return arr;
}

const - removeFirstTwo(source);

console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); should be [1,2,3,4,5,6,7,8,9,10];
