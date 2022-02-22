let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

/*
  it logs 1 because bar within foo is different to the one on line 1
  having been declared within a different scope
*/
