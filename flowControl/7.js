const capitalizeAboveTen = (string) => {
  return string.length > 10 ? string.toUpperCase() : string;
};

console.log(capitalizeAboveTen("hello world"));
console.log(capitalizeAboveTen("goodbye"));
