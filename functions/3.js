const rlsPrompt = require("./rlsPrompt");

const firstNumber = rlsPrompt("Enter the first number: ");
const secondNumber = rlsPrompt("Enter the second number: ");

console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
