// Use class keyword and write a proper constructor to create the Vegetable class.

// The Vegetable lets you create a vegetable object, with a property name, to be passed to constructor.

function makeClass() {
  "use strict";
  
  class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
 
  return Vegetable;
}
