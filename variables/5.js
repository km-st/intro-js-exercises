let foo = "bar";
{
  let foo = "qux";
}

console.log(foo);

/*
  logs "bar" to the console because that's the value foo
  has been declared with within its shared scope
*/
