// Use simple fields with object literals to create and return a Person object.

const createPerson = (name, age, gender) => {
"use strict";
return {
name,
age,
gender
};
};

console.log(createPerson("Zodiac Hasbro", 56, "male"));
// returns an object
