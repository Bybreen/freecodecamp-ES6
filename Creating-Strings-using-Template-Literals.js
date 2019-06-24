//  Use template literal syntax with backticks to display each entry of the result object's failure array. 
// Each entry should be wrapped inside an li element with the class attribute text-warning, 
// and listed within the resultDisplayArray.

const result = {
success: ["max-length", "no-amd", "prefer-arrow-functions"],
failure: ["no-var", "var0n-top", "line-break"],
skipped: ["id-blacklist", "no-dupe-keys"]
};

function makeList(arr) {
"use strict";

const resultDisplayArray = [`<li class="text-warning">${arr[0]}</li>`, `<li class="text-warning">${arr[1]}</li>` ,
`<li class="text-warning">${arr[2]}</li>`];

return resultDisplayArray;
