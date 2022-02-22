const rlsPrompt = require("./rlsPrompt");

const firstName = rlsPrompt("What is your first name? ");
const lastName = rlsPrompt("What is your last name? ");
console.log(`Hello, ${firstName} ${lastName}!`);

module.exports = rlsPrompt;
