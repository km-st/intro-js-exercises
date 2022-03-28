function doSomething(string) {
  return string
    .split(" ")
    .reverse()
    .map((value) => value.length);
}

console.log(doSomething("Hello this is a string"));

/*
  returns an array of the length of words in a sentence in reverse order
*/
