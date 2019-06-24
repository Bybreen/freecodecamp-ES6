// Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.

const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
