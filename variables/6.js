const FOO = "bar";
{
  const FOO = "qux";
}

console.log(FOO);

/*
  logs "bar" to the console without any errors
  Because FOO is declared again but within a separate scope
*/
