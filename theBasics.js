// Question 1
const first = "john";
const last = "doe";
const full = `${first} ${last}`;
// Question 2
const number = 4936;
const ones = number % 10;
const onesPlace = number % 10;
const tens = number % 100;
const tensPlace = (number % 100) - ones;
const hundreds = number % 1000;
const hundredsPlace = (number % 1000) - tens;
const thousands = number % 10000;
const thousandsPlace = (number % 10000) - hundreds;
// Question 3
typeof "true" === String;
typeof false === Boolean;
typeof 1.5 === Number;
typeof 2 === Number;
typeof undefined === undefined;
typeof { foo: "bar" } === Object;

// Question 4
// because + concatenates strings

// Question 5
Number("5") + 10;

// Question 6
console.log(`The value of 5 + 10 = ${Number("5") + 10}`);

// Question 7
// no error, will return undefined

// Question 8
["spot", ""];

// Question 9
const pets = {
  asta: "dog",
  butterscotch: "cat",
  pudding: "cat",
  neptune: "fish",
  darwin: "lizard",
};

// Question 10
console.log("10", "foo" === "Foo");
/*
  false because strict equals operator takes into account letter casing
*/

// Question 11
console.log("11", parseInt("3.1415"));
/*
  It evaluates to 3 because parseInt does not parse non digit characters
  and is thus stopped short at the decimal point .
*/

// Question 12
console.log("12", "12" < "9");
/*
  This evaluates to true because it is comparing the first character of 12 i.e. 1
*/
