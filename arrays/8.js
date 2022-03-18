const { isOdd } = require("../utils");

const oddLengths = (array) =>
  array.reduce((filteredLengths, string) => {
    const length = string.length;
    if (isOdd(length)) return [...filteredLengths, length];
    return filteredLengths;
  }, []);

let arr = ["a", "abcd", "abcde", "abc", "ab"];
console.log(oddLengths(arr)); // => [1, 5, 3]
