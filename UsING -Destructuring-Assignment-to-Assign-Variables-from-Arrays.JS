// Use destructuring assignment to swap the values of a and b so that a receives the value stored in b,
// and b receives the value stored in a.

let a = 8, b = 6;
(() => {
"use strict";

[a = 6, b = 8];
})();

console.log(a) // 6
console.log(b) // 8
