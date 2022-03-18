const { isOdd } = require("../utils");

const oddLengths = (array) => {
  const arrayStringToLength = array.map((string) => string.length);
  return arrayStringToLength.filter((length) => isOdd(length));
};

let arr = ["a", "abcd", "abcde", "abc", "ab"];
console.log(oddLengths(arr)); // => [1, 5, 3]
