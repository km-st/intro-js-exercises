const getSquare = (number) => Math.pow(number, 2);

const sumOfSquares = (array) =>
  array.reduce((previous, next, index) => {
    if (index === 1) return getSquare(previous) + getSquare(next);
    return previous + getSquare(next);
  });

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83
