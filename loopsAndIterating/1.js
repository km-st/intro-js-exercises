// this code was already written using the forEach iteration method
const rlSync = require("readline-sync");

const age = require("../variables/age");

const currentAge = rlSync.question("How old are you?\n");

age(currentAge);
