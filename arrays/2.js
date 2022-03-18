const { isEven } = require("../utils");

const logEven = (array) => {
  array.forEach((value) => {
    if (isEven(value)) console.log(value);
  });
};

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

logEven(myArray);
