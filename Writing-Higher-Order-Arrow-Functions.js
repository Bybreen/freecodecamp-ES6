// Use arrow function syntax to compute the square of only the positive integers (decimal numbers are not integers)
// in the array realNumberArray and store the new array in the variable squaredIntegers.

const squareList = (arr) => {
      "use strict";
      const squaredIntegers = arr.filter( (num) => num > 0 && num % parseInt(num) === 0 ).map( (num) => Math.pow(num, 2) );
      return squaredIntegers;
    };

    
    const squaredIntegers = squareList(realNumberArray);
    console.log(squaredIntegers);
