function scream(words) {
  words = words + "!!!!";
  return;
  console.log(words);
}

scream("Yipeee");

/*
  words is concatenated with "!!!!", but the function returns undefined before logging the output
*/
