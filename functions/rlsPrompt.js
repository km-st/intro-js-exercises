const readlineSync = require("readline-sync");

const rlsPrompt = (question) => {
  return readlineSync.question(question);
};

module.exports = rlsPrompt;
