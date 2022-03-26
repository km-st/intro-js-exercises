let foo = {
  a: "hello",
  b: "world",
};

let qux = "hello";

function bar(argument1, argument2) {
  argument1.a = "hi";
  argument2 = "hi";
}

bar(foo, qux);

console.log(foo.a); // hi
console.log(qux); // hello

/*
  because foo is mutable as an object, it's property .a gets changed
  and argument1 is referencing foo. argument2 gets reassigned a new value
  but it does not reference the original qux variable so that remains as 
  'hello'
*/
