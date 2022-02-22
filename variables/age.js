const yearGaps = [10, 20, 30, 40];

const age = (currentAge) => {
  console.log(`You are ${currentAge} years old.`);
  yearGaps.forEach((yearGap) => {
    console.log(
      `In ${yearGap} years, you will be ${
        Number(currentAge) + yearGap
      } years old.`
    );
  });
};

module.exports = age;
