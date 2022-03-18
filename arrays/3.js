const { isEven } = require("../utils");

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

const logEvenRecursive = (array) => {
  array.forEach((value) => {
    if (Array.isArray(value)) {
      logEvenRecursive(value);
    } else if (isEven(value)) {
      console.log(value);
    }
  });
};

logEvenRecursive(myArray);
