const numberRange = (num) => {
  if (num >= 0 && num <= 50) {
    console.log(`${num} is between 0 and 50`);
  }
  if (num >= 51 && num <= 100) {
    console.log(`${num} is between 51 and 100`);
  }
  if (num > 100) {
    console.log(`${num} is greater than 100`);
  }
  if (num < 0) {
    console.log(`${num} is less than 0`);
  }
};

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
