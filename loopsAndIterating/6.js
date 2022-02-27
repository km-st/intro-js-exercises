const getFactorial = (counter, factorial = 1) => {
  return counter > 1
    ? getFactorial(counter - 1, factorial * counter)
    : factorial;
};

console.log(getFactorial(1)); // => 1
console.log(getFactorial(2)); // => 2
console.log(getFactorial(3)); // => 6
console.log(getFactorial(4)); // => 24
console.log(getFactorial(5)); // => 120
console.log(getFactorial(6)); // => 720
console.log(getFactorial(7)); // => 5040
console.log(getFactorial(8)); // => 40320
