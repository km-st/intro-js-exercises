let counter = 0;

while ((counter = 1)) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

/*
  the assignment within the while condition will always resolve to a truthy value, 1
  counter is also constantly reinitialised as 1; it thus never gets past 2 to break the loop
*/
