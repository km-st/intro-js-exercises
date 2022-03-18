const { isEven } = require("../utils");

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

const logEvenOdd = (array) => {
  return array.map((value) => {
    if (isEven(value)) return "even";
    return "odd";
  });
};

console.log(logEvenOdd(myArray));
