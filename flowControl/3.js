const evenOrOdd = (num) => {
  if (!Number.isInteger(num)) {
    throw new Error(`${num} is not an integer`);
    return;
  }

  if (num % 2) {
    console.log("odd");
    return;
  }
  console.log("even");
};
